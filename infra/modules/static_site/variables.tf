
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

variable "tags" {
  type = map(string)
  default = {}
}
