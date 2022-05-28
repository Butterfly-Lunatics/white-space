import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Logo } from '../Utils/GlobalImports'

const Navbar: React.FC = () => {
  return (
    <div className="mx-auto w-4/5 bg-black text-white flex items-center justify-between">
      <Image src={Logo} />
      <div className='text-white flex gap-20 font-din text-2xl'>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Explore</Link>
          <Link href={"/"}>Create</Link>
          <Link href={"/"}>Login / Register</Link>
      </div>
    </div>
  )
}

export default Navbar
