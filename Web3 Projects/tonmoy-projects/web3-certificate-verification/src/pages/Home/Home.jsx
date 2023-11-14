import React from 'react'
import SearchBar from '../../Components/SearchBar'

const Home = () => {
  return (
    <div className='w-full min-h-screen gradient-bg-main flex flex-col items-center justify-start py-20'>
      <h1 className="text-white text-2xl text-center">Serch / Authenticate Certificate</h1>
      <SearchBar />
    </div>
  )
}

export default Home