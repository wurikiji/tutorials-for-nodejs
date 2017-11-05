const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

module.exports = function(req, res) {
  var _title = req.body.title;
  var _desc = req.body.desc;
  fs.writeFile('./data/' + _title, _desc, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
    console.log(`${_title} is saved`);
    res.redirect('/list/' + _title);
  })
}
