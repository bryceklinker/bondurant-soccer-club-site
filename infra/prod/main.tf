variable "dns_zone_name" {
  type = string
}

variable "dns_resource_group_name" {
  type = string
}

locals {
  app_name = "bsc-site"
  env_name = "prod"
  name = "${local.env_name}-${local.app_name}"
  location = "Central US"
  resource_group_name = "rg-${local.name}"
  site_directory = "${path.cwd}/../../dist/site"
  backend_directory = "${path.cwd}/../../dist/backend"
}

resource "azurerm_resource_group" "resource_group" {
  location = local.location
  name = local.resource_group_name
}

module "site" {
  source = "../modules/static_site"

  dns_resource_group_name = var.dns_resource_group_name
  dns_zone_name = var.dns_zone_name
  location = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name
  site_directory = local.site_directory
  function_app_directory = local.backend_directory
  name = "${local.name}-site"

  depends_on = [azurerm_resource_group.resource_group]
}
