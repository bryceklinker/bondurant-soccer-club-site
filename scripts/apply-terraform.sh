pushd "infra/${TARGET_ENV}" || exit 1
  terraform apply "${PLAN_PATH}"
popd || exit 1
