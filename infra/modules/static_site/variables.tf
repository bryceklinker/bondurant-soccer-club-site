variable "dns_zone_name" {
  type = string
}

variable "dns_resource_group_name" {
  type = string
}

variable "name" {
  type = string
}

variable "location" {
  type = string
}

variable "resource_group_name" {
  type = string
}

variable "site_directory" {
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

variable "subdomain" {
  type = string
  default = "www"
}

variable "is_root_domain" {
  type = bool
  default = false
}

variable "tags" {
  type = map(string)
  default = {}
}
