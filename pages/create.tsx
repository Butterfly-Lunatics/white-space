import React, { LegacyRef, MouseEventHandler, useRef, useState } from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const Index = (props: Props) => {
  const r_title = useRef<HTMLInputElement | null>(null)
  const r_desc = useRef<LegacyRef<HTMLAreaElement> | null>(null)
  const r_price = useRef<HTMLInputElement>(null)
  const r_image = useRef<HTMLInputElement>(null)
  const r_finalimage = useRef<HTMLImageElement>(null)

  const [imgName, setImgName] = useState('click to add screenshot of the space')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const title = r_title.current?.value
    const desc = (r_desc.current as any).value
    const price = r_price.current?.value
    const image = r_image.current?.files![0]

    console.log(title, desc, price, image)
  }

  const imageHandler = () => {
    setImgName(
      !r_image.current?.files?.[0]
        ? 'click to add screenshot of the space'
        : r_image.current?.files?.[0].name?.substring(0, 20) +
            (r_image.current?.files?.[0].name.length > 20 ? '...' : '')
    )
    if (imgName === 'click to add screenshot of the space') return
    r_finalimage.current!.src = URL.createObjectURL(r_image.current!.files![0])
  }

  return (
    <div className="relative w-full">
      <div className="w-full bg-black">
        <div className="relative mx-auto w-4/5">
          <Navbar active="create" />
          <div className="pt-20 pb-28 text-center font-pop text-7xl font-extrabold text-white">
            Create
          </div>
          <img
            src="/static/logos/fb.png"
            className="absolute left-1/2 top-full h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-8 outline-white"
          />
        </div>
      </div>
      <div className="mx-auto flex w-4/5 items-center gap-10 px-10 pt-28">
        <form className="flex w-1/2 flex-col gap-4">
          <div className="din flex flex-col gap-2 text-3xl">
            <label>Title</label>
            <input
              className="w-full rounded-lg border-2 border-black p-2 text-xl"
              ref={r_title}
            />
          </div>
          <div className="din flex flex-col gap-2 text-3xl">
            <label>Description</label>
            <textarea
              className="w-full rounded-lg border-2 border-black p-2 text-xl"
              ref={r_desc}
            />
          </div>
          <div className="din flex flex-col gap-2 text-3xl">
            <label>Price</label>
            <input
              type={'number'}
              className="w-full rounded-lg border-2 border-black p-2 text-xl"
              ref={r_price}
            />
          </div>
          <input
            type={'file'}
            className="invisible"
            ref={r_image}
            onChange={imageHandler}
          />
        </form>
        <div
          className="din relative h-[350px] w-1/2 rounded-lg border-2 border-black bg-rose-50 text-4xl hover:cursor-pointer"
          onClick={() => r_image.current?.click()}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              display:
                imgName === 'click to add screenshot of the space'
                  ? 'none'
                  : 'block',
            }}
          >
            {imgName}
          </div>
          <img
            className="h-full w-full rounded-lg object-cover"
            ref={r_finalimage}
          />
        </div>
      </div>
      <button
        className="absolute left-1/2 mt-10 w-1/5 -translate-x-1/2 rounded-lg bg-[#52ff00] py-3 font-pop text-2xl font-extrabold"
        onClick={handleSubmit}
        type="button"
      >
        SUBMIT
      </button>
    </div>
  )
}

export default Index
