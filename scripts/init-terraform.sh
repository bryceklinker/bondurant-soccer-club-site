#!/bin/bash
set -ex

pushd "infra/${TARGET_ENV}" || exit 1
  terraform init
popd || exit 1
