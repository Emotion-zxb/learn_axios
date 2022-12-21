// 引入express
const express = require('express');
// const {response} = require("express");

//创建应用对象
const app = express();

//创建路由规则
app.get('/server',(request,response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send('hello world get');
})
//
app.all('/server-1',(request,response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    //响应JSON
    const json = {
        name: '查小兵',
        age: 24,
        school: '铜陵学院'
    }
    // setTimeout(() => {
        response.send(JSON.stringify(json));
    // },1000)
})

//监听端口服务
app.listen(8000,() => {
    console.log('服务启动成功，端口是8000');
})