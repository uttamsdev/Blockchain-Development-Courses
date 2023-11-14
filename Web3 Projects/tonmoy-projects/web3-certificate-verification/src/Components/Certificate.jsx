import React from 'react'
import { shortenAddress } from '../utils/constants';

const Certificate = ({ props }) => {
  const certificate = props.certificate;
  console.log(props.certificate)
  return (
    <div className="mt-10 p-5 bg-[#ffffff7a] rounded-xl md:w-[60vw] w-[90vw]">
      {
        !certificate.candidate_name == "" ? (
          <>
            <h1 className="text-4xl text-center font-bold">{certificate.academi}</h1>
            <h1 className="text-5xl text-center font-bold m-2">Certificate</h1>
            <p className="mt-5 md:text-2xl text-xl p-5 text-justify leading-loose certificateBody">This is certify that <span className="font-bold underline">{certificate.candidate_name}</span> son/daughter of <span className="font-bold underline">{certificate.fathers_name}</span>  graduated from <span className="font-bold underline">{certificate.academi}</span> Degree in <span className="font-bold underline">{certificate.course_name}</span> in <span className="font-bold underline">{certificate.passing_year}</span> with the CGPA of <span className="font-bold underline">{certificate.gred}</span></p>
            <p className="mt-10">Certificate Id: {shortenAddress(certificate.certId)}</p>
            {
              certificate.edited && (
                <p className='text-[#e0420e]'>This certificate has been Corrected</p>
              )
            }
          </>
        ) : (
          <>
            <h1 className='text-[#762307] text-3xl font-bold text-center'>Opps!!! THis Certificate Doesn't exist</h1>
          </>
        )
      }
    </div>
  )
}

export default Certificate