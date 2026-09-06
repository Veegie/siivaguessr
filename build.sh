#!/bin/bash

cat ./js/db.js ./js/siivaguessr.js > bundle.js
sed -i '1s/^/{\n/' bundle.js
echo '}' >> bundle.js
terser bundle.js --compress --mangle --output ./js/bundle.min.js
cat ./js/comment.js ./js/bundle.min.js > ./js/siivaguessr.min.js
rm bundle.js
rm ./js/bundle.min.js