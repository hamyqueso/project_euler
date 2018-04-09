var current;
var answer;
var max = 1;

for (current = 1e6 -1; current > 1e5; current--){
    var i = current;
    var count = 1;
    while (i != 1){
        if (i%2==0){
            i/=2;
            count++;
        } else {
            i = i*3 + 1;
            count++;
        }
    }
    if (count > max){
        max = count;
        answer = current;
    }
}

console.log(answer);