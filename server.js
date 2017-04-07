const Promise  = require('bluebird');
global.Promise = Promise;
const express  = require('express');
const app      = express();
const chalk    = require('chalk');
const colors   = require('colors');
const routes = require('./star_wars_fetch');
// console.log(chalk.blue.bgRed.bold('Hello world!'));

routes(app);

app.set('port', 3001);

app.listen(app.get('port'), () => {
  console.log(chalk.blue("BEGIN COMPUTER STUFF 🤖 BEEEP 🤖 BOOOP 🤖 BOPPPPP 🤖"));
  console.log(`SERVER 🔥🔥🔥🔥 @  http://localhost:${app.get('port')}/`);
  console.log('OMG RAINBOWS!'.rainbow); // rainbow
})
