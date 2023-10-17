var http = require('http')
var server = http.createServer(function(req, res){
    console.log('request is made from '+ req.url)
    res.writeHead(200,{'Content-type':'text/plain'})
    res.end('Welcome to Edureka Learning Center from Node JS Server')
})

server.listen(3000, '127.0.0.1')
console.log('Server is Established on port number 3000')