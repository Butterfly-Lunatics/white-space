import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar'

type Props = {}

const Index = (props: Props) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <div className="w-full bg-black">
        <div className="relative mx-auto w-4/5">
          <Navbar active="create" />
          <div className="pt-20 pb-28 text-center font-pop text-7xl font-extrabold text-white">
            {'Facebook.com'}
          </div>
          <img
            src="/static/logos/fb.png"
            className="absolute left-1/2 top-full h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full outline outline-8 outline-white"
          />
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>Description</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut
              enim quam, neque commodi labore eum beatae architecto laboriosam
              repudiandae, vero natus quasi. Asperiores doloremque modi maxime,
              magnam quia nihil.
            </div>
          </div>
          <div>
            <div>Price</div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Index
