pushd "infra/${TARGET_ENV}" || exit 1
  terraform plan -out="${PLAN_PATH}"
popd || exit 1
