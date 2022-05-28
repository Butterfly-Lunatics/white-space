import React from 'react'

type Props = {
    children: React.ReactNode
}

const Wrapper:React.FC<Props> = (props: Props) => {
  return (
    <div className='w-[]'>
        {props.children}
    </div>
  )
}

export default Wrapper