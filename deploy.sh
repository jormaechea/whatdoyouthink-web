#!/bin/bash

npm run build
aws s3 cp --recursive --exclude static/* ./build/* s3://whatdoyouthink-app/app/
aws s3 cp --cache-control='max-age=31536000' --recursive ./build/static/ s3://whatdoyouthink-app/app/static
