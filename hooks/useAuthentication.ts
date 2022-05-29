import Router from 'next/router'
import { useState, useEffect } from 'react'
import { MoralisContextValue, useMoralis } from 'react-moralis'

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

interface returnType extends Array<MoralisContextValue | boolean | string> {
  0: MoralisContextValue
  1: string
  2: boolean
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
      sleep(1000).then(() => {
        setLoading(false)
        setChainId(moralisObject.Moralis.getChainId()!)
        setWalletAddress(moralisObject.user?.attributes['ethAddress'])

        if (
          !moralisObject.isWeb3Enabled &&
          !moralisObject.isWeb3EnableLoading
        ) {
          // console.log('started')
          moralisObject.Moralis.enableWeb3().then(
            (provider) =>
              provider.detectNetwork().then((network) => {
                setChainId(network.chainId.toString(10))
                // console.log(moralisObject.isWeb3Enabled)
              }),
            (err) => console.log('Error: ', err)
          )
        }
      })
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

  // console.log(walletAddress, loading, chainId)

  return [moralisObject, walletAddress, loading, chainId]
}
