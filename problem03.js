
function isPrime(num){
    if (num%2 == 0 || num ==1){
        return false;
    } else {
        for (var i = 3; i < (Math.floor(Math.sqrt(num)+1)); i+=2){
            if (num%i == 0){
                return false;
            }
        }
    }
    return true;
}

function largestPrime(num){
    var answer = 0;
    for (var j = 3; j < (Math.floor(Math.sqrt(num)+1)); j+=2){
        if (isPrime(j) && num%j==0){
            answer = j;
        }
    }
    return answer;
}

console.log(largestPrime(600851475143));
