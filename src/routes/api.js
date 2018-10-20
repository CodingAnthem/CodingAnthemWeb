var express=require('express');  
var router=express.Router();  
  
router.get('/',function(req,resp,next){  
    resp.send('this is api data');  
});  
  
module.exports=router;   