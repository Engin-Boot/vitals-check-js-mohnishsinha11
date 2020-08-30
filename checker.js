const expect = require('chai').expect;
const checkBpmReference=require("./checkBpm.js");
const checkSpo2Reference=require("./checkSpo2.js");
const checkRespRateReference=require("./checkRespRate.js");
function vitalsAreOk(bpm, spo2, respRate) {
    if(checkBpmReference(bpm)) {
        return false;
    } else if(checkSpo2Reference(spo2)) {
        return false;
    } else if(checkRespRateReference(respRate)) {
        return false;
    }
    console.log("All body vitals are okay");
    return true;
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;
expect(vitalsAreOk(100, 85, 70)).to.be.false;
expect(vitalsAreOk(100, 95, 28)).to.be.false;
expect(vitalsAreOk(155, 95, 70)).to.be.false;
expect(vitalsAreOk(100, 101, 70)).to.be.false;
expect(vitalsAreOk(100, 95, 100)).to.be.false;
expect(vitalsAreOk(70, 90, 30)).to.be.true;
expect(vitalsAreOk(150, 100, 95)).to.be.true;

console.log('checker is done');
