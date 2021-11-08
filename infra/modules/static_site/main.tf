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

resource "azurerm_application_insights" "web_app_insights" {
  location = var.location
  name = "appi-${var.name}"
  resource_group_name = var.resource_group_name
  application_type = "other"

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


  origin {
    host_name = azurerm_storage_account.site_storage.primary_web_host
    name      = azurerm_storage_account.site_storage.name
  }
}
