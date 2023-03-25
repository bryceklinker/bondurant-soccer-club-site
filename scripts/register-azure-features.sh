#!/bin/bash
set -ex

function login() {
  az login --service-principal -u "${ARM_CLIENT_ID}" -p "${ARM_CLIENT_SECRET}" --tenant "${ARM_TENANT_ID}"
}

function enable_custom_domain_deletion_check() {
  az feature register --namespace Microsoft.Network --name BypassCnameCheckForCustomDomainDeletion
}

function main() {
  login
  enable_custom_domain_deletion_check
}



