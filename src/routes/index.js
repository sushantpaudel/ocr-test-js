const router = require('express').Router();

router.get('/test',(req,res,next)=>{
    //USE TESSERACT FOR SIMPLE IMAGE AND SEND THE STRING OUTPUT
    res.send("OUTPUT OF TESSERACT");
})

module.exports = router;