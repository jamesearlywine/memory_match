#!/bin/sh

STACK_NAME=memoryMatchDev

echo ""
echo "########################################"
echo "## Updating Dev Stack for Memory Match "
echo "########################################"
echo ""
SCRIPT_DIR=$(dirname $(realpath -s $0))
aws cloudformation deploy --stack-name $STACK_NAME --template-file /$SCRIPT_DIR/cloudformation/dev.yaml
STACK_INFO=$(aws cloudformation describe-stacks --stack-name $STACK_NAME)
DEPLOYED_WEB_URL=$(jq -r "(.Stacks[0].Outputs)[] | select(.OutputKey == \"WebsiteURL\") | .OutputValue" <<< $STACK_INFO)
DEPLOYED_S3_URI=$(jq -r "(.Stacks[0].Outputs)[] | select(.OutputKey == \"S3BucketURI\") | .OutputValue" <<< $STACK_INFO)

# echo "Stack Info: $STACK_INFO"

echo ""
echo "########################################"
echo "## Building Static Files Bundle"
echo "########################################"
echo ""
yarn build

echo ""
echo "########################################"
echo "## Deploying Files to S3 "
echo "########################################"
echo ""
aws s3 sync $SCRIPT_DIR/../build/ $DEPLOYED_S3_URI --delete --exclude ".git/*" --region us-east-2

echo ""
echo "##############################################"
echo "## COMPLETE -- Memory Match deployed to Dev"
echo "##############################################"
echo ""
echo "Stack Name: $STACK_NAME"
echo "Deployed Web URL: $DEPLOYED_WEB_URL"
echo "Deployed S3 URI: $DEPLOYED_S3_URI"

