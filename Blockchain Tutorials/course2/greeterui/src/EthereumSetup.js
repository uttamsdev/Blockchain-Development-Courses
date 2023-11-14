import Web3 from 'web3';

// const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
// web3.eth.getAccounts().then(console.log);

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

let greetABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_greeting",
				"type": "string"
			}
		],
		"name": "greeter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "greet",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let greeterAddress = "0x80e4f020Fbc6705FE5cF04CB707AB6984dFA150a";

const greeterContract = web3.eth.contract(greetABI).at(greeterAddress);

export{greeterContract};