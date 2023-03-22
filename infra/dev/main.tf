variable "dns_zone_name" {
  type = string
}

variable "dns_resource_group_name" {
  type = string
}

locals {
  app_name = "bsc-site"
  env_name = "dev"
  name = "${local.env_name}-${local.app_name}"
  location = "Central US"
  resource_group_name = "rg-${local.name}"
  site_directory = "${path.cwd}/../../packages/site/public"
  backend_directory = "${path.cwd}/../../packages/backend/dist"
}

resource "azurerm_resource_group" "resource_group" {
  location = local.location
  name = local.resource_group_name
}

module "storage" {
  source = "../modules/storage"

  location = local.location
  name = "${local.name}-storage"
  resource_group_name = local.resource_group_name

  depends_on = [azurerm_resource_group.resource_group]
}

module "function_app" {
  source = "../modules/function_app"

  application_insights_connection_string = module.storage.application_insights_connection_string
  location = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name
  storage_account_access_key = module.storage.storage_account_access_key
  storage_account_connection_string = module.storage.storage_account_connection_string
  storage_account_id = module.storage.storage_account_id
  storage_account_name = module.storage.storage_account_name
  storage_account_web_container = module.storage.storage_account_web_container

  name = "${local.name}-app"
  function_app_directory = local.backend_directory

  depends_on = [module.storage, azurerm_resource_group.resource_group]
}

module "site" {
  source = "../modules/static_site"

  dns_resource_group_name = var.dns_resource_group_name
  dns_zone_name = var.dns_zone_name
  location = azurerm_resource_group.resource_group.location
  resource_group_name = azurerm_resource_group.resource_group.name
  storage_account_name = module.storage.storage_account_name
  storage_account_web_host = module.storage.storage_account_web_host
  storage_account_web_container = module.storage.storage_account_web_container
  site_directory = local.site_directory
  name = "${local.name}-site"
  subdomain = "dev"

  depends_on = [module.storage, module.function_app, azurerm_resource_group.resource_group]
}
