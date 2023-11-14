const EC = require('elliptic').ec; 
var ec = new EC('secp256k1');

// Generate public keys and private keys
var key = ec.genKeyPair();

const privateKey = key.getPrivate('hex');
const publicKey = key.getPublic("hex");

console.log(privateKey);
console.log(publicKey);