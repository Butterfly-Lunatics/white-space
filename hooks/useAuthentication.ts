import Router from 'next/router'
import { useState, useEffect } from 'react'
import { MoralisContextValue, useMoralis } from 'react-moralis'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

interface returnType extends Array<MoralisContextValue | boolean> {
  0: MoralisContextValue
  1: boolean
}

export default function useAuth(redirect = true): returnType {
  const moralisObject = useMoralis()
  const [loading, setLoading] = useState(true)

  // wait 0.5 sec to check authentication status
  useEffect(() => {
    // console.log('Auth: ', moralisObject.isAuthenticated)
    if (!moralisObject.isAuthenticated && loading) {
      sleep(500).then(() => setLoading(false))
    } else {
      !moralisObject.isAuthenticated && redirect && Router.replace('/')
    }
  }, [loading])

  return [moralisObject, loading]
}
