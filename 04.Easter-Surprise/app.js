function solve(input) {
    let [rows, colons] = input.shift().split(' ');
    rows = Number(rows);
    colons = Number(colons);

    let all = [];

    for (let i = 0; i < rows; i++) {
        let row = input.shift().split(' ');
        all.push(row);
    }

    const symbol = input.shift();

    let [startRow, startColon] = input.shift().split(' ');
    startRow = Number(startRow);
    startColon = Number(startColon);


    let find = all[startRow][startColon];
    all[startRow][startColon] = symbol;


    for (let i = startColon; i < colons + 1; i++) {
        let count = 0;
        if (all[startRow][i] == symbol) {

            for (let j = startRow + 1; j < rows; j++) {
                if (all[j][i] == find) {
                    all[j][i] = symbol;
                } else {
                    break;
                }
            }
        }
    }

    for (let i = startColon + 1; i < colons + 1; i++) {
        if (all[startRow][i] == find) {

            all[startRow][i] = symbol;

            for (let j = startRow + 1; j < rows; j++) {
                if (all[j][i] == find) {
                    all[j][i] = symbol;
                } else {
                    break;
                }
            }

            for (let j = startRow - 1; j > -1; j--) {
                if (all[j][i] == find) {
                    all[j][i] = symbol;
                } else {
                    break;
                }
            }
        } else {
            break;
        }
    }

    for (let i = 0; i < rows  ; i++) {
        console.log(all[i].join(''));
    }
}

// solve([
//     '5 3',
//     'k k k',
//     'x k x',
//     'x k k',
//     'k k k',
//     'x k x',
//     '0',
//     '1 0'
// ]);

solve([
    '5 6',
    's s u u s s',
    's u s s u s',
    'u s s s s u',
    's u s s u s',
    's s u u s s',
    'i',
    '2 1'
]);


// solve(['5 3',
//     'a a a',
//     'a a a',
//     'a b a',
//     'a b a',
//     'a b a',
//     'x',
//     '2 1'])


// solve(['5 6',
//     'o o o o o o',
//     'o o o m o o',
//     'o o m o m m',
//     'o m m w m o',
//     'm o o o o o',
//     'z',
//     '4 1'
// ])


// solve([
//     '5 3',
// 'a a a',
// 'a a a',
// 'a b a',
// 'a b a',
// 'a b a',
// 'x',
// '0 0'
// ])