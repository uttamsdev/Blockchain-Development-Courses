const sha256 = require('crypto-js/sha256'); //for creating hash

//creating block
class Block {
    constructor(timestamp, data, previousHash = ""){ //previous has default value empty string
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
/*------------------------------ ---------------------------End of Block Class --------------------------------------------------------------
                                                             END OF BLOCK CLASS
-------------------------------------------------------------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------------------------------------------------------------
                                            ------ START OF BLOCKCHAIN CLASS -----
--------------------------------------------------------------------------------------------------------------------------------------------*/
//crating block chain
class Blockchain{
    constructor() {
        this.cain = [this.generateGenesisBlock()]; //empty array in which array every block will be inserted , chain e contain genenis block first
    }

    //generate genesisBlock
    generateGenesisBlock() {
        return new Block('2018-01-01',"GENESIS", "0000");
    }

    //getting latest/ last created block
    getLatestBlock(){
        return this.cain[this.cain.length - 1]; //array index
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash //setting new blocks previous hash
       newBlock.hash = newBlock.calculateHash();
        this.cain.push(newBlock);
    }
}

const josscoin = new Blockchain();
const block = new Block('2019-01-01',{ amount: 5});
const block2 = new Block('2019-01-01',{ amount: 5});
// console.log(block);

josscoin.addBlock(block); //block will be added into Blockchain
josscoin.addBlock(block2);

console.log(josscoin);