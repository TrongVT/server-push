var express = require('express');
var router = express.Router();

var tokens = require('./model/tokens');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(tokens)
});
///hien thi tokens ra man hinh web

router.post('/', function(req, res, next) {
  if(req.body.token)
    var item ={
      token: req.body.token,
      user: req.body.user
    }
      tokens.push(item)
    
  res.end();
});
//them token vao danh sach

module.exports = router;
