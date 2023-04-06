#!/bin/bash
set -ex

function install_azure_functions_core_tools() {
  npm i -g azure-functions-core-tools@4 --unsafe-perm true
}

install_azure_functions_core_tools
