#!/bin/bash
set -ex

export API_VERSION="2016-08-01"
export FUNCTION_APP_NAME=""
export RESOURCE_GROUP_NAME=""
export SYNC_TRIGGERS_URL="https://management.azure.com"

function set_function_trigger_variables() {
  pushd "infra/${TARGET_ENV}" || exit 1
    RESOURCE_GROUP_NAME="$(terraform output -raw resource_group_name)"
    FUNCTION_APP_NAME="$(terraform output -raw function_app_name)"
  popd || exit 1

  SYNC_TRIGGERS_URL="${SYNC_TRIGGERS_URL}/subscriptions/${ARM_SUBSCRIPTION_ID}"
  SYNC_TRIGGERS_URL="${SYNC_TRIGGERS_URL}/resourceGroups/${RESOURCE_GROUP_NAME}"
  SYNC_TRIGGERS_URL="${SYNC_TRIGGERS_URL}/providers/Microsoft.Web/sites/${FUNCTION_APP_NAME}"
  SYNC_TRIGGERS_URL="${SYNC_TRIGGERS_URL}/syncfunctiontriggers?api-version=${API_VERSION}"
}

function sync_function_triggers() {
  az login --service-principal -u "${ARM_CLIENT_ID}" -p "${ARM_CLIENT_SECRET}" --tenant "${ARM_TENANT_ID}"

  az account set -s "${ARM_SUBSCRIPTION_ID}"


  curl -X POST "${SYNC_TRIGGERS_URL}"
}

function main() {
  set_function_trigger_variables
  sync_function_triggers
}

main
