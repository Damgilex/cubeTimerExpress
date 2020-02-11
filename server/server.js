
//###################################
//-------importing packages
//###################################
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('../config/config')


//###################################
//-------middlewares
//###################################
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//###################################
//-------settings
//###################################
app.set('views',path.join(__dirname, '../views'));//set views location
app.set('view engine','ejs');//set templates engine


//###################################
//-------importing routes
//###################################
const indexRoutes = require('../routes/index');


//###################################
//-------routes
//###################################
app.use('/',indexRoutes);
 

//###################################
//-------connecting to DB
//###################################
 mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db connected'))
    .catch(err => console.log('err: ', err));


//###################################
//-------starting server
//###################################
app.listen(process.env.PORT,()=>{
    console.log('Escuchando el puerto: ', process.env.PORT);
})

