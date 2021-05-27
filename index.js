var http = require('http');
var PORT = 8080
var MENSAJE = 'Hola mundo!'
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(MENSAJE);
  res.end();
}).listen(PORT);
