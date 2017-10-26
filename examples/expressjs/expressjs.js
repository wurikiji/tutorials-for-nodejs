const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <font size='22'>hello world!</font>
      </body>
    </html>`);
});

app.get('/test/', (req, res) => {
  res.send(`<h1>You are entering wrong path! Go away!</h1>`)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
