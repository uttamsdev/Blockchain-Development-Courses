import React, {useState, useEffect} from "react";
import { ethers } from "ethers";

import {contractABI, contractAddress} from '../utils/Constant'

export const TransactionContext = React.createContext(); // creating context

const { ethereum } = window;


console.log(contractABI, contractAddress);
//fetch ethereum
const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    return transactionsContract;
  };


export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({addressTo:'', amount: '', keyword: '', message: ''}); // this info should be same as from name
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    //getting form input data
    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));

    }

    //getting all transactions
    const getAllTransactions = async () => {
      try {
        if (ethereum) {
          const transactionsContract = createEthereumContract();
  
          const availableTransactions = await transactionsContract.getAllTransactions();
  
          const structuredTransactions = availableTransactions.map((transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / (10 ** 18)
          }));
  
          console.log(structuredTransactions);
  
          setTransactions(structuredTransactions);
        } else {
          console.log("Ethereum is not present");
        }
      } catch (error) {
        console.log(error);
      }
    };


    const checkIfWalletIsConnected = async() => {
        try {
            if(!ethereum)  return alert("Please install MetaMak.");
            const accounts = await ethereum.request({method: 'eth_accounts'});

            if(accounts.length){ //if accounted connected
            setCurrentAccount(accounts[0]);
            getAllTransactions();
        } else {
            console.log("No account found");
        }
        console.log(accounts);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    const checkIfTransactionsExists = async () => {
      try {
        if (ethereum) {
          const transactionsContract = createEthereumContract();
          const currentTransactionCount = await transactionsContract.getTransactionCount();
  
          window.localStorage.setItem("transactionCount", currentTransactionCount);
        }
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    };

    const connectWallet = async() => {
        try {
            if(!ethereum)  return alert("Please install MetaMak.");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }


    //sendTransaction
    const sendTransaction = async () => {
        try {
          if (ethereum) {
            const { addressTo, amount, keyword, message } = formData;
            const transactionsContract = createEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
    
            await ethereum.request({
              method: "eth_sendTransaction",
              params: [{
                from: currentAccount,
                to: addressTo,
                gas: "0x5208",
                value: parsedAmount._hex,
              }],
            });
    
            const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
    
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);
    
            const transactionsCount = await transactionsContract.getTransactionCount();
    
            setTransactionCount(transactionsCount.toNumber());
            window.location.reload();
          } else {
            console.log("No ethereum object");
          }
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };
    useEffect(()=> {
        checkIfWalletIsConnected();
        checkIfTransactionsExists();
    },[])
    return(
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData,sendTransaction,  handleChange, transactions, isLoading}}>
            {children}
        </TransactionContext.Provider>
    )

}