const express = require('express');

const fs = require('fs');

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/login',(req,res,next)=>{
    res.send(`<form onsubmit = "localStorage.setItem('username',document.getElementById('username').value)" action="/product" method="POST"><input id="username" type="text" name="username"><button type="submit">Enter Detail</button></form>`);
});

app.post('/product',(req,res,next)=>{
  // console.log(req.body);
   res.redirect('/');
});

app.get('/',(req,res,next)=>{

   fs.readFile('username.txt',(err,data)=>{
      if(err){
         data = "No Chat Exist"
      }
      res.send(`${data}<form action="/" onsubmit='document.getElementById("user").value = localStorage.getItem("username")' method="POST">
      <input type="text" placeHolder="message" id="message" name="message"
      <input type="hidden" name="username" id="user">
      <button type="submit">Send Message</button>
      </form>`);
   })
  
});

app.post('/',(req,res,next)=>{
   console.log(req.body);
   console.log(req.body.username,req.body.message);
   fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
      err?console.log(err):res.redirect('/')
      );
});

app.listen(3000);