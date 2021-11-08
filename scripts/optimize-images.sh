#!/bin/bash
set -ex

install_optimizers() {
  sudo apt-get install jpegoptim
}

optimize_assets() {
  jpegoptim "${ASSETS_PATH}/*.jpeg"
  jpegoptim "${ASSETS_PATH}/*.jpg"
}

main() {
  install_optimizers
  optimize_assets
}

main
