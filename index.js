
//4 HTTP module
const http = require('http');
const port = 3000;
const handleUrl = require('url');
const server = http.createServer((request, response) => {
    // get ip address
    const ipAddress = request.socket.remoteAddress;
    // get url client
    const url = request.url;

    // send message to client

    response.write (`IP Address is ${ipAddress} \r\n`);
    // lay url
    response.write (`request url ${url} \n`);
    //boc tach url 
    response.write (`detail url ${JSON.stringify(handleUrl.parse(url, true))} \n`)
    console.log('ipAddress :', ipAddress);
    console.log('url :', url);
    response.end()


}).listen(port); 
console.log('hello 3000');