function pythagProduct(num){
    var a;
    var b;
    var c; // = num - (a+b)

    for (var i = 1; i < num; i++ ){
        for (var j = 2; j < num; j++){
            a = i;
            b = j;
            c = num - (a+b);
            if((a+b+c == num) && (a*a +b*b == c*c)){
                return a*b*c;
            }
        }
    }
}

console.log(pythagProduct(1000));