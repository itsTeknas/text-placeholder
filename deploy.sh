cd projects/text-placeholder
npm version patch
cd ../../
npm run build
cd dist/text-placeholder
npm publish
cd ../../
git add .
git commit -m "patch release"
git push
