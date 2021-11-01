locals {
  app_name = "bsc-site"
  env_name = "prod"
  name = "${local.env_name}-${local.app_name}"
  location = "Central US"
  resource_group_name = "rg-${local.name}"
  dist_directory = "${path.cwd}/../../dist"
}

resource "azurerm_resource_group" "resource_group" {
  location = local.location
  name = local.resource_group_name
}

module "site" {
  source = "../modules/static_site"

  name = "${local.name}-site"
  location = local.location
  resource_group_name = local.resource_group_name
  site_directory = "${local.dist_directory}/apps/web-ui"

  depends_on = [azurerm_resource_group.resource_group]
}
