const http = require('http');

// creating a server instance
const server = http.createServer((req,res)=>{
    console.log('request recived');
    res.writeHead(200, { 'content-type' : 'text/plain'})
    res.write('Welcome to Node.js!')
    res.end()
})

const port = 3000 // a port number for server to respond to request

//setting up server to listen to the requested prt number
server.listen(port, (err)=>{
    if(err) throw err
    console.log(`Server active on port ${port} `)
})