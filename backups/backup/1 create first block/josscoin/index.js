const sha256 = require('crypto-js/sha256');
class Block {
    constructor(timestamp, data, previousHash){
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    //hashCreating function
    calculateHash() {
        return sha256(this.timestamp + JSON.stringify(this.data )+ this.previousHash).toString(); // ensure making string all element && converting hash to string
    }
}

const block = new Block('2019-01-01',{ amount: 5}, 'ABCD');
console.log(block);