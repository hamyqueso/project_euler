function diff(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr[i] = i+1;
    }
    //Find sum of squares
    var sum = 0;
    for (var j = 0; j < num; j++){
        sum+=(arr[j]*arr[j]);
    }

    var sqr = 0;
    for (var k = 0; k < num; k++){
        sqr += arr[k];
    }
    sqr *= sqr;

    var diff = sqr - sum;
    return diff;
    
}

console.log(diff(100));