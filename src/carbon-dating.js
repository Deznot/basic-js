const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (arguments.length == 0 || typeof(sampleActivity) !== 'string' || !Number(sampleActivity) || (+sampleActivity ^ 0) !== +sampleActivity ||
        sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY){
        return false;
    }

    let k,t;
    k = 0.693/ HALF_LIFE_PERIOD;
    t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
    return t;
};
