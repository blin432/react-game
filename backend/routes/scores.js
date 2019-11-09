var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/scores',function(req, res, next){
  let task = "action";
  
  return db.any('INSERT INTO scores VALUES($1)',[task]).then(function(data){
console.log("data",data);
  }).catch(function(error){
    console.log(error);
  });
  
})

router.get('/getscore', function(req, res, next) {
  return db.any('SELECT * FROM score VALUES($1)',[task]).then(function(data){
    console.log("data",data);
      }).catch(function(error){
        console.log(error);
      });
  res.send('respond with a resource');
});



  

module.exports = router;
