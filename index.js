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

    const windowDepthTotals = [];

    depthReadings.forEach((val, i) => {
        const depthBatchWindow = depthReadings.slice(i, i + 3);
        //Avoid pushing batches smaller than 3
        if (depthBatchWindow.length < 3) return;

        const batchTotal = findTotal(depthBatchWindow);

        windowDepthTotals.push(batchTotal);
    });

    return findNoIncreasesInDepth(windowDepthTotals);
};

module.exports = { findNoIncreasesInDepth, findWindowIncreasesInDepth };
