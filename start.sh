#!/usr/bin/env bash
echo "Start backend server to persist data"
npm run json-server &

echo "Start frontend server to serve UI"
ng serve --open
