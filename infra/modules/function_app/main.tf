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
  location                      = var.location
  resource_group_name           = var.resource_group_name
  storage_account_name          = var.storage_account_name
  service_plan_id               = azurerm_service_plan.plan.id
  storage_uses_managed_identity = true
  https_only                    = true
  name                          = "func-${var.name}"
  tags                          = var.tags

  identity {
    type = "SystemAssigned"
  }

  site_config {
    cors {
      allowed_origins = ["*"]
    }

    application_stack {
      node_version = "18"
    }

    application_insights_connection_string = var.application_insights_connection_string
  }

  app_settings = {
    STORAGE_ACCOUNT_CONNECTION_STRING = var.storage_account_connection_string
    ALERTS_QUEUE_NAME                 = azurerm_storage_queue.alerts_queue.name
    SITE_CONTAINER_NAME               = var.storage_account_web_container
    WEBSITE_RUN_FROM_PACKAGE          = azurerm_storage_blob.function_app.url
    DB_BLOB_PREFIX                    = "db"
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
