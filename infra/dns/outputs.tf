output "dns_resource_group_name" {
  value = azurerm_resource_group.dns_group.name
}

output "dns_zone_name" {
  value = azurerm_dns_zone.dns_zone.name
}
