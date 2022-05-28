import React from 'react'

type Props = {
  color: string
  logo: string
  heading: string
  subheading: string
}

const Card = (props: Props) => {
  return (
    <div className="flex w-full min-w-[292px] flex-col items-center rounded-xl border-2 shadow-xl">
      <div
        className="h-20 w-full rounded-t-xl relative"
        style={{
          backgroundColor: props.color,
        }}
      >
        <img src={`/static/logos/${props.logo}`} className="h-[50px] absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 rounded-full outline outline-8 outline-white outline-offset-0 bg-white" alt="" />
      </div>
      <div className="font-pop text-2xl font-extrabold uppercase mt-[40px]">
        {props.heading}
      </div>
      <div className="px-5 pt-3 pb-5 text-center font-mont uppercase text-[#787878] leading-5 text-sm font-medium">
        {props.subheading}
      </div>
    </div>
  )
}

export default Card
