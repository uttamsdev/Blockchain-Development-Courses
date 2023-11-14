import React, { useContext, useEffect, useState } from 'react'
import { CertificateContext } from '../context/CertificateContext'

const Table = () => {
  const { getAllCertificates, allCertificates, filterEditedCertificates } = useContext(CertificateContext)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    getAllCertificates();
  }, [])

  const toggleEdit = () => {
    if (toggle) {
      getAllCertificates()
    } else {
      filterEditedCertificates()
    }
    setToggle(!toggle)
  }

  return (
    <div className="md:p-10 px-4 py-8 rounded-xl blue-glassmorphism shadow-xl mt-10">
      <div className="w-full flex justify-end mb-5">
        {
          !toggle ? (
            <button
              onClick={toggleEdit}
              className="bg-[#2952e3] text-white hover:scale-110 py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Filter Edited
            </button>
          ) : (
            <button
              onClick={toggleEdit}
              className="bg-[#2952e3] text-white hover:scale-110 py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Show All
            </button>
          )
        }
      </div>
      <table className='md:w-[60vw] w-[90vw]  p-2 text-white overflow-scroll'>
        <thead className=''>
          <tr>
            <th className='py-5'>Hash</th>
            <th className='py-5'>Name</th>
            <th className='py-5'>Institute</th>
            <th className='py-5'>Degree</th>
            <th className='py-5'>Grade</th>
          </tr>
        </thead>
        <tbody className='ease-in-out'>
          {
            allCertificates.slice(0).reverse().slice(0, 10).map((item) => (
              <tr key={item.certId} className='hover:scale-110 ease-in-out hover:shadow-xl hover:bg-[#2be2bac5]'>
                <td className='flex-1  p-2 overflow-hidden'>{item.certId}</td>
                <td className='flex-1  p-2 overflow-hidden'>{item.candidate_name}</td>
                <td className='flex-1  p-2 overflow-hidden'>{item.academi}</td>
                <td className='flex-1  p-2 overflow-hidden'>{item.course_name}</td>
                <td className='flex-1  p-2 overflow-hidden'>{item.gred}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div >
  )
}

export default Table