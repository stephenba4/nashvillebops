#!/usr/bin/env sh

set -e

yarn build

cd dist

git add -A
git commit -m 'deploy'
git push -f https://github.com/stephenba4/stephenba4.github.io.git master

cd -