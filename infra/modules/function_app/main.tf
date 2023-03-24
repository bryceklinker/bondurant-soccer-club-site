data "archive_file" "function_app_archive" {
  type        = "zip"
  source_dir  = var.function_app_directory
  output_path = "${path.module}/function_app.zip"
}

resource "azurerm_storage_container" "function_app" {
  name                 = "function-apps"
  storage_account_name = var.storage_account_name
}

resource "azurerm_storage_queue" "alerts_queue" {
  name                 = "alerts-queue"
  storage_account_name = var.storage_account_name
}

resource "azurerm_storage_blob" "function_app" {
  name                   = "func-${var.name}-app-${substr(data.archive_file.function_app_archive.output_md5, 0, 10)}.zip"
  storage_account_name   = var.storage_account_name
  storage_container_name = azurerm_storage_container.function_app.name
  type                   = "Block"
  content_md5            = data.archive_file.function_app_archive.output_md5
  source                 = data.archive_file.function_app_archive.output_path
}

resource "azurerm_service_plan" "plan" {
  name                = "plan-${var.name}"
  location            = var.location
  resource_group_name = var.resource_group_name
  os_type             = "Linux"
  sku_name            = "Y1"
}

resource "azurerm_linux_function_app" "app" {
  location                   = var.location
  resource_group_name        = var.resource_group_name
  storage_account_access_key = var.storage_account_access_key
  storage_account_name       = var.storage_account_name
  service_plan_id            = azurerm_service_plan.plan.id

  name       = "func-${var.name}"
  os_type    = "linux"
  version    = "~4"
  https_only = true

  identity {
    type = "SystemAssigned"
  }

  site_config {

    APPLICATIONINSIGHTS_CONNECTION_STRING = var.application_insights_connection_string
    STORAGE_ACCOUNT_CONNECTION_STRING     = var.storage_account_connection_string
    ALERTS_QUEUE_NAME                     = azurerm_storage_queue.alerts_queue.name
    SITE_CONTAINER_NAME                   = var.storage_account_web_container
    WEBSITE_RUN_FROM_PACKAGE              = azurerm_storage_blob.function_app.url
    DB_BLOB_PREFIX                        = "db"
    FUNCTIONS_WORKER_RUNTIME              = "node"
  }
}

resource "azurerm_role_assignment" "blob_contributor" {
  principal_id         = azurerm_linux_function_app.app.identity.0.principal_id
  role_definition_name = "Storage Blob Data Contributor"
  scope                = var.storage_account_id
}

resource "azurerm_role_assignment" "queue_contributor" {
  principal_id         = azurerm_linux_function_app.app.identity.0.principal_id
  role_definition_name = "Storage Queue Data Contributor"
  scope                = var.storage_account_id
}
