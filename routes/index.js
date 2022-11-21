const path=require('path')
var express = require('express');
var router = express.Router();


console.log(path.join(__dirname,"../public"))
const staticPath=path.join(__dirname,"../public")

router.use(express.static(staticPath))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/pools",function(req,res){
    
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
