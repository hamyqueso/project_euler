function isPrime(num){
    if(num == 2){
        return true;
    } else if (num%2 == 0 || num ==1){
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

function sumPrime(num){
    var current = 0;
    var sum = 0;

    while (current < num){
        

        if (isPrime(current)){
            sum+=current;
        }

        if(current == 2){
            current++;
        } else {
            current +=2;
        }
    }

    return sum;
}

console.log(sumPrime(2000000));