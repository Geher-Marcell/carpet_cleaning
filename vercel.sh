#!/bin/bash

# Set NODE_ENV to production
export NODE_ENV=production

echo "NODE_ENV is set to $NODE_ENV"

npm run build
npm run dropdb
npm run makedb