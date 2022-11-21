var express = require('express');
var router = express.Router();
var pool=require('./pool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/insert",function(req,res){
    console.log(req.body.useremail)
  pool.query("insert into entry(name,money,email,mobile)values(?,?,?,?)",[req.body.pname,req.body.price,req.body.ema,req.body.mobile],function(error,result){
      if(error)
      {
          console.log(error)
          res.render("bankentry",{status:"server error"})
  
      }
      else{
          console.log(result)
          res.render("bankentry",{status:"record submited"})
      }
  })



 
  
  })

module.exports = router;
