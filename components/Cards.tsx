import React from 'react'
import Card from './Card'

type Props = {}

const Cards = (props: Props) => {
  return (
    <div className="mx-auto mt-10 grid w-3/5 grid-cols-3 gap-8">
      <Card
        color="#385899"
        logo="fb.png"
        heading="facebook.com"
        subheading="Connect with friends, family and other people you know. Share photos and videos, send messages and get updates."
      />
      <Card
        color="#ea4335"
        logo="gg.png"
        heading="google.com"
        subheading="Search the world's information, including webpages, images, videos and more. Google has many special features to help you."
      />
      <Card
        color="#021e66"
        logo="sv.png"
        heading="strideventures.in"
        subheading="Stride Ventures provides comprehensive credit solutions to new-age businesses in India. "
      />
      <Card
        color="#385899"
        logo="fb.png"
        heading="facebook.com"
        subheading="Connect with friends, family and other people you know. Share photos and videos, send messages and get updates."
      />
      <Card
        color="#ea4335"
        logo="gg.png"
        heading="google.com"
        subheading="Search the world's information, including webpages, images, videos and more. Google has many special features to help you."
      />
      <Card
        color="#021e66"
        logo="sv.png"
        heading="strideventures.in"
        subheading="Stride Ventures provides comprehensive credit solutions to new-age businesses in India. "
      />
    </div>
  )
}

export default Cards
