const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = '',separator='+',addition='',additionRepeatTimes='',additionSeparator='|'}={}) {
    let res = '';
    let i = 0,
        j = 0;
        
    do{
        res+=str;
        j = 0;
        do{
            res += addition+`${(j<additionRepeatTimes-1)?additionSeparator:''}`;
            j++;
        }while(j < additionRepeatTimes);
        res += `${(i < repeatTimes - 1)?separator:''}`;
        i++;
    }while(i<repeatTimes);

    return res;
};