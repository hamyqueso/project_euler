function pal(num){
    var start = [];
    for (var i = 0; i < num; i++){
        start[i] = 9;
    }
    var one = parseInt(start.join(''));
    //return one.toString().split('').reverse();
   
    for (var j = one; j > 0; j--){
        for (var k = j; k > 0; k--){
            var two = j*k;
            var count  = 0;
            //return two.toString().split('').reverse();
            for (var l = 0; l < two.toString().length; l++){
                
                if ((two).toString().split('')[l] == (two).toString().split('')[two.toString().length - (l + 1)]){
                    count++;
                }
               
            }
            
            }
            if (count == (two.toString().length-1)){
                return two;
        }
    }
}

//pal(2);
console.log(pal(4));