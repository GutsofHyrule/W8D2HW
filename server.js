const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);

    res.setHeader('Content-type', 'text/html')
    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break
        case '/about-me':
           
            res.statusCode = 301;
            res.setHeader('Location','/about ')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404;
            break
    }


    fs.readFile(path, (err, data) =>{
        if (err){
            console.log(err);
            res.end
        }else{
            res.end(data)
        }
    })
    
})
server.listen(3000, 'localhost', () =>{
    console.log('listening to request');
})