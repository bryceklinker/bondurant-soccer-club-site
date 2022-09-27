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

resource "azurerm_key_vault" "vault" {
  location            = var.location
  resource_group_name = var.resource_group_name
  name                = "kv-${var.name}"
  sku_name            = "standard"
  tenant_id           = data.azurerm_client_config.current.tenant_id
}

resource "azurerm_key_vault_access_policy" "tf" {
  key_vault_id = azurerm_key_vault.vault.id
  object_id    = data.azurerm_client_config.current.object_id
  tenant_id    = data.azurerm_client_config.current.tenant_id

  certificate_permissions = [
    "Backup",
    "Create",
    "Delete",
    "DeleteIssuers",
    "Get",
    "GetIssuers",
    "Import",
    "List",
    "ListIssuers",
    "ManageContacts",
    "ManageIssuers",
    "Purge",
    "Recover",
    "Restore",
    "SetIssuers",
    "Update"
  ]

  key_permissions = [
    "Backup",
    "Create",
    "Decrypt",
    "Delete",
    "Encrypt",
    "Get",
    "Import",
    "List",
    "Purge",
    "Recover",
    "Restore",
    "Sign",
    "UnwrapKey",
    "Update",
    "Verify",
    "WrapKey",
    "Release",
    "Rotate",
    "GetRotationPolicy",
    "SetRotationPolicy"
  ]

  secret_permissions = [
    "Backup",
    "Delete",
    "Get",
    "List",
    "Purge",
    "Recover",
    "Restore",
    "Set"
  ]
}

resource "azurerm_key_vault_access_policy" "cdn" {
  key_vault_id = azurerm_key_vault.vault.id
  object_id    = azuread_service_principal.cdn.object_id
  tenant_id    = data.azurerm_client_config.current.tenant_id

  key_permissions = [
    "Get"
  ]

  secret_permissions = [
    "List",
    "Get"
  ]

  certificate_permissions = [
    "List",
    "Get"
  ]
}

resource "azurerm_key_vault_certificate_issuer" "digicert" {
  key_vault_id  = azurerm_key_vault.vault.id
  name          = "issuer-${var.name}"
  provider_name = "DigiCert"
  account_id    = var.digicert_account_id
  org_id        = var.digicert_org_id
  password      = var.digicert_api_key

  depends_on = [azurerm_key_vault_access_policy.tf]
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
  count               = var.is_root_domain ? 1 : 0
  name                = var.dns_zone_name
  resource_group_name = var.dns_resource_group_name
  ttl                 = 3600
  zone_name           = var.dns_zone_name
  target_resource_id  = azurerm_cdn_endpoint.cdn_endpoint.id
}

resource "azurerm_dns_cname_record" "cdnverify" {
  count               = var.is_root_domain ? 1 : 0
  name                = "cdnverify"
  resource_group_name = var.dns_resource_group_name
  zone_name           = var.dns_zone_name
  ttl                 = 3600
  record              = "cdnverify.${azurerm_cdn_endpoint.cdn_endpoint.fqdn}"
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

resource "azurerm_key_vault_certificate" "root_domain" {
  count        = var.is_root_domain ? 1 : 0
  key_vault_id = azurerm_key_vault.vault.id
  name         = "cert-${var.name}-root-domain"

  certificate_policy {
    lifetime_action {
      action {
        action_type = "AutoRenew"
      }
      trigger {
        days_before_expiry = 30
      }
    }
    issuer_parameters {
      name = azurerm_key_vault_certificate_issuer.digicert.name
    }

    key_properties {
      exportable = true
      key_type   = "RSA"
      key_size   = 2048
      reuse_key  = true
    }

    secret_properties {
      content_type = "application/x-pkcs12"
    }

    x509_certificate_properties {
      extended_key_usage = [
        "1.3.6.1.5.5.7.3.2",
        "1.3.6.1.5.5.7.3.1"
      ]

      key_usage          = [
        "cRLSign",
        "dataEncipherment",
        "digitalSignature",
        "keyAgreement",
        "keyCertSign",
        "keyEncipherment"
      ]

      subject_alternative_names {
        dns_names = [var.dns_zone_name]
      }

      subject            = "CN=${var.dns_zone_name},OU=Board,O=Bondurant Soccer Club,L=Bondurant,S=Iowa,C=US"
      validity_in_months = 12
    }
  }

  depends_on = [azurerm_key_vault_access_policy.tf]
}

resource "azurerm_cdn_endpoint_custom_domain" "root_domain" {
  count           = var.is_root_domain ? 1 : 0
  cdn_endpoint_id = azurerm_cdn_endpoint.cdn_endpoint.id
  host_name       = var.dns_zone_name
  name            = "cdom-${var.name}-root"

  user_managed_https {
    key_vault_certificate_id = azurerm_key_vault_certificate.root_domain[0].id
  }

  depends_on = [
    azurerm_dns_a_record.root_domain[0],
    azurerm_dns_cname_record.cdnverify[0],
    azurerm_key_vault_certificate_issuer.digicert,
    azurerm_key_vault_access_policy.tf
  ]
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
