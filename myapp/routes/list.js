var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/listupdate',function(req, res, next){
  let task = "action";
  
  return db.any('INSERT INTO list2 VALUES($1)',[task]).then(function(data){
console.log("data",data);
  }).catch(function(error){
    console.log(error);
  });
  
})

router.get('/getlist', function(req, res, next) {
  return db.any('SELECT * FROM list2 VALUES($1)',[task]).then(function(data){
    console.log("data",data);
      }).catch(function(error){
        console.log(error);
      });
  res.send('respond with a resource');
});


router.get('/editlist', function(req, res, next) {
  res.send('respond with a resource');
  return db.any('SELECT * FROM list2 VALUES($1)',[task]).then(function(data){
    console.log("data",data);
      }).catch(function(error){
        console.log(error);
      });
});

  

module.exports = router;
