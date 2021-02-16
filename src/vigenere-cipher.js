const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(mode = true){
		this.mode = mode;
		this.al = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
	}

	_crypting (message,key,isDecrypt=false){
		let keyArr = this._filterKey(key);
		if (isDecrypt){
			for (var i = 0; i < keyArr.length; i++){
				keyArr[i] = (26 - keyArr[i]) % 26;
			}
    	}
		
		message = message.toUpperCase();
		let output = "";
		for (let i = 0, j = 0; i < message.length; i++) {
			let c = message.charCodeAt(i);
			if (this.al.has(message[i])) {
				output += String.fromCharCode((c - 65 + keyArr[j % keyArr.length]) % 26 + 65);
				j++;
			}else {
				output += message.charAt(i);
			}
		}
		return output;
	}

	encrypt(message, key) {
		if (!message || !key){
			throw new Error();
		}
		
		let output = this._crypting(message,key);
		if(!this.mode){
			return output.split('').reverse().join('');
		}
		return output;
	}    
	decrypt(message, key) {
		if (!message || !key){
			throw new Error();
		}
		
		let output = this._crypting(message,key,true);

		if(!this.mode){
			return output.split('').reverse().join('');
		}
		return output;
	}

	_filterKey(key) {
		key = key.toUpperCase();
		let result = [];
		for (let i = 0; i < key.length; i++) {
			let c = key.charCodeAt(i);
			result.push((c - 65));
		}
		return result;
	}
}

module.exports = VigenereCipheringMachine;
