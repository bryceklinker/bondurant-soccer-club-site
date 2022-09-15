locals {
  location = "Central US"
}

resource "azurerm_resource_group" "dns_group" {
  location = local.location
  name     = "rg-bsc-dns"
}

resource "azurerm_dns_zone" "dns_zone" {
  name                = "bondurantsoccerclub.com"
  resource_group_name = azurerm_resource_group.dns_group.name
}
