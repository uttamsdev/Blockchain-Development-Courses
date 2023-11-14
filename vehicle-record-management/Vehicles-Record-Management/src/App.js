import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import abi from "./abi.json";
import './App.css';
import swal from 'sweetalert';
const { ethereum } = window;


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [account, setAccount] = useState("");


  const checkIfWalletIsConnected = async() => {
        try {
            if(!ethereum)  return alert("Please install MetaMak.");
            const accounts = await ethereum.request({method: 'eth_accounts'});

            if(accounts.length){ //if accounted connected
            setCurrentAccount(accounts[0]);
            setAccount(accounts[0]);
            console.log("Accountx:",account);
            
        } else {
            console.log("No account found");
        }
        console.log(accounts);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask!!!");
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      throw new Error("No ethereum object found");
    }
  }

    const addVehicle = async (event) => {
      event.preventDefault();
        
        let _name = event.target._name.value;
        let _number = event.target._number.value;
        let _address= event.target._address.value;
        let _model = event.target._model.value;
        let _soldDate = event.target._soldDate.value;
        console.log(_name, _number, _address, _model, _soldDate);
    
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const vehicleContract = new ethers.Contract("0xAAE09c65722c0DE64Ec6cF33c2399102477Ca387", abi, signer);
        const addVehicle = await vehicleContract.addVehicle(_name, _number, _address, _model, _soldDate);
        setIsLoading(true)
        await addVehicle.wait();
        setIsLoading(false)
        swal("Vehicle Added", "Vehicle Successfully Added."+addVehicle.hash, "success");
      
    }

  const getAllVehicles = async (event) => {
    event.preventDefault();
    try {
      if (!ethereum) return alert("Please install MetaMask!!!");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const vehiclesContract = new ethers.Contract("0xAAE09c65722c0DE64Ec6cF33c2399102477Ca387", abi, signer);

      const vehicles = await vehiclesContract.getVehicles();
      setVehicles(vehicles)
      console.log(vehicles);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  }

  
  useEffect(()=>{
    checkIfWalletIsConnected();
  },[])
  return (
    <div className="mh-100 m-auto">
     

      <h1 className='text-primary text-center mb-4  fw-bold  bg-body-secondary p-2 shadow-sm rounded-bottom-pill'>Vehicle Record Management System</h1>
      {
        account==="0xbaf76013d21b94bfb850133b6a62601fa8e2ca1a" ? 
        <form onSubmit={addVehicle} className="w-25 mx-auto shadow-sm p-5  bg-white rounded">
        <input className='form-control' type="text" name='_name' placeholder="Enter Vehicle Buyer Name"/> <br/>
        <input className='form-control' type="text" name='_number' placeholder="Enter Buyer Number"/> <br/>
        <input className='form-control' type="text" name='_address' placeholder="Enter Buyer Address"/> <br/>
        <input className='form-control' type="text" name='_model' placeholder="Enter Vehicle Model"/> <br/>
        <input className='form-control' type="date" name='_soldDate' placeholder="Enter Sold date"/> <br/>
        <button type='submit' className='btn btn-primary w-100'>Add Vehicle</button>
      </form>
      : null
      }
      

      {
        isLoading ? <div className=' d-flex justify-content-center m-3'>
        <div className="spinner-border" role="status" >
          <span className="visually-hidden me-5">Loading...</span>
        </div>
        </div> : null
      }

      <br/>
      <form onSubmit={getAllVehicles} className="d-flex justify-content-center mb-3">
        <button className='btn btn-danger ' type='submit'>Get Record Details</button>
      </form>

      <table className='table table-striped w-50 mx-auto bg-body-tertiary rounded text-center'>
        <thead>
        <tr scope="col">
            <th>Buyer Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Vehicle Model</th>
            <th>Sold Date</th>
        </tr>
        </thead>
       {<tbody>
       {
          vehicles?.map(vehicle => <tr>
            <td>{vehicle.ownerName}</td>
            <td>{vehicle.ownerNumber}</td>
            <td>{vehicle.OwnerAddress}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.soldDate}</td>
          </tr>)
        }
       </tbody> }
      </table>


<br/>
      <div className='d-flex justify-content-center'>
      
      {
        !currentAccount ? <button className='btn btn-warning ' onClick={connectWallet}>Connect Wallet</button> : null
      }
      </div>
    </div>
  );
}

export default App;
