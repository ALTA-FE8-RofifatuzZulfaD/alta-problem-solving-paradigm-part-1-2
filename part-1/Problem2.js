// problem 2

const change = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

function moneyChange(money) {
    const pecahan = [];
    let i = 0;
    
    while(money) {
        if (change[i] > money) {
            i++;
            continue;
        } else {
            pecahan.push(change[i]);
            money -= change[i]
        }
    }
    return pecahan;
}

console.log(moneyChange(255))