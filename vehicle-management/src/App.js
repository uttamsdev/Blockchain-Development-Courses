//contract address: 0x311EAc20935625482fB4ECF406C0046b65Aa9584 0x364273743a19eb68EBB9d901c0707994b50E5b96
import { useState } from 'react';
import { ethers } from "ethers";
import abi from "./abi.json";
import './App.css';
const { ethereum } = window;


function App() {
  let event;
  const [contractInfo, setContractInfo] = useState({
    address: "-",
    balance: []
  });
  const [isLoading, setIsLoading] = useState(false);

  const [currentAccount, setCurrentAccount] = useState("");

  // const [vehicles, setVehicles] = useState({ _name: '', _owner: '', _number: '', _license: ''});
  const [vehicles, setVehicles] = useState([]);
  const [metaMaskConnected, setMetaMaskConnected] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(data.get("address"), abi, provider);

    const balance = await erc20.getBalance();

    setContractInfo({
      address: data.get("address"),
      balance: balance
    });
    event = true;
    console.log(contractInfo.balance);
    console.log(event);
  };

  const checkIfWalletConnected = async () => {
    // First Check if user has Metamask on his/her system
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // setMetaMaskInstalled(true);
        // return true;
      } else {
        console.log("No account available");
        // setMetaMaskInstalled(false);
        // return false;

      }
      console.log(accounts)

    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object available");
    }
  }
  // const check = checkIfWalletConnected().then(result => console.log(result));
  // console.log("check", check);
  // Function to Connect the accounts
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
      setMetaMaskConnected(false);
    } catch (err) {
      throw new Error("No ethereum object found");
    }
  }

    // Add New Certificate
    const addVehicle = async (event) => {
      event.preventDefault();
        
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        // const {_name, _owner, _number, _license } = formData;
        let _name = event.target._name.value;
        let _owner = event.target._owner.value;
        let _number= event.target._number.value;
        let _license = event.target._license.value;
        console.log(_name, _owner, _number, _license);
    
        const vehicleContract = new ethers.Contract("0xbe17787a2e408736a557a5a83f73a5f9097be3d5", abi, signer);
      
        const vehicleHash = await vehicleContract.addVehicle(_name, _owner, _number, _license);
        setIsLoading(true)
        console.log(`Loading - ${vehicleHash.hash}`);
        await vehicleHash.wait();
        setIsLoading(false)
        console.log(`Success - ${vehicleHash.hash}`);
        alert("Vehicle Successfully Added.: " + vehicleHash.hash);
      
    }

      // Get all certificates
  const getAllVehicles = async (event) => {
    event.preventDefault();
    try {
      if (!ethereum) return alert("Please install Metamusk!!!");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const vehiclesContract = new ethers.Contract("0xbe17787a2e408736a557a5a83f73a5f9097be3d5", abi, signer);

      const vehicles = await vehiclesContract.getVehicles();
      // setAllCertificates(certificates);
      setVehicles(vehicles)
      console.log(vehicles);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  }

  
  return (
    <div className="w-25 m-auto">
     

      <h1 className='text-primary text-center m-3 fw-bold'>Vehicle Management</h1>
      <form onSubmit={addVehicle}>
        <input className='form-control' type="text" name='_name' placeholder="Enter name"/> <br/>
        <input className='form-control' type="text" name='_owner' placeholder="Enter Owner"/> <br/>
        <input className='form-control' type="text" name='_number' placeholder="Enter Number"/> <br/>
        <input className='form-control' type="text" name='_license' placeholder="Enter License"/> <br/>
        <button type='submit' className='btn btn-primary w-100'>Add Vehicle</button>
      </form>


      <br/>
      <form onSubmit={getAllVehicles} className="d-flex justify-content-center mb-3">
        {/* <input name="address" placeholder='Enter contract address'/> */}
        <button className='btn btn-danger' type='submit'>Get Contract Details</button>
      </form>

      {/* <div>
        {contractInfo.balance ? contractInfo?.balance?.map(number => <><h1>{number}</h1></>) : null}
      </div> */}

      <table className='table table-striped'>
        <thead>
        <tr scope="col">
            <th>Name</th>
            <th>Owner</th>
            <th>Number</th>
            <th>License</th>
        </tr>
        </thead>
       <tbody>
       {
          vehicles?.map(vehicle => <tr>
            <td>{vehicle.name}</td>
            <td>{vehicle.owner}</td>
            <td>{vehicle.number}</td>
            <td>{vehicle.license}</td>
          </tr>)
        }
       </tbody>
      </table>


<br/>
      <div className='d-flex justify-content-center'>
      
      {
        metaMaskConnected ? <button className='btn btn-warning ' onClick={connectWallet}>Connect Wallet</button> : null
      }
      </div>
      
    </div>
  );
}

export default App;
