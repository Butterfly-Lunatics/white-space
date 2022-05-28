import Router from 'next/router'
import { useState, useEffect } from 'react'
import { MoralisContextValue, useMoralis } from 'react-moralis'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

interface returnType extends Array<MoralisContextValue | boolean | string> {
  0: MoralisContextValue
  1: boolean
  2: string
  3: string
}

export default function useAuth(redirect = true): returnType {
  const moralisObject = useMoralis()
  const [loading, setLoading] = useState(true)
  const [chainId, setChainId] = useState<string>(
    moralisObject.Moralis.getChainId()!
  )
  const [walletAddress, setWalletAddress] = useState<string>(
    moralisObject.user?.get('ethAddress')
  )

  // wait 0.5 sec to check authentication status
  useEffect(() => {
    if (!moralisObject.isAuthenticated && loading) {
      sleep(500).then(() => setLoading(false))
    } else {
      !moralisObject.isAuthenticated && redirect && Router.replace('/')
    }
  }, [loading])

  useEffect(() => {
    moralisObject.Moralis.onChainChanged(function (chain) {
      chain && setChainId(chain)
    })

    moralisObject.Moralis.onAccountChanged(function (address) {
      address && setWalletAddress(address[0])
    })
  }, [])

  return [moralisObject, loading, chainId, walletAddress]
}
