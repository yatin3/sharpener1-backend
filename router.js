const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//added feature of routing
//const adminRoutes = require('C:/Users/yatingoyal/Documents/SharpenerProjects/backend/Express project/routes/admin.js');//absolute path

const adminRoutes = require('./routes/admin');//relative path
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));

//added feature of routing
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{ 
   res.status(404).send('<h1>Page not found</h1>');
});

// app.use('/',(req,res,next)=>{ 
//     console.log("This Will Always Run");
//     next();
// });

// app.use('/add-product',(req,res,next)=>{ 
//     console.log("In Another Middleware!");
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
// });

// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/',(req,res,next)=>{ 
//      console.log("In Another Middleware!");
//      res.send('<h1>Hello from express!</h1>');
//  });
 
 app.listen(3000);