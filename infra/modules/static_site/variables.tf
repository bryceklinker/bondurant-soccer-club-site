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

variable "function_app_directory" {
  type = string
}

variable "google_client_id" {
  type = string
}

variable "subdomain" {
  type = string
  default = "www"
}

variable "tags" {
  type = map(string)
  default = {}
}
