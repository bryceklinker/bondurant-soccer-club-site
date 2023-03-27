#!/bin/bash
set -ex

export FUNCTION_APP_NAME=""
export RESOURCE_GROUP_NAME=""
export ZIP_FILE_PATH="infra/modules/function_app/function_app.zip"

function login() {
  az login --service-principal -u "${ARM_CLIENT_ID}" -p "${ARM_CLIENT_SECRET}" --tenant "${ARM_TENANT_ID}"
}

function set_function_variables() {
  pushd "infra/${TARGET_ENV}" || exit 1
    RESOURCE_GROUP_NAME="$(terraform output -raw resource_group_name)"
    FUNCTION_APP_NAME="$(terraform output -raw function_app_name)"
  popd || exit 1
}

function deploy_azure_function() {
  az functionapp deployment source config-zip \
  -g "${RESOURCE_GROUP_NAME}" \
  -n "${FUNCTION_APP_NAME}" \
  --src "${ZIP_FILE_PATH}"

}

function main() {
  login
  set_function_variables
  deploy_azure_function
}

main
