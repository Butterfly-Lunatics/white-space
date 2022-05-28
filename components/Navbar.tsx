import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Logo } from '../Utils/GlobalImports'

type Props = {
  active: string
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <div className="mx-auto flex w-full items-center justify-between bg-black pt-10 text-white">
      <Image src={Logo} />
      <div className="flex gap-20 font-din text-2xl text-white">
        <Link href={'/'}>
          <div className={`${props.active === 'home' && 'text-[#52FF00]'}`}>
            Home
          </div>
        </Link>
        <Link href={'/'}>
          <div className={`${props.active === 'explore' && 'text-[#52FF00]'}`}>
            Explore
          </div>
        </Link>
        <Link href={'/'}>
          <div className={`${props.active === 'create' && 'text-[#52FF00]'}`}>
            Create
          </div>
        </Link>
        <Link href={'/'}>
          <div className={`${props.active === 'register' && 'text-[#52FF00]'}`}>
            Login / Register
          </div>
        </Link>
        <Link href={'/'}>
          <div className={`${props.active === 'contact' && 'text-[#52FF00]'}`}>
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
