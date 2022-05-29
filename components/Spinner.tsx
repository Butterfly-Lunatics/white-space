import React from 'react'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-white absolute z-10 text-black">
      <div
        className="spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
