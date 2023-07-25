#!/bin/bash
set -ex

FUNCTIONS_WORKER_RUNTIME="dotnet-isolated"
STORAGE_ACCOUNT_CONNECTION_STRING="DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;"
DB_BLOB_PREFIX="db"
SITE_CONTAINER_NAME="\$web"
AUTH_AUTHORITY="${GOOGLE_AUTH_AUTHORITY}"
AUTH_AUDIENCE="${GOOGLE_AUTH_AUDIENCE}"
APP_SETTINGS_JSON=$(cat <<EOF
 {
     "IsEncrypted": 0,
     "Host": {
         "CORS": "*"
     },
     "Values": {
         "AzureWebJobsStorage": "${STORAGE_ACCOUNT_CONNECTION_STRING}",
         "FUNCTIONS_WORKER_RUNTIME": "${FUNCTIONS_WORKER_RUNTIME}",
         "STORAGE_ACCOUNT_CONNECTION_STRING": "${STORAGE_ACCOUNT_CONNECTION_STRING}",
         "ALERTS_QUEUE_NAME": "alerts-queue",
         "DB_BLOB_PREFIX": "db",
         "SITE_CONTAINER_NAME": "\$web",
         "AUTH_AUTHORITY": "${AUTH_AUTHORITY}",
         "AUTH_AUDIENCE": "${AUTH_AUDIENCE}"
     }
 }
EOF
)


function write_local_settings_json_file() {
  pushd "packages/backend/src/Bsc.Function" || exit 1
    echo "${APP_SETTINGS_JSON}" >> "local.settings.json"
  popd || exit 1
}

function main() {
  write_local_settings_json_file
}

main
