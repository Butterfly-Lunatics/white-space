import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}

export default Home
