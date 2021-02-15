const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor(){
        this.calculateDepth = this.calculateDepth.bind(this); 
    }
    
     calculateDepth(arr){
        return 1 + (Array.isArray(arr)? arr.reduce((max, item)=>{
            return Math.max(max,this.calculateDepth(item));
        },0):-1);
    }
};