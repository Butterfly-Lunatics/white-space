import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Hero: NextPage = () => {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto w-4/5">
        <Navbar active='home'/>
        <div className='flex justify-between items-center py-20'>
          <img src="/static/hero_img.png" alt="" />
          <div className='text-white'>
            <div className='font-din text-9xl'>
              PLAY WITH <br /> YOUR SPACE
            </div>
            <div className='font-pop text-2xl font-light'>
              Start your journey as a smart advertiser today. <br/> Powered by Web 3
            </div>
            <div className='text-black flex gap-10 w-full justify-between mt-5'>
              <Link href={'/'}>
                <button className='font-pop font-extrabold text-xl w-[50%] py-3 bg-[#52FF00] rounded-[14px]'>Buy a Space</button>
              </Link>
              <Link href={'/'}>
                <button className='font-pop font-extrabold text-xl w-[50%] py-3 bg-white rounded-[14px]'>Sell a Space</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
