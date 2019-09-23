var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next){
  let hashedPassword = bcrypt.hashsyn(password,10);
  return db.one('INSERT INTO users (username, password_hash) VALUES ($1, $2) returning id', [userdname, hasedPassword])
})
.then(() =>{
  res.send('success')
})
.catch(function(error){
  console.log("error", error);
  res.status(400).send(error)
});



  

module.exports = router;
