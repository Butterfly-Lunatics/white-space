import { NextPage } from 'next'
import React from 'react'
import Navbar from './Navbar'


const Hero:NextPage = () => {
  return (
    <div className='w-full bg-black'>
      <Navbar />
      <img src="/static/hero_img.png" alt="" />
    </div>
  )
}

export default Hero