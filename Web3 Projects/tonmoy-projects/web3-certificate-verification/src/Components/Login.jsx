import React, { useContext, useState } from 'react'
import { CertificateContext } from '../context/CertificateContext';
import { admin } from '../utils/constants';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);

  const { setIsAdmin } = useContext(CertificateContext);
  const { currentAccount } = useContext(CertificateContext);

  const handelLogin = () => {
    const { ethereum } = window;
    if (!ethereum) return alert("Please install Metamusk!!!");
    if (!currentAccount) return alert("Please Connect Metamusk!!!");

    if (admin.email === email) {
      if (admin.password === password) {
        localStorage.setItem('isAdmin', true);
        setIsAdmin(true);
      }
      else {
        setWrong(true);
        alert("Wrong password");
      }
    }
    else {
      setWrong(true);
      alert("Wrong credentials");
    }
  }

  return (
    <div className="md:p-10 px-4 py-8 rounded-xl blue-glassmorphism shadow-xl">
      <h1 className='text-white text-3xl mb-10 text-center' >Login As Admin</h1>
      <label htmlFor="" className='block text-white'>Email:</label>
      <input className='md:w-[400px] w-[300px] p-4 rounded text-white '
        onChange={(e) => setEmail(e.target.value)}
        type="eminl" placeholder='Enter The Email' />
      <label htmlFor="" className='block text-white'>Password:</label>
      <input className='md:w-[400px] w-[300px] p-4 rounded text-white '
        onChange={(e) => setPassword(e.target.value)}
        type="password" placeholder='Enter The Password' />
      <div className="w-full flex items-center justify-center mt-10">
        <button
          onClick={handelLogin}
          className='px-5 py-2 bg-blue-500 rounded hover:bg-blue-700 animate-pulse'>
          <h1 className="text-white text-2xl">Login</h1>
        </button>
      </div>
      {
        wrong && (<h1 className='text-red-500 mt-5 animate-pulse text-xl font-bold text-center'>Wrong Credentials. Please try again!!</h1>)
      }
    </div>
  )
}

export default Login