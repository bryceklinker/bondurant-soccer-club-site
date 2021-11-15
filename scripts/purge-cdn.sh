#!/bin/bash
set -ex

export CDN_ENDPOINT_NAME=""
export CDN_PROFILE_NAME=""
export RESOURCE_GROUP_NAME=""

set_cdn_purge_variables() {
  pushd "infra/${TARGET_ENV}" || exit 1
    CDN_ENDPOINT_NAME="$(terraform output -raw cdn_endpoint_name)"
    CDN_PROFILE_NAME="$(terraform output -raw cdn_profile_name)"
    RESOURCE_GROUP_NAME="$(terraform output -raw resource_group_name)"
  popd || exit 1
}

purge_cdn_content() {
  az cdn endpoint purge -g "${RESOURCE_GROUP_NAME}" \
    -n "${CDN_ENDPOINT_NAME}" \
    --profile-name "${CDN_PROFILE_NAME}" \
    --content-paths '/*'
}

main() {
  set_cdn_purge_variables
  purge_cdn_content
}

main
