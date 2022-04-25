import express from 'express'
import {Parcel} from '@parcel/core';

const ENV = process.env.ENV ?? 'prod'
const NODE_PORT = process.env.NODE_PORT ?? 8080

let bundler = new Parcel({
  entries: './ui/index.html',
  defaultConfig: '@parcel/config-default',
  serveOptions: {
    port: 3000
  },
  hmrOptions: {
    port: 3000
  }
});

await bundler.watch();

const app = express();

app.use(express.static('dist'))

app.get('/test', (req,res)=>{
    res.send(ENV);
})

app.listen(NODE_PORT, ()=>{
    console.log(`listening at http://localhost:${NODE_PORT}`);
})