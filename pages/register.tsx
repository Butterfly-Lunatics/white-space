import React from 'react'

type Props = {}

const Index = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 mx-auto flex h-[80vh] w-[80%] -translate-y-1/2 -translate-x-1/2">
      <div className="grid h-full w-2/5 place-items-center bg-black">
        <img src="/static/logo.svg" className="h-[150px]" />
      </div>
      <div className="justify h-full w-3/5 shadow-xl relative">
        <div className="mt-20 text-center font-din text-7xl">REGISTER</div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
          <img src="/static/metamask.svg" />
          <button className="rounded-lg bg-[#f24c4c] px-10 py-3 font-pop text-2xl font-extrabold text-white">
            CONNECT WITH METAMASK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Index
