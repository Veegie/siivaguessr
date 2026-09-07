#!/bin/bash

cd js
cat db.js siivaguessr.js > bundle.js
sed -i '1s/^/{\n/' bundle.js
echo '}' >> bundle.js
terser confettea.js --compress --mangle --output confettea.min.js
cat confettea-license confettea.min.js > temp.js && mv temp.js confettea.min.js
terser bundle.js --compress --mangle --output siivaguessr.min.js
cat comment.js siivaguessr.min.js > temp.js && mv temp.js siivaguessr.min.js
rm bundle.js
