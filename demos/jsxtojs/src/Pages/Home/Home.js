import React from 'react'
import Navbar from './Navbar';
import Welcome from './Welcome';
import Services from "./Services"
import Footer from './Footer';
import Transaction from './Transaction';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <div>
        <Services/>
        <Transaction/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home;