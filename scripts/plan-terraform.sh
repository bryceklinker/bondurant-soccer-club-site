pushd "infra/${TARGET_ENV}" || exit 1
  terraform plan -o "${PLAN_PATH}"
popd || exit 1
