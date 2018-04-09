function factorial(num){
    var total = 1;
    for (var i = 1; i < num+1; i++){
        total *= i;
    }
    return total;
}

function lattice(num){
    return (factorial(num*2)/(factorial(num)*factorial(num)));
}

console.log(lattice(20));