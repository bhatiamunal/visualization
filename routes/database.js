var express = require("express");
var router	= express.Router();
// var multer  =   require('multer');  
// var app =   express();  
// var storage =   multer.diskStorage({  
//   destination: function (req, file, callback) {  
//     callback(null, './uploads');  
//   },  
//   filename: function (req, file, callback) {  
//     callback(null, file.originalname);  
//   }  
// });  
// var upload = multer({ storage : storage}).single('data');  
  
router.get('/', function (req, res) {

      var csv= require('csv-parser')
      var fs=require('fs')
      const results  = []
      fs.createReadStream('Data/sampleData.csv').pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        //console.log(results);
        res.json(results)
  
      });
});
router.post('/',function(req,res){ 
// console.log(req)
  upload(req,res,function(err) {  
      if(err) {  
        console.log(err)
          return res.end("Error uploading file."+ err);  
      }  
      res.end("File is uploaded successfully!");  
  });  
});  



module.exports = router;