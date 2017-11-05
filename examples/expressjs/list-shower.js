
const fs = require('fs');

module.exports = function(req, res) {
  const fname = req.params.title;
  fs.readdir('./data', (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    if (fname != null) {
      fs.readFile('./data/' + fname, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Server Error");
        }
        res.render('show_list', {
          _list: files,
          _title: fname,
          _desc: data,
        })
      });
    } else {
      res.render('show_list', {
        _list: files,
      })
    }
  })
}
