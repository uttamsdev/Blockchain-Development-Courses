//contract address: 0x6A0E295C10E59898975e0D4c739f26F60D3f9F0E
import { useState } from 'react';
import { ethers } from "ethers";
import abi from "./abi.json";
import './App.css';

function App() {
  const [contractInfo, setContractInfo] = useState({
    address: "-",
    name: "-",
    age: "-",
    gender: "-"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(data.get("address"), abi, provider);

    const name = await erc20.name();
    const age = await erc20.age();
    const gender = await erc20.gender();

    setContractInfo({
      address: data.get("address"),
      name,
      age,
      gender
    });
  };

  console.log(contractInfo.name);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="address" placeholder='Enter contract address'/>
        <button type='submit'>Get Contract Details</button>
      </form>

      <div>
        <h1>Name: {contractInfo?.name}</h1>
        <h2>Age: {contractInfo?.age}</h2>
        <h3>Gender: {contractInfo?.gender}</h3>
      </div>
    </div>
  );
}

export default App;
