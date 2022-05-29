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
      <div className="din flex gap-20 text-2xl text-white">
        <Link href="/">
          <button className={`${props.active === 'home' && 'text-[#52FF00]'}`}>
            Home
          </button>
        </Link>
        <Link href="/explore">
          <button
            className={`${props.active === 'explore' && 'text-[#52FF00]'}`}
          >
            Explore
          </button>
        </Link>
        <Link href="/create">
          <button
            className={`${props.active === 'create' && 'text-[#52FF00]'}`}
          >
            Create
          </button>
        </Link>
        <Link href="/register">
          <button
            className={`${props.active === 'register' && 'text-[#52FF00]'}`}
          >
            Login / Register
          </button>
        </Link>
        <Link href="/contact">
          <button
            className={`${props.active === 'contact' && 'text-[#52FF00]'}`}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
