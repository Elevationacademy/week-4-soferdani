const theType = require("./consts")
const theFunc = require("./complaintsHandler")

let complaint1 = {
    text: "I'm not getting enough money",
    type: theType.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: theType.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: theType.EMOTIONS
}

theFunc.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
theFunc.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
theFunc.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."
