#!/bin/bash
set -ex

export FUNCTION_APP_NAME=""
export RESOURCE_GROUP_NAME=""
export FUNCTION_APP_MASTER_KEY=""
export SYNC_TRIGGERS_URL=""

function set_function_trigger_variables() {
  pushd "infra/${TARGET_ENV}" || exit 1
    RESOURCE_GROUP_NAME="$(terraform output -raw resource_group_name)"
    FUNCTION_APP_NAME="$(terraform output -raw function_app_name)"
    FUNCTION_APP_MASTER_KEY="$(terraform output -raw function_app_master_key)"
  popd || exit 1

  SYNC_TRIGGERS_URL="https://${FUNCTION_APP_NAME}.azurewebsites.net/admin/host/synctriggers?code=${FUNCTION_APP_MASTER_KEY}"
}

function sync_function_triggers() {
  az login --service-principal -u "${ARM_CLIENT_ID}" -p "${ARM_CLIENT_SECRET}" --tenant "${ARM_TENANT_ID}"

  az account set -s "${ARM_SUBSCRIPTION_ID}"


  curl -d "" -X POST "${SYNC_TRIGGERS_URL}"
}

function main() {
  set_function_trigger_variables
  sync_function_triggers
}

main
