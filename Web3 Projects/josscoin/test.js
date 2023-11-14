const { Block, Transaction, Blockchain } = require("./index");
const EC = require("elliptic").ec;
var ec = new EC("secp256k1");

// Generate public keys and private keys
var key = ec.genKeyPair();

const privateKey = key.getPrivate("hex");
const walletNumber1 = key.getPublic("hex");

//another key pair for another user
var key2 = ec.genKeyPair();
const privateKey2 = key2.getPrivate("hex");
const walletNumber2 = key2.getPublic("hex");

// console.log(privateKey);
// console.log(publicKey);

const josscoin = new Blockchain(); //creating blockchain
const tx1 = new Transaction(walletNumber1, walletNumber2, 5);
tx1.signTransaction(key); // giving sign to ttansaction1
josscoin.addTransaction(tx1); //pending transaction hisebe thakbe mine korle transaction process hobe


const tx2 = new Transaction(walletNumber2, walletNumber1, 2);
tx2.signTransaction(key2); // giving sign to ttansaction1
josscoin.addTransaction(tx2); //pending transaction hisebe thakbe mine korle transaction process hobe
josscoin.minePendingTransaction(walletNumber1); //after transactiion watching my balacnce



console.log(josscoin.getBalanceOfAddress(walletNumber1));
josscoin.minePendingTransaction(walletNumber1); //getting reward //after transactiion watching my balacnce
console.log(josscoin.getBalanceOfAddress(walletNumber1));

console.log(josscoin.getBalanceOfAddress(walletNumber2));
//if we change transaction info manually
josscoin.cain[1].transactions[1] = "Hacked";
console.log(josscoin.isBlockChainValid()); //changed manually so invalid block

//

