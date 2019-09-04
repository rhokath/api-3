const express = require('express');
const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers-router');
const server = express();
//global middleware 
server.use(express.json())

server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

//route handlers

server.get('/', (req, res)=> {
    res.status(200).json({api: 'working'});

});

module.exports = server;

