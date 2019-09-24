var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users',function(req, res, next){
  let username = "benjamin";
  let password = "password";
  let userid = 1;
  return db.any('INSERT INTO user2 VALUES($1, $2, $3)',[username,password,userid]).then(function(data){
console.log("data",data);
  }).catch(function(error){
    console.log(error);
  });
  
})


  

module.exports = router;
