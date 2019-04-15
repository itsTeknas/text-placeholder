cd projects/text-placeholder
npm version patch
cd ../../
npm run build
cd dist/text-placeholder
npm publish
git add .
git commit -m "patch release"
git push
