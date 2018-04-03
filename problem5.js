function multiple(num){
    var answer = num;
    var arr = [];
    for (var i = 0; i < num; i++){
        arr[i] = i+1;
    }
    //var bool = false;
    //return arr;
    do {
        for (var j = 0; j < num; j++){
            if(answer%arr[j] != 0){
                answer+=num;
                //return false;
                j = 0;
            }
        }
        //return answer;
        
    } while(false);

    return answer;
}

console.log(multiple(20));