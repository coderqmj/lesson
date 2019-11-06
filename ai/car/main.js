const fs = require('fs');
const image = fs.readFileSync('./chepai.jpg').toString("base64");
const AipOcrClient = require('baidu-aip-sdk').ocr;
const client =new AipOcrClient("17712424","3SqNtEGWxqWUeswyQEZlnRHG","E5fzy4GheiRjRZcVQ7oC90KKlKCzIfGE");
const options = {};
options["multi_detect"] = "true";

client
    .licensePlate(image, options)
    .then(function(result){
        console.log(result);
    })