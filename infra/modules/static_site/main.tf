locals {
  content_types_to_compress = [
    "text/plain",
    "text/html",
    "text/css",
    "text/javascript",
    "application/x-javascript",
    "application/javascript",
    "application/json",
    "application/xml"
  ]

  mime_types = {
    ".json"        = "application/json"
    ".js"          = "application/javascript"
    ".css"         = "text/css"
    ".html"        = "text/html"
    ".ico"         = "image/x-icon"
    ".png"         = "image/png"
    ".jpg"         = "image/jpeg"
    ".jpeg"        = "image/jpeg"
    ".txt"         = "text/plain"
    ".xml"         = "application/xml"
    ".webp"        = "image/webp"
    ".map"         = "application/json"
    ".webmanifest" = "application/manifest+json"
  }
}

data "azurerm_client_config" "current" {}

resource "azuread_service_principal" "cdn" {
  application_id = "205478c0-bd83-4e1b-a9d6-db63a3e1e1c8"
  use_existing = true
}

resource "azurerm_storage_blob" "site_content" {
  for_each = fileset(var.site_directory, "**")

  storage_account_name   = var.storage_account_name
  storage_container_name = var.storage_account_web_container

  name         = each.key
  source       = "${var.site_directory}/${each.value}"
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value))
  content_md5  = filemd5("${var.site_directory}/${each.value}")
  type         = "Block"
}

resource "azurerm_cdn_profile" "cdn_profile" {
  name                = "cdnp-${var.name}"
  resource_group_name = var.resource_group_name
  location            = var.location
  sku                 = "Standard_Microsoft"
}

resource "azurerm_cdn_endpoint" "cdn_endpoint" {
  name                      = "cdne-${var.name}"
  profile_name              = azurerm_cdn_profile.cdn_profile.name
  location                  = azurerm_cdn_profile.cdn_profile.location
  resource_group_name       = var.resource_group_name
  is_compression_enabled    = true
  is_http_allowed           = true
  optimization_type         = "GeneralWebDelivery"
  content_types_to_compress = local.content_types_to_compress
  origin_host_header        = var.storage_account_web_host

  delivery_rule {
    name  = "HTTPSRedirect"
    order = 1

    request_scheme_condition {
      operator         = "Equal"
      negate_condition = false
      match_values     = ["HTTP"]
    }

    url_redirect_action {
      redirect_type = "Found"
      protocol      = "Https"
    }
  }

  delivery_rule {
    name  = "Caching"
    order = 2

    request_uri_condition {
      operator = "Any"
    }

    request_method_condition {
      operator = "Equal"
      match_values = ["GET", "HEAD", "OPTIONS"]
    }

    cache_expiration_action {
      behavior = "SetIfMissing"
      duration = "30.00:00:00"
    }
  }


  origin {
    host_name = var.storage_account_web_host
    name      = var.storage_account_name
  }
}

resource "azurerm_dns_cname_record" "cname" {
  name                = var.subdomain
  resource_group_name = var.dns_resource_group_name
  zone_name           = var.dns_zone_name
  ttl                 = 3600
  target_resource_id  = azurerm_cdn_endpoint.cdn_endpoint.id
}

resource "azurerm_cdn_endpoint_custom_domain" "custom_domain" {
  cdn_endpoint_id = azurerm_cdn_endpoint.cdn_endpoint.id
  host_name       = "${var.subdomain}.${var.dns_zone_name}"
  name            = "cdom-${var.name}"

  cdn_managed_https {
    certificate_type = "Dedicated"
    protocol_type    = "ServerNameIndication"
  }
}
