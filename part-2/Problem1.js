//  Problem 1 Fibonacci Topdown

function fiboTopDown(num, memo = {}) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    if (num in memo) {
        return memo[num];
    }

    const hasil = fiboTopDown(num - 2, memo) + fiboTopDown(num - 1, memo);
    memo[num] = hasil;
    return hasil;
}

console.log(fiboTopDown(5))