import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Heading from '../components/Heading'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Banner />
      <Heading text="LATEST SPACES" />
      <Cards />
    </div>
  )
}

export default Home
