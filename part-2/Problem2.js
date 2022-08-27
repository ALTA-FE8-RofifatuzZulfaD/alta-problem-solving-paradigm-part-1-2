// Problem 2 Fibonacci Bottom Up

function fiboBottomUp(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let pointer1 = 0;
    let pointer2 = 1;

    for (let i = 2; i <= num; i++) {
        const temp = pointer1;
        pointer1 = pointer2;
        pointer2 = temp +pointer1;
    }
    return pointer2;
}

console.log(fiboBottomUp(3))