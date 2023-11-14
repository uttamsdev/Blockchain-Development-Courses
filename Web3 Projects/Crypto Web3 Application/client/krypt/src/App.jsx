import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { Navbar, Welcome, Footer, Services, Transactions, Home } from './components'


function App() {
  return (
    <div className='min-h-screen'>
      {/* <home></home> */}
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/transactions' element={<Transactions></Transactions>}></Route>
        {/* <Route path='/transactions' element={<Transactions></Transactions>}></Route> */}
      </Routes>
    {/* <div className='gradient-bg-welcome'>
      <Navbar/>
      <Welcome/>
    </div> */}
      {/* <Services/>
      <Transactions/>
      <Footer/> */}
    </div>
  )
}

export default App
