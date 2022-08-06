const express= require('express');
const morgan= require('morgan');
const mysql= require('mysql');
const cors= require('cors');    //<<<---
const myconnection = require('express-myconnection');

const app=express();


// rutas

app.set('port',3000);

app.use(cors());    //<<<---
app.use(morgan('dev'));

app.use(myconnection(mysql,{
    host:'localhost',
    user:'user',
    password: 'mongo',
    port: 3306,
    database: 'paises'
},'single'));


app.use(express.json());//<---

app.use(express.urlencoded({extended:false}));//<---

app.use(require('./routes/paises.router'));//<---

module.exports= app;