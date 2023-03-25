output "function_app_url" {
  value = "https://${azurerm_linux_function_app.app.default_hostname}"
}

output "function_app_name" {
  value = azurerm_linux_function_app.app.name
}

output "function_app_master_key" {
  value = data.azurerm_function_app_host_keys.function_app_keys.primary_key
}
