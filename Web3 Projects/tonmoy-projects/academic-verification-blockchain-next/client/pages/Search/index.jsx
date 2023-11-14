import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"


const index = () => {
  return (
    <>
      <div className='min-h-screen min-w-screen gradient-bg-transactions'>
        <Navbar />
      </div>
      <Footer />
    </>
  )
}

export default index