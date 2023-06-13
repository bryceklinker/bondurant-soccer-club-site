terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "=3.61.0"
    }
  }

  backend "azurerm" {
    resource_group_name = "terraform-storage"
    storage_account_name = "stklinkerterraformstate"
    container_name = "bsc-site"
    key = "prod.tfstate"
  }
}


provider "azurerm" {
  features {

  }
}
