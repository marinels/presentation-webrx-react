/* eslint-disable no-process-env,no-console */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const DefaultServerPort = 3000;

const app = express();
const compiler = webpack(config);

const serverPort = process.env.PORT || DefaultServerPort;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(serverPort, 'localhost', (serverError) => {
  if (serverError) {
    console.log(serverError);
    return;
  }

  console.log(`Listening at http://localhost: ${ serverPort }`);
});
