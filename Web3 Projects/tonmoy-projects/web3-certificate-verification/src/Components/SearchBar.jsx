import React, { useContext, useState } from 'react'
import { CertificateContext } from '../context/CertificateContext'
import Certificate from './Certificate'
import Loader from './Loader'

const SearchBar = () => {
  const { setSearch, getCertificate, isLoading, allCertificates } = useContext(CertificateContext)
  const [certificate, setCertificate] = useState()
  const doSearch = async () => {
    const Rcertificate = await getCertificate();
    setCertificate(Rcertificate)
  }
  // console.log(allCertificates)
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <input className='md:w-[500px] w-[300px] p-4 rounded-full text-white'
          type="text" name='candidate_name' placeholder='Enter The Hash'
          onChange={(e) => setSearch(e.target.value)}
        />
        {
          !isLoading ? (
            <button
              onClick={doSearch}
              className='bg-blue-500 hover:bg-blue-700 text-white text-xl py-2 px-5 rounded-full'>Serch Now
            </button>
          ) : (
            <Loader />
          )
        }
      </div>
      {certificate && (
        <Certificate props={{ certificate }} />
      )}
    </>
  )
}

export default SearchBar