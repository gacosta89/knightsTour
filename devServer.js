import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.dev';


const app = express();
const compiler = webpack(config);
const port = process.env.APP_PORT || 3000;
const ip = process.env.APP_IP || 'localhost';

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'source/static/index.html'));
});

app.listen(port, ip, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://${ip}:${port}`);
});
