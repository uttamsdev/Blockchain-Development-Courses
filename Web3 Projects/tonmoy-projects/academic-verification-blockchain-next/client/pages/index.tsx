import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="m-0 p-0 min-h-screen min-w-screen bg-black gradient-bg-welcome">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  )
}

export default Home
