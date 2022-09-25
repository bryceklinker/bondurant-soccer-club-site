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
    ".json" = "application/json"
    ".js"   = "application/javascript"
    ".css"  = "text/css"
    ".html" = "text/html"
    ".ico"  = "image/x-icon"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".txt"  = "text/plain"
    ".xml"  = "application/xml"
    ".webp" = "image/webp"
    ".map"  = "application/json"
    ".webmanifest" = "application/manifest+json"
  }
}

resource "azurerm_storage_account" "site_storage" {
  location            = var.location
  name                = "st${replace(var.name, "-", "")}"
  resource_group_name = var.resource_group_name

  account_tier              = "Standard"
  account_replication_type  = "LRS"
  enable_https_traffic_only = true

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }

  tags = var.tags
}

resource "azurerm_storage_blob" "site_content" {
  for_each = fileset(var.site_directory, "**")

  storage_account_name   = azurerm_storage_account.site_storage.name
  storage_container_name = "$web"

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
  origin_host_header        = azurerm_storage_account.site_storage.primary_web_host

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

  origin {
    host_name = azurerm_storage_account.site_storage.primary_web_host
    name      = azurerm_storage_account.site_storage.name
  }
}

resource "azurerm_dns_a_record" "root_domain" {
  name                = var.dns_zone_name
  resource_group_name = var.dns_resource_group_name
  ttl                 = 3600
  zone_name           = var.dns_zone_name
  target_resource_id = azurerm_cdn_endpoint.cdn_endpoint.id
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

resource "azurerm_cdn_endpoint_custom_domain" "root_domain" {
  count = var.is_root_domain ? 1 : 0
  cdn_endpoint_id = azurerm_cdn_endpoint.cdn_endpoint.id
  host_name       = var.dns_zone_name
  name            = "cdom-${var.name}"

  cdn_managed_https {
    certificate_type = "Dedicated"
    protocol_type    = "ServerNameIndication"
  }
}

resource "azurerm_log_analytics_workspace" "log_workspace" {
  location            = var.location
  name                = "log-${var.name}"
  resource_group_name = var.resource_group_name
  daily_quota_gb      = 0.5
}

resource "azurerm_application_insights" "web_app_insights" {
  location            = var.location
  name                = "appi-${var.name}"
  resource_group_name = var.resource_group_name
  application_type    = "other"
  workspace_id        = azurerm_log_analytics_workspace.log_workspace.id

  tags = var.tags
}
