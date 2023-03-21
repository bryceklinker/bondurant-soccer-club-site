variable "name" {
  type = string
}

variable "location" {
  type = string
}

variable "resource_group_name" {
  type = string
}

variable "storage_account_name" {
  type = string
}

variable "storage_account_access_key" {
  type = string
}

variable "storage_account_connection_string" {
  type = string
}

variable "storage_account_id" {
  type = string
}

variable "application_insights_connection_string" {
  type = string
}

variable "function_app_directory" {
  type = string
}

variable "tags" {
  type = map(string)
  default = {}
}
