import React from 'react'
import { useNavigate } from 'react-router-dom';
import Transactions from './Transaction';

const Home = () => {
  const navigate = useNavigate();

  const clickButton = () => {
    navigate("/transactions");
  }
  return (
    <div>
      <h1>This is home section</h1>
      <button onClick={clickButton}>Click</button>
      {/* <Transactions/> */}
    </div>
  )
}

export default Home;