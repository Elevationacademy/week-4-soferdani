const fromConsts = require("./consts")

console.log(fromConsts);

const handleComplaints = function (complaint) {
    if (complaint.type == fromConsts.FINANCE) {
        console.log("Money doesn't grow on trees, you know.");
    } else if (complaint.type == fromConsts.WEATHER){
        console.log("It is the way of nature. Not much to be done.");
    } else if (complaint.type == fromConsts.EMOTIONS) {
        console.log("It'll pass, as all things do, with time.");
    }
}

module.exports = {
    handleComplaints
}