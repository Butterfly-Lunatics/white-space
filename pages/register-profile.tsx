import Router from 'next/router'
import React, { useEffect } from 'react'
import { useMoralisFile } from 'react-moralis'
import useAuth from '../hooks/useAuthentication'

const Index = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const usernameRef = React.useRef<HTMLInputElement>(null)
  const { saveFile } = useMoralisFile()
  const [{ user }] = useAuth()

  const getPicture = async () => {
    const file = inputRef.current?.files?.[0]!
    const image = await saveFile(file.name, file, { saveIPFS: false })
    return image!.url()
  }

  return (
    <div className="absolute top-1/2 left-1/2 mx-auto flex h-[80vh] w-[80%] -translate-y-1/2 -translate-x-1/2">
      <div className="grid h-full w-2/5 place-items-center bg-black">
        <img src="/static/logo.svg" className="h-[150px]" />
      </div>
      <div className="justify relative h-full w-3/5 shadow-xl">
        <div className="din mt-20 text-center text-7xl">Hello, wallet add</div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10">
          <div className="flex w-full flex-col gap-3 text-3xl">
            <label className="text-left font-pop">Name</label>
            <input
              className="rounded-lg border-2 border-black"
              ref={usernameRef}
            />
            <label className="text-left font-pop">Profile Pic</label>
            <input
              type="file"
              accept="image/*"
              className="invisible absolute"
              ref={inputRef}
            />
            <div
              className="w-full rounded-xl bg-black py-3 text-center font-pop text-lg text-white hover:cursor-pointer"
              onClick={() => inputRef.current?.click()}
            >
              {!inputRef.current?.files?.[0]
                ? 'UPLOAD A PROFILE PIC'
                : inputRef.current?.files?.[0].name?.substring(0, 20) + '...'}
            </div>
          </div>
          <button
            className="w-full rounded-lg bg-[#f24c4c] py-3 font-pop text-2xl font-extrabold text-white"
            onClick={async () => {
              console.log('updating records')
              const data = {
                username: usernameRef.current?.value,
                profilePic: await getPicture(),
              }
              user?.set('userData', data)
              await user?.save()
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Index
