import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import Web3 from 'web3'
import MinterForm from '../components/MinterForm'
import { contractABI, contractAddress } from '../contracts/contract'
import useAuth from '../hooks/useAuthentication'

const web3 = new Web3(Web3.givenProvider)
const contract = new web3.eth.Contract(contractABI, contractAddress)

type NFTs =
  | {
      token_address: string
      token_id: string
      contract_type: string
      owner_of: string
      block_number: string
      block_number_minted: string
      token_uri?: string | undefined
      metadata?: string | undefined
      synced_at?: string | undefined
      amount?: string | undefined
      name: string
      symbol: string
    }[]
  | undefined

const Minter: NextPage = () => {
  const [
    {
      authenticate,
      isAuthenticated,
      logout,
      user,
      isWeb3Enabled,
      isInitialized,
    },
    walletAddress,
    loading,
  ] = useAuth(false)

  const { account } = useMoralisWeb3Api()
  const [nfts, setNfts] = useState<NFTs>([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    console.log(isWeb3Enabled)
  }, [isWeb3Enabled])

  if (fetching && isInitialized && nfts?.length === 0) {
    console.log('started request')
    setFetching(false)
    account
      .getNFTs({
        chain: '0x13881',
        address: walletAddress,
      })
      .then((resp) => setNfts(resp.result))
  }

  return (
    <div>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <>
          <h2>Hi {JSON.stringify(isAuthenticated)}</h2>
          {isAuthenticated ? (
            <>
              <MinterForm user={user!} contract={contract} />
              <button
                onClick={() => logout()}
                className="rounded-xl bg-red-600 px-8 py-5 text-lg"
              >
                LogOut
              </button>
              <div>
                {nfts?.map((nft) => (
                  <div key={nft.block_number}>
                    {nft.name} ||| {nft.metadata}
                    {JSON.stringify(nft)}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <button
              className="rounded-xl bg-yellow-300 px-8 py-5 text-lg"
              onClick={() => authenticate()}
            >
              SignUp
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Minter
