//accessing MyContract contract using js
(async()=>{
    const address = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8"; // deployed smart contract address
    const abiArray = [
	{
		"inputs": [],
		"name": "ourString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_updateString",
				"type": "string"
			}
		],
		"name": "updateOurString",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

    const contractInstance = new web3.eth.Contract(abiArray, address);


    console.log(await contractInstance.methods.ourString().call()); //

    let accounts = await web3.eth.getAccounts();
    let transactionResult = await contractInstance.methods.updateOurString("Love you eth").send({from: accounts[0]}); //updating string accessing write function
    console.log(await contractInstance.methods.ourString().call()); //reading ourStringFunction/variable
    console.log(transactionResult);

})()