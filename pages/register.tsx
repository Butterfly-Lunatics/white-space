import Router from 'next/router'
import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis'

const Index = () => {
  const { authenticate, isAuthenticated } = useMoralis()
  useEffect(() => {
    if (isAuthenticated) Router.replace('/dashboard')
  }, [isAuthenticated])

  return (
    <div className="absolute top-1/2 left-1/2 mx-auto flex h-[80vh] w-[80%] -translate-y-1/2 -translate-x-1/2">
      <div className="grid h-full w-2/5 place-items-center bg-black">
        <img src="/static/logo.svg" className="h-[150px]" />
      </div>
      <div className="justify relative h-full w-3/5 shadow-xl">
        <div className="din mt-20 text-center text-7xl">REGISTER</div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10">
          <img src="/static/metamask.svg" />
          <button
            className="rounded-lg bg-[#f24c4c] px-10 py-3 font-pop text-2xl font-extrabold text-white"
            onClick={() => authenticate()}
          >
            CONNECT WITH METAMASK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Index
