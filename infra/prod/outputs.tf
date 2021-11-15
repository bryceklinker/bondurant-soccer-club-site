output "web_site_url" {
  value = module.site.site_url
}

output "cdn_profile_name" {
  value = module.site.cdn_profile_name
}

output "cdn_endpoint_name" {
  value = module.site.cdn_endpoint_name
}

output "resource_group_name" {
  value = azurerm_resource_group.resource_group.name
}
