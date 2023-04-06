#!/bin/bash
set -ex

function install_azure_functions_core_tools() {
  brew tap azure/functions
  brew install azure-functions-core-tools@4
}

install_azure_functions_core_tools
