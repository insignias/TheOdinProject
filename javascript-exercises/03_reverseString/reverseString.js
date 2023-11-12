const reverseString = function(str) {
    const len = str.length;
    if (!len) return str;
    const strArr = str.split('');
    let startIndex = 0
    let endIndex = str.length-1
    while (startIndex < endIndex) {
        const preStart = strArr[startIndex];
        strArr[startIndex] = strArr[endIndex];
        strArr[endIndex] = preStart;
        startIndex++;
        endIndex--;
    }
    return strArr.join('')
};

// Do not edit below this line
module.exports = reverseString;
