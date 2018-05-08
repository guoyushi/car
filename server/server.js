const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
const jwt = require('jsonwebtoken')
const http = require('http');
const querystring = require('querystring')
const path = require('path')
//const city=require('./provinceCity.js')
app.use(bodyParser.json())


//设置跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Token")
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})
app.get('/getCity',function(req,res,next){
    res.send('666')
})
//监听端口号
app.listen(9000, function () {
    console.log('this is a 9000')
})