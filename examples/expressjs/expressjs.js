const express = require('express');
const app = express();

/* pug template examples */
app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/template', (req, res) => {
  res.render('template', {
    _time:Date(),
    _title:`pug template test`
  });
});

/* static, dynamic examples */
app.use(express.static('static'));
app.get('/', (req, res) => {
  res.send(`hello world!`);
});

app.get('/dynamic', (req, res) => {
  var time = Date(); //dynamic
  var output = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <h1>Hello, dynamic</h1>
        ${time}
      </body>
    </html>
  `
  res.send(output);
});

/* How to reponse to specific URI */
app.get('/test/', (req, res) => {
  res.send(`<h1>You are entering wrong path! Go away!</h1>`);
});

/* Start listening */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
