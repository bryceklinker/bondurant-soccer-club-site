output "site_url" {
  value = "https://${azurerm_cdn_endpoint.cdn_endpoint.host_name}"
}
