resource "azurerm_storage_account" "storage_account" {
  location = var.location
  name     = "st${replace(var.name, "-", "")}"
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

resource "azurerm_log_analytics_workspace" "workspace" {
  location = var.location
  name = "log-${var.name}"
  resource_group_name = var.resource_group_name
  daily_quota_gb = 0.5

  tags = var.tags
}

resource "azurerm_application_insights" "insights" {
  location            = var.location
  resource_group_name = var.resource_group_name
  name                = "appi-${var.name}"
  application_type    = "other"

  tags = var.tags
}
