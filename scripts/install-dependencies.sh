#!/bin/bash
set -e

function install_azure_functions_core_tools() {
  curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
  sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg

  sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-$(lsb_release -cs)-prod $(lsb_release -cs) main" > /etc/apt/sources.list.d/dotnetdev.list'

  sudo apt-get update

  sudo apt-get install azure-functions-core-tools-4
}

function install_node_packages() {
  yarn install --frozen-lockfile
}

function main() {
  install_azure_functions_core_tools
  install_node_packages
}

main
