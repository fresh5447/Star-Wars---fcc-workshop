const Promise  = require('bluebird');
global.Promise = Promise;
const express  = require('express');
const app      = express();
const chalk    = require('chalk');
const colors   = require('colors');
const routes   = require('./star_wars_fetch');
const path     = require('path');

app.use(express.static('public'));

routes(app);

app.get('/', function(req, res) {
  res.sendFile('/index.html');
});


app.set('port', 3001);

app.listen(app.get('port'), () => {
  console.log(chalk.blue("BEGIN COMPUTER STUFF 🤖 BEEEP 🤖 BOOOP 🤖 BOPPPPP 🤖"));
  console.log(`SERVER 🔥🔥🔥🔥 @  http://localhost:${app.get('port')}/`);
  console.log('OMG RAINBOWS!'.rainbow); // rainbow
})
