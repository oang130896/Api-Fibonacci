const express = require('express'),
      routes = require('./routes'),
      bodyParser = require('body-parser'),
      path = require('path')


require('dotenv').config({ path: path.join(__dirname, '.env') });


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(Number(process.env.SRV_PORT), (error) => {
    if(error){
        console.log(`Error al inicar servicio BE ${process.env.APPNAME}:' , ${error}`);
        process.exit(1);
    }
    console.log(`Servicio BE "${process.env.APPNAME}", iniciado en http://${process.env.SRV}:${process.env.SRV_PORT}`);
}).timeout = 300000;
