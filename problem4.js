function pal(num){
    var start = [];
    for (var i = 0; i < num; i++){
        start[i] = 9;
    }
    var one = parseInt(start.join(''));
    //return one.toString().split('').reverse();
    //return one;
    var answer = 0;
   
    for (var j = one; j > 0; j--){
        //return j;
        for (var k = j; k > 0; k--){
             var two = j*k;
            //return two;
            var count  = 0;
            var forwards = two.toString().split('');
            //return forwards[0];
            var backwards =  two.toString().split('').reverse();
            //return backwards;
            var length = two.toString().length;
            //return length;
            for (var l = 0; l < Math.floor(length/2); l++){
                //return forwards[l];
                if (forwards[l] == backwards[l]){
                    count++;
                }
                if (count == Math.floor(length/2) && two > answer){
                    answer = two;
            }
            
            
        }
            
            
        }
    }
    return answer;
}

//pal(2);
console.log(pal(3));