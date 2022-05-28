import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Hero: NextPage = () => {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto w-4/5">
        <Navbar active="home" />
        <div className="flex items-center justify-between py-20">
          <div className='relative'>
            <img src="/static/hero_img.png" alt="" />
            <div className='font-indie text-white text-center absolute top-1/3 -right-14 text-2xl leading-6'>
              ADD YOUR <br /> BRAND <br />
              HERE
            </div>
          </div>
          <div className="text-white">
            <div className="din text-9xl">
              PLAY WITH <br /> YOUR SPACE
            </div>
            <div className="font-pop text-2xl font-light">
              Start your journey as a smart advertiser today. <br /> Powered by
              Web 3
            </div>
            <div className="mt-5 flex w-full justify-between gap-10 text-black">
              <Link href={'/'}>
                <button className="w-[50%] rounded-[14px] bg-[#52FF00] py-3 font-pop text-xl font-extrabold">
                  Buy a Space
                </button>
              </Link>
              <Link href={'/'}>
                <button className="w-[50%] rounded-[14px] bg-white py-3 font-pop text-xl font-extrabold">
                  Sell a Space
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
