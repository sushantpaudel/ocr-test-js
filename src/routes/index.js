const router = require('express').Router();
const Tesseract = require('tesseract.js');


router.get('/test', (req, res, next) => {
    const myImage = 'public/img/image.png';
    //USE TESSERACT FOR SIMPLE IMAGE AND SEND THE STRING OUTPUT
    Tesseract.recognize(myImage)
        .then(function (result) {
            console.log(result.text);
        })
        res.send("In progress...");
})

module.exports = router;