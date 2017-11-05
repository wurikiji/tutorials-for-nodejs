/* npm install --save express */
const express = require('express');
const app = express();

app.locals.pretty = true;

/* set pug to be used as an view engine */
/* npm install --save pug */
app.set('view engine', 'pug');
app.set('views', './views');

/* pug template examples */
app.get('/template', (req, res) => {
  res.render('template', {
    _time:Date(),
    _title:`pug template test`
  });
});

app.get('/form', (req, res) => {
  res.render('form');
})


/* handle 'submit' request using 'post' method */
/* need middlewares to parse post body */
/* npm install --save body-parser */
/* npm install --save multer */
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

/* handle module and file */
const listShower = require('./list-shower.js');
app.get(['/list', '/list/:title'], listShower)

app.get('/form_add', (req,res) => { res.render('add_list'); })
app.post('/form_add', require('./list-adder.js'));

/* handle 'submit' request using 'get' method */
app.get('/form_receiver', (req, res) => {
  var _title = req.query.title;
  var _desc = req.query.desc;
  res.send(`[Get] Title: ${_title}, Body: ${_desc}`);
})

app.post('/form_receiver', (req, res) => {
  var _title = req.body.title;
  var _desc = req.body.desc;
  res.send(`[Post] Title: ${_title}, Body: ${_desc}`)
})

/* how to use semantic URL */
app.get('/semantic', (req, res) => {
  res.send("Nothing is sent");
})

app.get('/semantic/:id', (req, res) =>{
  res.send(`You sent id ${req.params.id}`);
})

app.get('/semantic/:id/:mode', (req, res) => {
  res.send(`You sent id ${req.params.id} with mode ${req.params.mode}`);
})

/* how to use query string */
app.get('/topics', (req, res) => {
  var _qid = req.query.id;
  var _name = req.query.name;
  res.send(`hello ${_qid} with ${_name}`);
});

app.get('/query', (req, res) => {
  var _id = req.query.id;
  var language = [
    `Javascript`,
    `C++`,
    `Express`,
    `Nodejs`,
    `C`,
    `Python`,
  ]
  var links =``
  for (var i = 0 ;i < language.length; i++) {
    links += `<a href="/language?id=${i}"> ${language[i]} </a> <br />`
  }
  links += `This page is for ${language[_id]}`
  res.send(links);
})

/* static, dynamic examples */
app.use(express.static('static'));

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
app.get('/', (req, res) => {
  res.send(`hello world!`);
});

app.get('/test/', (req, res) => {
  res.send(`<h1>You are entering wrong path! Go away!</h1>`);
});

/* Start listening */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
