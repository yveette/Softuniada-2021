function solve(input) {
    let first = input[0];
    let test = input[0].split('');
    let found = input[1];

    let length = test.length;
    let checked = [];

    let count = 0;

    let testing = true;
    let isFound = false;

    while (testing && length != -1) {
        length -= 1;
        checked.push(test.pop());

        while (test.length) {
            checked.push(test.shift());
        }
        test = checked;

        count += 1;

        if (checked.join('') == found) {
            testing = false;
            isFound = true;
            break;
        }
        checked = [];
    }

    if (isFound) {
        console.log(`The minimum operations required to convert "${first}" to "${found}" are ${count}`)
    } else {
        console.log('The name cannot be transformed!');
    }
}

solve([
    'esiD',
    'Desi'
]);

solve([
    'nIva',
    'Ivan'
]);

// solve([
//     'ekVianor',
//     'Veronika'
// ]);

solve([
    'aToderos',
    'Teodora'
]);