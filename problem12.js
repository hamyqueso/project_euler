function divisors(num) {
    var count = 2;
    var triangle = 1;
    var add = 2;

    while (count < num) {
        count = 2;
        triangle += add;
        if (triangle % 2 == 0) {
            for (var i = 2; i < Math.floor(triangle / 2); i++) {
                if (triangle % i == 0) {
                    count++;
                }
            }
        }

        add++;

    }
    return triangle;
}

console.log(divisors(500));