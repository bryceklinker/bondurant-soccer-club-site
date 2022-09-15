output "site_url" {
  value = azurerm_cdn_endpoint.cdn_endpoint.fqdn
}

output "cdn_profile_name" {
  value = azurerm_cdn_profile.cdn_profile.name
}

output "cdn_endpoint_name" {
  value = azurerm_cdn_endpoint.cdn_endpoint.name
}
