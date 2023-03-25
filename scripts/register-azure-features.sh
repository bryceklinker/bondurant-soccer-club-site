#!/bin/bash
set -ex


function enable_custom_domain_deletion_check() {
  az feature register --namespace Microsoft.Network --name BypassCnameCheckForCustomDomainDeletion
}

enable_custom_domain_deletion_check


