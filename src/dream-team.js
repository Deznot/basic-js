const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members || !Array.isArray(members)){
        return false;
    }
    let res = '';
    members.forEach((el,i)=>{
        if(isNaN(+el) && !!el && typeof(el) == 'string'){
            console.log(el);
            res += el.trim().slice(0,1).toUpperCase();
        }
    });    
    return res.split('').sort().join('');
};