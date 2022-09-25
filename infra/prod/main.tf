variable "dns_zone_name" {
  type = string
}

variable "dns_resource_group_name" {
  type = string
}

variable "digicert_account_id" {
  type = string
}

variable "digicert_org_id" {
  type = string
}

variable "digicert_api_key" {
  type = string
}

locals {
  app_name = "bsc-site"
  env_name = "prod"
  name = "${local.env_name}-${local.app_name}"
  location = "Central US"
  resource_group_name = "rg-${local.name}"
  dist_directory = "${path.cwd}/../../public"
}

resource "azurerm_resource_group" "resource_group" {
  location = local.location
  name = local.resource_group_name
}

module "site" {
  source = "../modules/static_site"

  digicert_account_id = var.digicert_account_id
  digicert_org_id = var.digicert_org_id
  digicert_api_key = var.digicert_api_key

  dns_resource_group_name = var.dns_resource_group_name
  dns_zone_name = var.dns_zone_name
  name = "${local.name}-site"
  location = local.location
  resource_group_name = local.resource_group_name
  site_directory = local.dist_directory
  is_root_domain = true

  depends_on = [azurerm_resource_group.resource_group]
}
