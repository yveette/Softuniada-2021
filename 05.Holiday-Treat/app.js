function solve(input) {
    let arr = input[0].split(', ').map(n => n = Number(n));
    let counts = Number(input[1]);

    let sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    let pack = sum / counts;

    if (!Number.isInteger(pack)) {
        console.log('Packaging is not possible!');
    } else {
        
    }

    // console.log(arr);
}

solve([
    '3, 5, 1, 4, 2, 5, 2, 1, 1, 2, 4, 7, 1, 4, 6',
    '6'
]);

solve([
    '4, 1, 1, 5, 3, 3, 5, 4, 4, 5',
    '2'
]);