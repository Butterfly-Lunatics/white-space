import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'

const options = {
  chain: 'rinkeby',
  address: '0x7a84ac83a8e54bd8f8bd79cfae12038c46b417a3',
}
const initialState: any = []

function App() {
  const { isInitialized, Moralis } = useMoralis()
  const [nfts, setNfts] = useState(initialState)

  useEffect(() => {
    if (isInitialized) {
      Moralis.Web3API.account.getNFTs(options as any).then(setNfts)
    }
  }, [isInitialized, Moralis])

  if (!isInitialized) {
    return null
  }

  return (
    <div className="App">
      {nfts.map((nft: any, i: number) => (
        <p key={i}>{JSON.stringify(nft)}</p>
      ))}
    </div>
  )
}

export default App
