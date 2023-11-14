import React, { createContext, useEffect, useState } from 'react'
import { ether, ethers } from 'ethers';
import { contractAddress, contractABI } from '../utils/constants'


export const CertificateContext = createContext();


const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const certificateContract = new ethers.Contract(contractAddress, contractABI, signer);

  // console.log({
  //   provider,
  //   signer,
  //   certificateContract
  // })

  return certificateContract;
}


export const CertificateProvider = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({ _candidate_name: '', _fathers_name: '', _academi: '', _course_name: '', _passing_year: '', _grade: '', _edited: false });
  const [editformData, seteditFormData] = useState({ _old: '', _candidate_name: '', _fathers_name: '', _academi: '', _course_name: '', _passing_year: '', _grade: '', _edited: false });
  const [isLoading, setIsLoading] = useState(false);
  const [certificateCount, setCertificateCount] = useState(localStorage.getItem('certificateCount'));
  const [allCertificates, setAllCertificates] = useState([]);
  const [editedChain, setEditedChain] = useState([]);
  const [search, setSearch] = useState("");

  // To get Data From form
  const handelChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  }

  // To get Data From form
  const handelEditChange = (e, name) => {
    seteditFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  }

  const checkIfWalletConnected = async () => {
    // First Check if user has Metamask on his/her system
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log("No account available");
      }
      console.log(accounts)
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object available");
    }
  }

  // Function to Connect the accounts
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      throw new Error("No ethereum object found");
    }
  }

  // Add New Certificate
  const addNewCertificate = async () => {
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");
      const { _candidate_name, _fathers_name, _academi, _course_name, _passing_year, _grade, _edited } = formData;
      const certificateContract = getEthereumContract();
      const certificateHash = await certificateContract.generateCertificate(_candidate_name, _fathers_name, _academi, _course_name, _passing_year, _grade, _edited);
      setIsLoading(true)
      console.log(`Loading - ${certificateHash.hash}`);
      await certificateHash.wait();
      setIsLoading(false)
      console.log(`Success - ${certificateHash.hash}`);
      const certificateCount = await certificateContract.getCertificateCount();
      setCertificateCount(certificateCount.toNumber());
      alert("Sucessfull added certificate: " + certificateHash.hash);
      getAllCertificates()
      getEditedChain()
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  }

  // Edit Certificate
  const editcertificate = async () => {
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");
      const { _old, _candidate_name, _fathers_name, _academi, _course_name, _passing_year, _grade } = editformData;
      const certificateContract = getEthereumContract();
      const certificateHash = await certificateContract.editCertificate(_old, _candidate_name, _fathers_name, _academi, _course_name, _passing_year, _grade);
      setIsLoading(true)
      console.log(`Loading - ${certificateHash.hash}`);
      await certificateHash.wait();
      setIsLoading(false)
      console.log(`Success - ${certificateHash.hash}`);
      console.log(certificateHash)
      alert("Sucessfull added certificate: " + certificateHash.hash);
      getAllCertificates();
      getEditedChain();
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  }

  // Get all certificates
  const getAllCertificates = async () => {
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");
      const certificateContract = getEthereumContract();
      const certificates = await certificateContract.getAllData();
      setAllCertificates(certificates);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  }

  // Get Edit chain
  const getEditedChain = async () => {
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");
      const certificateContract = getEthereumContract();
      const editedChain = await certificateContract.getEditedChain();
      setEditedChain(editedChain);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
      return alert("Please Connect Metamusk")
    }
  }

  // Filter Edited certificates from allCertificates
  const filterEditedCertificates = async () => {
    const filteredArray = allCertificates.filter(array => !editedChain.some(filter => filter.oldAdd === array.certId));
    setAllCertificates(filteredArray);
    return console.log({ filteredArray, allCertificates, editedChain })
  }

  // Check If Exist On Edit chain
  const checkIfExistOnEditChain = async () => {
    let exist = false;
    let address = search;
    editedChain.map((item) => {
      if (item.oldAdd == search) {
        exist = true;
        address = item.newAdd;
      }
    })
    return address;
  }

  // Get certificate Using Hash
  const getCertificate = async () => {
    try {
      let newAdd = await checkIfExistOnEditChain();
      // console.log(newAdd);
      if (!ethereum) return alert("Please install Metamusk!!!");
      if (!currentAccount) return alert("Please Connet Metamush First");
      const certificateContract = getEthereumContract();
      setIsLoading(true)
      // const certificate = await certificateContract.getData(search);
      const certificate = await certificateContract.getData(newAdd);
      setIsLoading(false)
      return certificate
    } catch (err) {
      console.log(err);
      alert("Does not exist")
      setIsLoading(false)
      throw new Error("No ethereum object found");
    }
  }

  // Get Login Data
  const getIsAdminData = () => {
    setIsAdmin(localStorage.getItem("isAdmin"))
  }


  useEffect(() => {
    checkIfWalletConnected();
    getAllCertificates();
    getEditedChain();
    getIsAdminData();
  }, []);


  return (
    <CertificateContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handelChange, isAdmin, setIsAdmin, addNewCertificate, isLoading, allCertificates, setSearch, getCertificate, handelEditChange, editcertificate, editformData, getAllCertificates, filterEditedCertificates }}>
      {children}
    </CertificateContext.Provider>
  )
}