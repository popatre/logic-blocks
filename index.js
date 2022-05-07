const formatDepthData = require("./helpers/formatDepthData");
const findTotal = require("./helpers/findTotal");

const formattedDepthNums = formatDepthData();

/* Part 1 */

const findNoIncreasesInDepth = (depthReadings) => {
    let increasesInDepth = 0;

    for (let i = 0; i < depthReadings.length; i++) {
        if (depthReadings[i] < depthReadings[i + 1]) {
            increasesInDepth++;
        }
    }
    return increasesInDepth;
};

/*Part 2*/

const findWindowIncreasesInDepth = (depthReadings) => {
    //Avoid executing the whole code, if there aren't sufficient amount of readings
    if (depthReadings.length < 4) return 0;

    let increasesInDepth = 0;

    for (let i = 0; i < depthReadings.length; i++) {
        const firstDataBatch = depthReadings.slice(i, i + 3);
        const secondDataBatch = depthReadings.slice(i + 1, i + 4);

        const firstBatchSum = findTotal(firstDataBatch);
        const secondBatchSum = findTotal(secondDataBatch);

        if (firstBatchSum < secondBatchSum) increasesInDepth++;
    }
    return increasesInDepth;
};

module.exports = { findNoIncreasesInDepth, findWindowIncreasesInDepth };
