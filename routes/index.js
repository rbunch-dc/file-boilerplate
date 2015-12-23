var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var multer = require('multer');
var app = express();
////BOILPATEE INFO////
//SET UP OUR PATHS FOR OUR FILE
var upload = multer({dest: 'upload/'});
var type = upload.single('file');
var fs = require('fs');
router.post('/upload', type, function (req, res, next){
  res.json(req.file);
})

module.exports = router;
