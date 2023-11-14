import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);


  return transactionContract;
}


export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("")
  const [formData, setFromData] = useState({ addressTo: "", amount: "", keyword: "", message: "" })
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
  const [transactions, setTransactions] = useState([])

  const handelChange = (e, name) => {
    setFromData((prevState) => ({ ...prevState, [name]: e.target.value }));
  }

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install matamask to connect to the blockchain before")
      const transactionContract = getEthereumContract();
      const avaiableTransactions = await transactionContract.getAllTransactions();

      const structuredTransactions = avaiableTransactions.map((transaction) => ({
        addressTo: transaction.revciver,
        addressFrom: transaction.sender,
        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / (10 ** 18)
      }
      ))

      setTransactions(structuredTransactions)
    } catch (error) {
      console.log(err)
      throw new Error("No Ethereum object")
    }
  }
  // console.log(transactions)

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install matamask to connect to the blockchain before")

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0])
        getAllTransactions()
      } else {
        console.log("No accounts found")
      }
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object")
    }
  }


  const checkIfTransactionsExist = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTransactionCount();

      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      console.log(err)
      throw new Error("No Ethereum object")
    }
  }


  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install matamask to connect");
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
      throw new Error("No Ethereum object")
    }
  }


  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install matamask to continue");

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount)

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208', //21000 GWEI
          value: parsedAmount._hex,
        }]
      })

      const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Successfully added ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber());
      window.reload();

    } catch (err) {
      console.log(err);
      throw new Error("No Ethereum object")
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
  }, [])


  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFromData, handelChange, sendTransaction, transactions, isLoading }}>
      {children}
    </TransactionContext.Provider>
  )
}