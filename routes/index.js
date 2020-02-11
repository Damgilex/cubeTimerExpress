const router = require('express').Router();//return an object

router.get('/',async (req,res) =>{
   
    res.render('index');

});


module.exports = router;