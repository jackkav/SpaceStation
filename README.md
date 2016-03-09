#Install
npm install

#Run
./node_modules/.bin/babel-node main.js

#Test
npm run test

#Watch Test
npm run watch-test

#Coverage
node_modules/.bin/nyc --require babel-core/register node_modules/.bin/mocha tests