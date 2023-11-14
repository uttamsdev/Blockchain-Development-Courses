import React, { useContext } from 'react'
import { CertificateContext } from '../context/CertificateContext'
import SearchBar from './SearchBar';

const Welcome = () => {

  const { connectWallet, currentAccount } = useContext(CertificateContext);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          {!currentAccount ? (<>
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              Connect Your <br /> Metamusk Wallet
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              To see and authenticate Certificates on the blockchain.
            </p>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] animate:pulse"
              onClick={connectWallet}
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          </>
          ) : (
            <>
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                You are sucessfull <br /> Connected with CertAuth
              </h1>
              <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                By: <span className='text-teal-300'>{currentAccount}</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Welcome