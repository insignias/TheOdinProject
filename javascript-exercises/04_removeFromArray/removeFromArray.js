const removeFromArray = function(...args) {
    const targetArr = args[0]

    for (let i=1; i<args.length; i++) {
        const index = targetArr.indexOf(args[i])
        if (index < 0) continue;
        targetArr.splice(index, 1)
    }
    return targetArr;
};

// Do not edit below this line
module.exports = removeFromArray;
