const findTotal = (inputArray) => {
    return inputArray.reduce((acc, currVal) => {
        return acc + currVal;
    }, 0);
};

module.exports = findTotal;
