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

function nthPrime(num){
    var target = 1;
    var current = 2;
    while (target != num){
        if (current = 2){
            current++;
        } else{
            current+=2;
        }
        
        if (isPrime(current)){
            target++;
        }
        
    }
    return current;
}

console.log(nthPrime(5));