const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    console.log('request has been made from browser to server')
    // console.log(req.method);
    // console.log(req.url);

    res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello Coder :)</h1>');
    // res.end();
    //lodash
    
    let num = _.random(0,20);
    console.log(num)

    let greet = _.once(()=>{
        console.log('hello')
    })

    greet();
    greet();
    
    let path = './views';
    switch(req.url){
        case '/':
            path+='/index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='/about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about'); //redirect purpose of our site
            res.end();
            break;
        default:
            path+='/404.html';
            res.statusCode=404;
            break;
    }

    fs.readFile(path, (error,fileData)=>{
        if(error){
            console.log(error);
        }
        else{
            res.write(fileData)
            res.end()
        }
    })

})

server.listen('3000','localhost',()=>{
    console.log('server is listening on port 3000')
})