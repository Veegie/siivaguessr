#!/bin/bash

mkdir -p dist/js
cp -r img/ dist/img
cp -r svg/ dist/svg
cp index.html dist/index.html
cp style.css dist/style.css
cd js
cat db.js siivaguessr.js > bundle.js
sed -i '1s/^/{\n/' bundle.js
echo '}' >> bundle.js
terser confettea.js --compress --mangle --output confettea.min.js
cat confettea-license.js confettea.min.js > ../dist/js/confettea.min.js
terser bundle.js --compress --mangle --output siivaguessr.min.js
cat comment.js siivaguessr.min.js > ../dist/js/siivaguessr.min.js
rm bundle.js
rm confettea.min.js
rm siivaguessr.min.js
