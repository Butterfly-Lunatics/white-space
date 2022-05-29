import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useMoralisQuery } from 'react-moralis'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'

type Props = {}

type Card = {
  color: string
  logo: string
  heading: string
  subheading: string
}

const DATA: Card[] = [
  {
    color: '#385899',
    logo: 'fb.png',
    heading: 'facebook.com',
    subheading:
      'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
  },
  {
    color: '#ff5c00',
    logo: 'red.svg',
    heading: 'reddit.com',
    subheading:
      'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
  },
  {
    color: '#f1d902',
    logo: 'ebay.svg',
    heading: 'EBAY.com',
    subheading:
      'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
  },
  {
    color: '#d90000',
    logo: 'netlfix.svg',
    heading: 'netflix.com',
    subheading:
      'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
  },
  {
    color: '#41a93f',
    logo: 'shop.svg',
    heading: 'shopify.com',
    subheading:
      'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
  },
  {
    color: '#bf1f1f',
    logo: 'cnn.svg',
    heading: 'cnn.com',
    subheading:
      'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
  },
  {
    color: '#2a6cec',
    logo: 'int.svg',
    heading: 'intuit.com',
    subheading:
      'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
  },
  {
    color: '#3079ae',
    logo: 'chase.png',
    heading: 'chase.com',
    subheading:
      'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
  },
]

const Index: NextPage = (props: Props) => {
  const { data, isLoading } = useMoralisQuery('Sellers')
  const [realCards, setRealCards] = useState<
    {
      description: string
      name: string
      image: string
      logo: string
      sold?: boolean
    }[]
  >([])

  useEffect(() => {
    if (!isLoading) {
      setRealCards(data.map((e) => e.attributes['metadata']))
    }
  }, [isLoading])

  const cards = DATA.map((card, index) => {
    return <Card {...card} key={index} />
  })
  return (
    <div>
      <div className="w-full bg-black">
        <div className="mx-auto w-4/5">
          <Navbar active="explore" />
          <div className="py-20 text-center font-pop text-7xl font-extrabold text-white">
            Explore Our Spaces
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 grid w-4/5 grid-cols-4 gap-5">
        {realCards.map((data) => (
          <Card
            key={data.name}
            color={'#3079ae'}
            heading={data.name}
            logo={data.logo || data.image}
            subheading={data.description}
            isSold={data.sold}
          />
        ))}
        {cards}
        {cards}
      </div>
    </div>
  )
}

export default Index
