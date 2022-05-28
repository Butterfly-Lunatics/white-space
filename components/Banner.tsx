import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className="relative mx-auto w-4/5 font-din aspect-banner overflow-hidden my-14">
      <img src="/static/cube.png" className="absolute -z-10 w-full" />
      <div className="flex h-full w-full items-center text-[5rem] text-white ml-14">
        HAVE FUN WITH YOUR&nbsp;
        <span className='text-[#da2020]'>S</span>
        <span className='text-[#0951dd]'>P</span>
        <span className='text-[#d67322]'>A</span>
        <span className='text-[#195c50]'>C</span>
        <span className='text-[#c74683]'>E</span>
        <span className='text-[#0288d6]'>S</span>
      </div>
    </div>
  )
}

export default Banner