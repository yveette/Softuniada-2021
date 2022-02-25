function solve(n) {
    n = Number(n);
    let final = [];

    let middle = n.toString();
    let center = n;

    let leftSpace = [];
    let rightSpace = [];

    for (let i = center; i > 0; i--) {
        let left = [];
        let right = [];
        middle = center;

        leftSpace.push('\xa0');
        rightSpace.push('\xa0');


        for (let j = center - 1; j > 0; j--) {
            left.unshift(j);
            right.push(j);
        }

        left.unshift(leftSpace.join(''));
        right.push(rightSpace.join(''));

        let result = left.join('') + middle + right.join('');

        final.push(result);
        center -= 1;
    }

    console.log(final.join('\n'));
}

solve('7');
// Output:
// 1234567654321 
//  12345654321  
//   123454321   
//    1234321    
//     12321     
//      121      
//       1 

solve('4');
// Output:
// 1234321 
//  12321  
//   121   
//    1