//var arr = [];

var fs = require("fs");
var text = fs.readFileSync("./problem13.txt").toString('utf-8');
var arr = text.split("\n");
var total = 0;

for(var i = 0; i < arr.length; i++){
    total += parseInt(arr[i]);
}


console.log(total);