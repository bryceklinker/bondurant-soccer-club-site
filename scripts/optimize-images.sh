#!/bin/bash
set -ex

install_optimizers() {
  sudo apt-get update
  sudo apt-get install jpegoptim
}

optimize_assets() {
  pushd "${ASSETS_PATH}" || exit 1
    jpegoptim *.jpeg
    jpegoptim *.jpg
  popd || exit 1

}

main() {
  install_optimizers
  optimize_assets
}

main
