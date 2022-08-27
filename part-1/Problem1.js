// Problem 1

function simpleEquations(a, b, c) {
    let num = [];
    for (let x = 0; x <= a; x++) {
        for (let y = 0; y <= a; y++) {
            for (let z = 0; z <= a; z++) {
                if (x+y+z===a && x*y*z===b && x**2+y**2+z**2===c) {
                    num.push(x, y, z)
                    return num;
                }
            }
        }
    }
    return 'No Solution.';
}

console.log(simpleEquations(1, 2, 3));