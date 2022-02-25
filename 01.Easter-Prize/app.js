function solve(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);

    let result = [];
    for (let i = n1; i <= n2; i++) {
        if (i != 1) {
            let count = 0;
            for (let j = 2; j <= n2; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count > 1) {

            } else {
                result.push(i);
            }
        }
    }

    console.log(result.join(' '));
    console.log(`The total number of prime numbers between ${n1} to ${n2} is ${result.length}`);
}

solve(['1', '10']);
// Output:
// 2 3 5 7
// The total number of prime numbers between 1 to 10 is 4