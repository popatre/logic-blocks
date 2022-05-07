const fs = require("fs");

const formatDepthData = () => {
    const depthRawData = fs.readFileSync("./johnnyDepthData.txt", {
        encoding: "utf8",
    });
    const depthNums = depthRawData.split("\n").map((num) => +num);

    return depthNums;
};

module.exports = formatDepthData;
