import React from 'react'

type Props = {
  color: string
  logo: string
  heading: string
  subheading: string
  isSold?: boolean
}

const Card = (props: Props) => {
  return (
    <div className="flex w-full min-w-[292px] flex-col items-center rounded-xl border-2 shadow-xl">
      <div
        className="relative h-20 w-full rounded-t-xl"
        style={{
          backgroundColor: props.color,
        }}
      >
        <img
          src={
            props.logo.startsWith('http')
              ? props.logo
              : `/static/logos/${props.logo}`
          }
          className="absolute left-1/2 top-full h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white outline outline-8 outline-offset-0 outline-white"
          alt=""
        />
      </div>
      <div className="mt-[40px] font-pop text-2xl font-extrabold uppercase">
        {props.heading}
      </div>
      <div className="px-5 pt-3 pb-5 text-center font-mont text-sm font-medium uppercase leading-5 text-[#787878]">
        {props.subheading}
      </div>
    </div>
  )
}

export default Card
