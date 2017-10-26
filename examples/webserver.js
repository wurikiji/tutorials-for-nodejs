const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  /* client가 접속 했을때 */
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('hello world\n');
}).listen(port, hostname, () => {
  console.log(`server running at ${hostname}:${port}`);
});
