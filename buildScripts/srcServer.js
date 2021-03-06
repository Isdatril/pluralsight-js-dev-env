import express from 'express';
import path from 'path';
import open  from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noinfo: true,
  publickPath: config.output.publicPath

}
))

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, '../src/index.html'))
});


app.get('/users',function (req, res)
{
  res.json([
    {"id": 1, "firstName": "bob1", "lastName":"Smith1","email":"bobmail@gmail.com1"},
     {"id": 2, "firstName": "bob2", "lastName":"Smith2","email":"bobmail@gmail.com2"},
      {"id": 3, "firstName": "bob3", "lastName":"Smith3","email":"bobmail@gmail.com3"}
  ]);
});

app.listen(port, function(err){
if(err) {
  console.log(err);
}else{
  open('http://localhost:' + port);
}
});
