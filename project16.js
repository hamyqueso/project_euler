function power(num){
    var bigInt = require("big-integer");
    var str = bigInt(Math.pow(2, num)).toString().split('');

    var answer = 0;
    for (var i =0; i < str.length; i++){
        answer+=parseInt(str[i]);
    }
    return answer;
}

console.log(power(10));