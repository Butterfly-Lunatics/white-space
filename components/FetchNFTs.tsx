import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'

const options = {
  chain: 'rinkeby',
  address: '0x7a84ac83a8e54bd8f8bd79cfae12038c46b417a3',
}
const initialState = []

function App() {
  const { isInitialized, Moralis } = useMoralis()
  const [nfts, setNfts] = useState(initialState)

  useEffect(() => {
    if (isInitialized) {
      Moralis.Web3API.account.getNFTs(options).then(setNfts)
    }
  }, [isInitialized, Moralis])

  if (!isInitialized) {
    return null
  }

  return (
    <div className="App">
      {nfts.map((nft, i) => (
        <p key={i}>{JSON.stringify(nft)}</p>
      ))}
    </div>
  )
}

export default App
