const router = require('express').Router();
const Tesseract = require('tesseract.js');
const FuzzySearch = require('fuzzy-search');
en = require('stopword');

router.get('/ocr', (req, res, next) => {
    const myImage = 'public/img/image.png';
    //USE TESSERACT FOR SIMPLE IMAGE AND SEND THE STRING OUTPUT
    Tesseract.recognize(myImage)
        .then(function (result) {
            let final = result.text;
            final = final.replace(/\s+/g, ' ');
            final  = final.replace(/[^a-zA-Z0-9+]/g, " ");
            let allText = new Array;
            let finalArrayList = new Array;
            allText = final.split(" ");
            let newfinal = en.removeStopwords(allText);
            for(i=0; i<newfinal.length; i++){
                if(newfinal[i].length>0){
                    finalArrayList[i]=newfinal[i]; 
                }
            }
            res.send(finalArrayList);
        })
<<<<<<< HEAD
=======
        res.send("In progress...");
>>>>>>> 709526744131c80feb2c09ee745a8be5322d8e3a
})
router.get('/search', (req, res, next) => {
    const searcher = new FuzzySearch(allText, {
        caseSensitive: true,
    });
    const result = searcher.search('bac');
    res.send(result);
})
module.exports = router;


