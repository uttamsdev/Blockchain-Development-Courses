const sha256 = require('crypto-js/sha256'); //for creating hash

/*--------------------------------------------------------------------------------------------------------------------------------------------
                                            ------ START OF BLOCK CLASS -----
--------------------------------------------------------------------------------------------------------------------------------------------*/
//creating block
class Block {
    constructor(timestamp, transactions, previousHash = ""){ //previous has default value empty string
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }


    //MINING TO GET VALID HASH BLOCK
    mineBlock(difficulty){
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
        return sha256(this.timestamp + JSON.stringify(this.transactions )+ this.previousHash + this.nonce).toString(); // ensure making string all element && converting hash to string
    }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------
                                            ------ START OF BLOCKCHAIN CLASS -----
--------------------------------------------------------------------------------------------------------------------------------------------*/

//transaction class
 class Transaction {
     constructor(fromAddress, toAddress, amount){
         this.fromAddress = fromAddress;
         this.toAddress = toAddress;
         this.amount = amount;
     }
 }
//crating block chain
class Blockchain{
    constructor() {
        this.cain = [this.generateGenesisBlock()]; //empty array in which array every block will be inserted , chain e contain genenis block first
        this.difficulty = 5; //assuming difficulty 2
        this.pendingTransactions = [];  //block ta jokn mining hobe tokn transaction hobe er age pending thakbe
    }

    //generate genesisBlock
    generateGenesisBlock() {
        return new Block('2018-01-01',"GENESIS", "0000");
    }

    //getting latest/ last created block
    getLatestBlock(){
        return this.cain[this.cain.length - 1]; //array index
    }

    //create transaction function
    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    //mine pending transaction
    minePendingTransaction() {
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);
        this.cain.push(block); //push after mine
        this.pendingTransactions = []; //empty pending transaction after push 
    }

    // addBlock(newBlock) {
    //     newBlock.previousHash = this.getLatestBlock().hash //setting new blocks previous hash
    // //    newBlock.hash = newBlock.calculateHash();
    //     newBlock.mineBlock(this.difficulty);
    //     this.cain.push(newBlock);
    // }

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

    getBalanceOfAddress(address){
        let balance = 0;
        for(const block of this.cain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    //sender 
                    balance -= trans.amount;
                }
                if(trans.toAddress === address){
                    //receiever
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }
}

const josscoin = new Blockchain();
josscoin.createTransaction(new Transaction('address1','address2',100)); // initial address balance 0 
josscoin.createTransaction(new Transaction('address2','address1',50)); //transaction gula process hobe jokhon block ta mine kora hobe.

josscoin.minePendingTransaction();
console.log(josscoin.getBalanceOfAddress('address1'));
console.log(josscoin.getBalanceOfAddress('address2'));
// console.log(josscoin);
