const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let num = (2**disksNumber)-1,
    SpeedSec = turnsSpeed/3600,
    t = Math.floor(num/SpeedSec);
    
    return {
        turns: num,
        seconds: t,
    };
};
