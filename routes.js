const fs = require('fs');

function requestHandler(req,res){

    const url = req.url;
    const method = req.method;

    if(url==='/'){
        res.setHeader('content-Type','text/html');
       return fs.readFile('message.txt',(error,data)=>{
            console.log(data);
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body>');
            res.write(`<h1>${data}</h1>`);
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
            res.write('</html>');
         res.end();
        });
       
    }
    if(url==='/message' && method==='POST'){
        const body = [];
       req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
       });
    
      return  req.on('end',()=>{
       const parsedBody = Buffer.concat(body).toString();
       const message = parsedBody.split('=')[1];
       console.log(parsedBody);
    //    fs.writeFileSync('message.txt',message);
    //    res.statusCode = 302;
    //    res.setHeader('Location','/');
    //    return res.end();
    
    fs.writeFile('message.txt',message,(error)=>{
        res.statusCode = 302;
        res.setHeader('Location','/');
    return res.end();
    });
    });
    
    }
     res.setHeader('content-Type','text/html');
     res.write('<html>');
     res.write('<head><title>My First Page</title></head>');
       res.write('<body><h1>welcome home</h1></body>');
     res.write('</html>');
     res.end();
    
}
//first way
//module.exports = requestHandler;

//second way to export multiple method 
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some Hard Coded Text'
// };

//third way to export multiple method
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hard Coded Text';

//forth way
exports.handler = requestHandler;
exports.someText = 'Some Hard Coded Text';