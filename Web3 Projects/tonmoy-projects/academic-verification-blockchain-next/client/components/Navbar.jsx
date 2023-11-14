import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

const NavbarItem = ({ title, classProps }) => {
  return (
    (title == "Home") ? (
      <Link href='/'>
        <li className={`mx-4 cursor-pointer ${classProps}`}>
          {title}
        </li>
      </Link>
    ) :
      (
        <Link href={`/${title}`}>
          <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
          </li>
        </Link>
      )
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <h1 className='text-white text-3xl md:text-5xl'>BdVerify</h1>
        <h2 className='text-white text-base'>Verify Academic Cirtifacates</h2>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Home", "Search", "Admin"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <Link href="/admin">
          <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
            Login
          </li>
        </Link>
      </ul>

      <div className="flex relative ">
        {toggleMenu ?
          <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <ul
            className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in
            '
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Home", "Search", "Admin"].map((item, index) => (
              <NavbarItem key={item + index} title={item} classProps="my-2 text-lg " />
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar