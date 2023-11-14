const sha256 = require("crypto-js/sha256"); //for creating hash
const EC = require("elliptic").ec;
var ec = new EC("secp256k1");

/*--------------------------------------------------------------------------------------------------------------------------------------------
                                            ------ START OF BLOCK CLASS -----
--------------------------------------------------------------------------------------------------------------------------------------------*/
//creating block
class Block {
  constructor(timestamp, transactions, previousHash = "") {
    //previous has default value empty string
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  //MINING TO GET VALID HASH BLOCK
  mineBlock(difficulty) {
    //ei function er kaj jotokkhon porjonto valid block hash na pai totokkhon porjonto hash calculate kora
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      //condition in white (this.hash.substring(0, difficulty) !=="00000") // jotokkhon hash er first 5 ta char 00000 na hoi totokkhon hash calcualte korbe. 00000.. diye start hash ei valid hash hisebe nibo
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Mining Done: " + this.hash);
  }
  //hashCreating function
  calculateHash() {
    return sha256(
      this.timestamp +
        JSON.stringify(this.transactions) +
        this.previousHash +
        this.nonce
    ).toString(); // ensure making string all element && converting hash to string
  }

  hasValidTransactions() {
    for (const tx of this.transactions) {
      if (!tx.isValid()) {
        return false;
      }
    }
    return true;
  }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------
                                            ------ START OF BLOCKCHAIN CLASS -----
--------------------------------------------------------------------------------------------------------------------------------------------*/

//transaction class
class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  calculateHash() {
    return sha256(this.fromAddress + this.toAddress + this.amount).toString();
  }

  // adding signature to transaction to understand the transaction is valid or not
  signTransaction(key) {
    if (key.getPublic("hex") !== this.fromAddress) {
      //checking public wallet is equal to from address or not
      throw new Error("You do not have access");
    }
    const hashOfTransactions = this.calculateHash();
    const signature = key.sign(hashOfTransactions, "base64");
    this.signature = signature.toDER();
  }

  isValid() {
    if (this.fromAddress === null) true;
    if (!this.signature || this.signature.length === 0) {
      throw new Error("No signature found");
    }

    const key = ec.keyFromPublic(this.fromAddress, "hex"); // getting key
    return key.verify(this.calculateHash(), this.signature);
  }
}
//crating block chain
class Blockchain {
  constructor() {
    this.cain = [this.generateGenesisBlock()]; //empty array in which array every block will be inserted , chain e contain genenis block first
    this.difficulty = 3; //assuming difficulty 2
    this.pendingTransactions = []; //block ta jokn mining hobe tokn transaction hobe er age pending thakbe
    this.miningReward = 10; //each sucessful mining will get 10 josscoin to minor
  }

  //generate genesisBlock
  generateGenesisBlock() {
    return new Block("2018-01-01", "GENESIS", "0000");
  }

  //getting latest/ last created block
  getLatestBlock() {
    return this.cain[this.cain.length - 1]; //array index
  }

  //create transaction function
  addTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress) {
      //transaction er from address and to address na thakle transaction ta add hobe na
      throw new Error(" Cannot process transaction");
    }

    if (!transaction.isValid()) {
      throw new Error("Invalid transaction");
      //transaction valid na hole
    }

    if (transaction.amount < 0) {
      throw new Error("Invalid transaction amount");
    }
    // if(transaction.amount > this.getBalanceOfAddress(transaction.fromAddress)){
    //     //jei address theke amount send kora hocce tar j current amount ahce tar theke besi amount sent korte parbe na error dibe.
    //     throw new Error("Not enough balance");
    // }
    this.pendingTransactions.push(transaction);
  }

  //mine pending transaction
  minePendingTransaction(minerAddress) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);
    this.cain.push(block); //push after mine
    this.pendingTransactions = [
      new Transaction(null, minerAddress, this.miningReward), //miner will get reward
    ]; //empty pending transaction after push
  }

  /*-------------------------------------------------------------------------------------------------------------------------------------------
                                        --------- CHECKING THE BLOCK IS VALID OR NOT ----------
--------------------------------------------------------------------------------------------------------------------------------------------*/
  //checking the block is valid or not
  isBlockChainValid() {
    for (let i = 1; i < this.cain.length; i++) {
      //starting from 1 because we will not check for genesis block
      const currentBlock = this.cain[i];
      const previousBlock = this.cain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      } //if current block's previous hash not equal to previous block's hash then not valid return false

      if (!currentBlock.hasValidTransactions()) {
        return false;
      }
    }
    return true; //else return ture;
  }

  getBalanceOfAddress(address) {
    let balance = 0;
    for (const block of this.cain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          //sender
          balance -= trans.amount;
        }
        if (trans.toAddress === address) {
          //receiever
          balance += trans.amount;
        }
      }
    }
    return balance;
  }
}
//exporting all class for use from another class
module.exports = {
  Block,
  Transaction,
  Blockchain,
};
