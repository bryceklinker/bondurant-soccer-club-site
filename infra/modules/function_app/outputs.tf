output "function_app_url" {
  value = "https://${azurerm_linux_function_app.app.default_hostname}"
}
