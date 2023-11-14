import React, { useContext } from 'react'
import Loader from '../../Components/Loader'
import { CertificateContext } from '../../context/CertificateContext'

const Add = () => {
  const { handelChange, formData, addNewCertificate, isLoading } = useContext(CertificateContext)

  const addCertificate = (e) => {
    const { _candidate_name, _fathers_name, _academi, _course_name, _passing_year, _grade, _edited } = formData;
    // console.log(candidate_name, fathers_name, academi, course_name, passing_year, gred)
    e.preventDefault();
    const certificate = addNewCertificate();
    console.log(certificate)
  }

  return (
    <div className='w-full min-h-screen gradient-bg-main flex items-center justify-center py-20'>
      <div className="md:p-10 px-4 py-8 rounded-xl blue-glassmorphism shadow-xl">
        <h1 className='text-white text-3xl mb-10 text-center' >Add New Certificate</h1>
        <label htmlFor="" className='block text-white'>Student's Name:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='_candidate_name' onChange={(e) => handelChange(e, e.target.name)} placeholder='Name Of The Student' />

        <label htmlFor="" className='block text-white'>Father's Name:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='_fathers_name' onChange={(e) => handelChange(e, e.target.name)} placeholder='Students fathes name' />

        <label htmlFor="" className='block text-white'>University:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='_academi' onChange={(e) => handelChange(e, e.target.name)} placeholder='Name Of The Organaization' />

        <label htmlFor="" className='block text-white'>Course Name:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='_course_name' onChange={(e) => handelChange(e, e.target.name)} placeholder='Name Of The Course' />

        <label htmlFor="" className='block text-white'>Year Of Graduation:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='_passing_year' onChange={(e) => handelChange(e, e.target.name)} placeholder='Graduation Year' />

        <label htmlFor="" className='block text-white'>Obtained Grade:</label>
        <input className='md:w-[500px] w-[300px] p-4 rounded text-white '
          type="text" name='_grade' onChange={(e) => handelChange(e, e.target.name)} placeholder='Overall Grade Obtained By The Student' />

        {
          !isLoading ? (
            <div className="w-full flex items-center justify-center mt-10">
              <button
                onClick={addCertificate}
                className='px-5 py-2 bg-blue-500 rounded hover:bg-blue-700 animate-pulse'>
                <h1 className="text-white text-2xl">Add Now</h1>
              </button>
            </div>
          ) : (
            <Loader />
          )
        }
      </div>
    </div>
  )
}

export default Add