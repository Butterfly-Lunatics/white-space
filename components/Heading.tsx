import React from 'react'

type Props = {
  text: string
}

const Heading: React.FC<Props> = (props: Props) => {
  return <div className='text-center font-3xl font-extrabold font-pop text-7xl'>{props.text}</div>
}

export default Heading
