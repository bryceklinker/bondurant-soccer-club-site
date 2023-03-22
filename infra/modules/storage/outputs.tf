output "storage_account_name" {
  value = azurerm_storage_account.storage_account.name
}

output "storage_account_connection_string" {
  value = azurerm_storage_account.storage_account.primary_connection_string
}

output "storage_account_access_key" {
  value = azurerm_storage_account.storage_account.primary_access_key
}

output "storage_account_web_host" {
  value = azurerm_storage_account.storage_account.primary_web_host
}

output "storage_account_id" {
  value = azurerm_storage_account.storage_account.id
}

output "storage_account_web_container" {
  value = "$web"
}

output "application_insights_connection_string" {
  value = azurerm_application_insights.insights.connection_string
}
