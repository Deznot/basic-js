const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(!date){
        return 'Unable to determine the time of year!';
    }else if(!(date instanceof Date) || Object.prototype.toString.call(date) !== "[object Date]"){
        throw new Error();
    }

    let month = date.getMonth();
    let season = new Map();
    season.set(new Set([11,0,1]),'winter');
    season.set(new Set([2,3,4]), 'spring');
    season.set(new Set([5,6,7]), 'summer');
    season.set(new Set([8,9,10]), 'fall');

    for(let seas of season.keys()){
        if (seas.has(month)){  
            return season.get(seas);
        }
    }
};
