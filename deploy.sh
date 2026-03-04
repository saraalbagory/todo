#!/bin/bash
# v2.0
# Deploys what you need to Google Cloud Run.

set -e
start_time=$SECONDS

# Preflight checks
if gcloud -v
then
   echo "----------------------"
   echo "Using Google Cloud CLI"
   echo "----------------------"
else
   echo 'Please install GCloud SDK: brew install --cask google-cloud-sdk'
   echo 'To get homebrew: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
   echo 'To get python: brew install pyenv'
   echo 'To get nvm: brew install nvm'
   exit;
fi;


REPO_NAME=$(basename -s .git `git config --get remote.origin.url`);
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD | sed "s/\//\-/g");
COMMIT_SHA=$(git rev-parse HEAD);
REGION="europe-west1";
PORT=8080;

PROJECT="noonprd-cloudrun";

# In a monorepo, we usually need to only build+deploy a single app, plus the core folder.
DEPLOYMENT_NAME="${REPO_NAME}"
IMAGE="gcr.io/${PROJECT}/${DEPLOYMENT_NAME}:${BRANCH_NAME}"

echo "----------------------------------------------- BUILDING IMAGE -----------------------------------------------"
gcloud builds submit --config cloudbuild.yaml \
    --substitutions=BRANCH_NAME=${BRANCH_NAME},COMMIT_SHA=${COMMIT_SHA},_REPO=${REPO_NAME} \
    --project=${PROJECT}


echo "---------------------------------------- DEPLOYING IMAGE TO CLOUD RUN ----------------------------------------"
gcloud run deploy ${DEPLOYMENT_NAME} \
    --image ${IMAGE} \
    --port=${PORT} \
    --region=${REGION} \
    --project=${PROJECT} \
    --allow-unauthenticated \
    --tag ${BRANCH_NAME}

elapsed=$(( $SECONDS - $start_time ))
elapsed_mins=$(( $elapsed / 60 ))
elapsed_seconds=$(( $elapsed % 60 ))


echo "- https://${BRANCH_NAME}.${DEPLOYMENT_NAME}.beta.noon.com/"

echo [ Time: ${elapsed_mins}min ${elapsed_seconds}sec ]
