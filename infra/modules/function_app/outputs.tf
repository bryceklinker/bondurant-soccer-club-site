output "function_app_url" {
  value = "https://${azurerm_windows_function_app.app.default_hostname}"
}

output "function_app_name" {
  value = azurerm_windows_function_app.app.name
}
