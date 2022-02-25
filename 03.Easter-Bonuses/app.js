function solve(input) {
    let index = 0;
    let task = input.shift();
    let allAmount = 0;

    while (task != 'stop') {
        let name = task;

        let numbers = input.shift().split(', ').map(Number);

        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
            let sum = 1;

            let cloneArray = numbers.slice();

            cloneArray.splice(i, 1);
            cloneArray.forEach(n => sum *= n);

            result += sum;
        }

        allAmount += result;
        task = input.shift();
        console.log(`${name} has a bonus of ${result} lv.`);
    }

    console.log(`The amount of all bonuses is ${allAmount} lv.`)
}

solve(['Ivan',
    '5, 7, 3, 6',
    'Simona',
    '0, 1, 2, 3, 4, 5',
    'stop'
]);
// Output:
// Ivan has a bonus of 531 lv.
// Simona has a bonus of 120 lv.
// The amount of all bonuses is 651 lv.

solve([
    'Maria',
    '5, 4, 3, 6, 1',
    'Nikola',
    '3, 1, 6, 4',
    'Viktor',
    '6, 1, 2, 3, 4, 5',
    'stop'
]);
// Output:
// Maria has a bonus of 702 lv.
// Nikola has a bonus of 126 lv.
// Viktor has a bonus of 1764 lv.
// The amount of all bonuses is 2592 lv.

solve([
    'Moni',
    '2, 4, 3, 2, 1', // 2 shows two times !!!
    'Gabriel',
    '8, 1, 6, 4',
    'Emma',
    '6, 1, 2, 3, 4, 5',
    'Sofia',
    '3, 4, 9, 6',
    'stop'
]);
// Output:
// Moni has a bonus of 124 lv.
// Gabriel has a bonus of 296 lv.
// Emma has a bonus of 1764 lv.
// Sofia has a bonus of 558 lv.
// The amount of all bonuses is 2742 lv.