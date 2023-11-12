const sumAll = function(num1, num2) {
    if (num2 < 0 || num1 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') return "ERROR";
    let res = 0
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp
    }
    for (let i=num1; i<=num2; i++) res += i
    return res
};

// Do not edit below this line
module.exports = sumAll;
