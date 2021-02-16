const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain : '',
    n : 0,
    getLength() {
        return this.n;
    },
    addLink(value) {
        (arguments.length == 0)?this.chain += `(  )~~`:this.chain += `( ${value} )~~`;
        this.n++;
        return this;
    },
    removeLink(position) {
        if (((position ^ 0) !== position) || position >= this.n || position <= 0) {
            this.chain = '';
            throw new Error();
        }
        this.chain = this.chain.split('~~');
        this.chain.splice(position-1,1);
        this.chain = this.chain.join('~~');
        this.n--;
        return this;
    },
    reverseChain() {
        (this.chain.length>0)?this.chain = this.chain.split('~~').reverse().join('~~').slice(2)+`~~`:'';
        return this;
    },
    finishChain() {
        let res = this.chain.slice(0,-2);
        this.chain = '';
        return res;
    }
};

module.exports = chainMaker;
