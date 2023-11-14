import React from 'react'
import dolon from '../images/dolon.jpg'
import me from '../images/me.jpg'
import shihab from '../images/shihab.jpg'

const CardStyle = ""

const Footer = () => {
  return (
    <div className="w-full gradient-bg-welcome min-h-screen flex flex-col items-center justify-center p-5 gap-10" id='About'>
      <h1 className='text-white text-center text-5xl '>Developed By</h1>
      <div className="flex w-full justify-center flex-col gap-10 md:flex-row">

        <a href="https://tonmoy.itstorm.us/" target='_blank'>
          <div className={`${CardStyle} flex flex-col items-center p-2 gap-2 border rounded-md hover:shadow-2xl hover:scale-110 transition-all developer-card  cursor-pointer`}>
            <img src="https://github.com/tonmoy5/crypto_exchange_web3/blob/master/client/images/me.jpg?raw=true" alt="Tonmoy" className="h-40 w-40 rounded-full animate-bounce shadow-2xl" />
            <h2 className="text-white text-center text-2xl">Md Tanzinul Kabir Tonmoy</h2>
            <h2 className="text-white text-center">Phone: 01889983314</h2>
            <h2 className="text-white text-center">Email: tonmoy52532@gmail.com</h2>
          </div>
        </a>

        <div className={`${CardStyle} flex flex-col items-center p-2 gap-2 border rounded-md hover:shadow-2xl hover:scale-110 transition-all developer-card `}>
          <img src="https://github.com/tonmoy5/crypto_exchange_web3/blob/master/client/images/shihab.jpg?raw=true" alt="Tonmoy" className="h-40 w-40 rounded-full animate-bounce shadow-2xl" />
          <h2 className="text-white text-center text-2xl">Saifur Rahman Shihab</h2>
          <h2 className="text-white text-center">Phone: 01995169630</h2>
          <h2 className="text-white text-center">Email: </h2>
        </div>

        <div className={`${CardStyle} flex flex-col items-center p-2 gap-2 border rounded-md hover:shadow-2xl hover:scale-110 transition-all developer-card `}>
          <img src="https://github.com/tonmoy5/crypto_exchange_web3/blob/master/client/images/dolon.jpg?raw=true" alt="Tonmoy" className="h-40 w-40 rounded-full animate-bounce shadow-2xl" />
          <h2 className="text-white text-center text-2xl">Riya Farhana Dolon</h2>
          <h2 className="text-white text-center">Phone: </h2>
          <h2 className="text-white text-center">Email: riyafarhana09@gmail.com</h2>
        </div>
      </div>
      <h2 className='text-white text-center text-base pt-5'>
        This project is developed as a university reasearch project
        <br />
        Under the supervision of
        <br />
        <span className='text-[#29e3b8] text-xl'>Mr. Md. Ashfaqul Islam sir</span>
        <br />
        © 2022
      </h2>
    </div >
  )
}

export default Footer