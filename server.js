// const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("In The Middleware!");
    next();
});

app.use((req,res,next)=>{
   // res.send('<h1>Hello from express!</h1>');
   // console.log("In Another Middleware!");
   res.send({key1:"value"});
});


// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);