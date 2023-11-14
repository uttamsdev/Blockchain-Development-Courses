import Link from "next/link"


const Welcome = () => {

  return (
    <div className="flex flex-col min-h-screen w-full justify-start items-center" id='Home'>
      <div className="flex min-h-full w-full mf:flex-row flex-col items-center justify-center md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Welcome To BdVerify
            <br />
            Verifu Academic Cirtificates
          </h1>
          <p className='text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base '>
            Verify the authecticity of cirticates
            <br />
            Verify authenticity of lisences
          </p>

        </div>

        {/* Buttons */}
        <div className="text-white mt-10 ">
          <Link href="/Search">
            <button className="bg-blue-700 p-5 rounded-xl hover:bg-sky-500 text-xl mr-10">Check Authenticity</button>
          </Link>
          <Link href="/Admin" className="">
            <button className="bg-blue-700 p-5 rounded-xl hover:bg-sky-500 text-xl mt-10">Admin Login</button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Welcome