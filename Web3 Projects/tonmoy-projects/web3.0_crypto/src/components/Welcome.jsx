import React, { useContext } from 'react'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

import { TransactionContext } from '../context/TransactionContext'
import { Loader } from './'
import { shortenAddress } from '../utils/shortenAddress'

// const commmonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"

const Input = ({ placeholder, name, type, value, handelChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handelChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "
  />
)

const Welcome = () => {

  const { connectWallet, currentAccount, formData, sendTransaction, handelChange, isLoading } = useContext(TransactionContext)

  const handelSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  }

  return (
    <div className="flex min-h-full w-full justify-center items-center" id='Home'>
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Welcome To BdCrypEx
            <br />
            Send Crypto anywhere
          </h1>
          <p className='text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base '>
            First crypto currency exchange in bangladesh.
            <br />
            Send Crypto anywhere around the world without any charges
          </p>
          {!currentAccount && (
            <button
              type='button'
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 mt-8 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] animate-bounce "
            >
              <p className="text-white text-base font-semibold">Connect Wallet</p>
            </button>
          )}

          {/* <div className="grid sm:grid-cols-3 grid-cols-2 mt-10">
            <div className={`rounded-tl-2xl ${commmonStyles}`}>Reliability</div>
            <div className={commmonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commmonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commmonStyles}`}>Web 3.0</div>
            <div className={commmonStyles}>Low fees</div>
            <div className={`rounded-br-2xl ${commmonStyles}`}>BlockChain</div>
          </div> */}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div className="">
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Etherium
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism" id='Exchange'>
            <Input placeholder="Address to" name="addressTo" type="text" handelChange={handelChange} />
            <Input placeholder="Ammount (ETH)" name="amount" type="number" handelChange={handelChange} />
            <Input placeholder="Keyword (GIF)" name="keyword" type="text" handelChange={handelChange} />
            <Input placeholder="Enter Message" name="message" type="text" handelChange={handelChange} />
            <div className='h-[1px] w-full bg-gray-400 my-2 ' />

            {
              isLoading ? (
                <Loader />
              ) : (
                <button type="button" onClick={handelSubmit} className="
                  text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#2546bd]">
                  Send Now
                </button>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome