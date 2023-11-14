//getting accounts

(async()=>{
    let accounts = await web3.eth.getAccounts(); // getting accounts selected into metamask
    console.log(accounts, accounts.length);

    let balance = await web3.eth.getBalance(accounts[0]);
    console.log(balance); //wei

    console.log( await web3.utils.fromWei(balance, "ether")); // converting balance wei to eth
})() // anonymous arrow function and calling the function
