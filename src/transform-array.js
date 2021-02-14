const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if(!(arr instanceof Array)){
        throw new Error();
    }

    let res = [];

    for (let i = 0; i < arr.length; i++){
        if (typeof(arr[i]) == 'string'){
            switch(arr[i]){
                case '--double-next':
                    if(arr[i+1] !== undefined){
                        res.push(arr[i+1]);
                    }
                    break;
                
                case '--double-prev':
                    if((arr[i-2] !== '--discard-next') && (arr[i-1] !== undefined)){
                        res.push(arr[i-1]);
                    }
                    break;
                
                case '--discard-prev':
                    if((arr[i-2] !== '--discard-next' && arr[i-1] !== undefined)){
                        res.pop();
                    }
                    break;
                
                case '--discard-next':
                    (arr[i+1] !== undefined)?i++:'';
                    break;
                default:
                    res.push(arr[i]);
                    break;
            }
        }else{
            res.push(arr[i]);
        }
    }
    return res;
};
