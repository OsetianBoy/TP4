const express = require('express');
const indexRouter = require('./src/routes/index');
const productsRouter = require('./src/products/products')

require('dotenv').config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/productos', indexRouter, productsRouter);


module.exports = app;