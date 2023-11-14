const sha256 = require('crypto-js/sha256'); //for creating hash

/*--------------------------------------------------------------------------------------------------------------------------------------------
                                            ------ START OF BLOCK CLASS -----
--------------------------------------------------------------------------------------------------------------------------------------------*/
//creating block
class Block {
    constructor(timestamp, data, previousHash = ""){ //previous has default value empty string
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }


    //MINING TO GET VALID HASH BLOCK
    nineBlock(difficulty){
        //ei function er kaj jotokkhon porjonto valid block hash na pai totokkhon porjonto hash calculat kora
        while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
            //condition in white (this.hash.substring(0, difficulty) !=="00000") // jotokkhon hash er first 5 ta char 00000 na hoi totokkhon hash calcualte korbe. 00000.. diye start hash ei valid hash hisebe nibo
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Mining Done: ' + this.hash);
    }
    //hashCreating function
    calculateHash() {
        return sha256(this.timestamp + JSON.stringify(this.data )+ this.previousHash + this.nonce).toString(); // ensure making string all element && converting hash to string
    }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------
                                            ------ START OF BLOCKCHAIN CLASS -----
--------------------------------------------------------------------------------------------------------------------------------------------*/
//crating block chain
class Blockchain{
    constructor() {
        this.cain = [this.generateGenesisBlock()]; //empty array in which array every block will be inserted , chain e contain genenis block first
        this.difficulty = 5; //assuming difficulty 2
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
    //    newBlock.hash = newBlock.calculateHash();
        newBlock.nineBlock(this.difficulty);
        this.cain.push(newBlock);
    }

/*-------------------------------------------------------------------------------------------------------------------------------------------
                                        --------- CHECKING THE BLOCK IS VALID OR NOT ----------
--------------------------------------------------------------------------------------------------------------------------------------------*/
    //checking the block is valid or not
    isBlockChainValid() {
        for(let i = 1;  i < this.cain.length; i++){ //starting from 1 because we will not check for genesis block
            const currentBlock = this.cain[i];
            const previousBlock = this.cain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            } //if current block's previous hash not equal to previous block's hash then not valid return false
            return true; //else return ture;
        }
    }
}

const josscoin = new Blockchain();
const block = new Block('2019-01-01',{ amount: 5});
const block2 = new Block('2019-01-01',{ amount: 10});
// console.log(block);

josscoin.addBlock(block); //block will be added into Blockchain
// josscoin.addBlock(block2);

josscoin.addBlock(block2);
console.log(josscoin);
