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
}

resource "azurerm_storage_account" "site_storage" {
  location = var.location
  name = "st${replace(var.name, "-", "")}"
  resource_group_name = var.resource_group_name

  account_tier = "Standard"
  account_replication_type = "LRS"
  enable_https_traffic_only = true

  static_website {
    index_document = "index.html"
    error_404_document = "index.html"
  }

  tags = var.tags
}

module "site_files" {
  source = "hashicorp/dir/template"

  base_dir = var.site_directory
}

resource "azurerm_storage_blob" "site_content" {
  for_each = module.site_files.files

  storage_account_name = azurerm_storage_account.site_storage.name
  storage_container_name = "$web"

  name = each.key
  source = each.value.source_path
  content_type = each.value.content_type
  content_md5 = each.value.digests.md5
  type = "Block"
}

resource "azurerm_cdn_profile" "cdn_profile" {
  name = "cdnp-${var.name}"
  resource_group_name = var.resource_group_name
  location = var.location
  sku = "Standard_Microsoft"
}

resource "azurerm_cdn_endpoint" "cdn_endpoint" {
  name = "cdne-${var.name}"
  profile_name = azurerm_cdn_profile.cdn_profile.name
  location = azurerm_cdn_profile.cdn_profile.location
  resource_group_name = var.resource_group_name
  is_compression_enabled = true
  is_http_allowed = false
  optimization_type = "GeneralWebDelivery"
  content_types_to_compress = local.content_types_to_compress
  origin_host_header = azurerm_storage_account.site_storage.primary_web_host

  origin {
    host_name = azurerm_storage_account.site_storage.primary_web_host
    name      = azurerm_storage_account.site_storage.name
  }
}

resource "azurerm_log_analytics_workspace" "log_workspace" {
  location            = var.location
  name                = "log-${var.name}"
  resource_group_name = var.resource_group_name
  daily_quota_gb = 0.5
}

resource "azurerm_application_insights" "web_app_insights" {
  location = var.location
  name = "appi-${var.name}"
  resource_group_name = var.resource_group_name
  application_type = "other"
  workspace_id = azurerm_log_analytics_workspace.log_workspace.id

  tags = var.tags
}
