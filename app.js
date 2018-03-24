const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const db=require('./config/db').connect();
const app=express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/auth',require('./controllers/auth'));
app.use('/files',require('./controllers/files'));

module.exports=app;