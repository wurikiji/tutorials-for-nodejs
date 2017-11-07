/* use multer to upload files */
const multer = require('multer');
const fs = require('fs');
const path = './uploads'
const postfix = '-latest'

var storage = multer.diskStorage( {
  destination: (req, file, cb) => {
    cb(null, path)
  },
  filename: (req, file, cb) => {
    var fname = file.originalname;
    fname = fname.replace(' ', '-');
    while (fs.existsSync(path + '/' + fname)) {
      var idx = fname.lastIndexOf('.');
      if (idx != -1 && idx != 0) {
        fname = fname.slice(0, idx) + postfix + fname.slice(idx);
      } else {
        fname = fname + postfix;
      }
    }
    cb(null, fname);
  }
})

const uploader = multer({ storage: storage })

var _message = null;

module.exports = function(req, res) {
  if (req.method == 'GET') {
    fs.readdir('./uploads', (err, files) => {
      if (err) {
        console.log (err);
        res.status(500).send("Internal Server Error");
      }
      res.render('uploader', {
        _files: files,
        _dirpath: '/upload/',
        _message: _message,
      });
      _message = null;
    });
  } else {
    uploader.single('userfile')(req, res, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
      if (req.file == null) {
        _message = 'no file is selectd!!';
      } else {
        _message = null;
      }
      res.redirect('/upload');
    })
  }
}
