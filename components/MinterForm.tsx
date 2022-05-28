import { FormEventHandler, useState } from 'react'
import Moralis from 'moralis'
import { NextPage } from 'next'
import { Contract } from 'web3-eth-contract/types'
import { useMoralisFile } from 'react-moralis'
import { contractAddress } from '../contracts/contract'

const MinterForm: NextPage<{
  user: Moralis.User<Moralis.Attributes>
  contract: Contract
}> = ({ user, contract }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const { saveFile } = useMoralisFile()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      if (file) {
        // Attempt to save image to IPFS
        const image = await saveFile(file.name, file, { saveIPFS: true })
        console.log('uploading')
        const imageurl: string = (image as any).ipfs()

        // Generate metadata and save to IPFS
        const metadata = {
          name: title,
          description,
          image: imageurl,
        }

        const metadataFile = await saveFile(
          `${title}metadata.json`,
          {
            base64: Buffer.from(JSON.stringify(metadata)).toString('base64'),
          },
          { type: 'base64', saveIPFS: true }
        )
        const metadataurl: string = (metadataFile as any).ipfs()

        // Interact with smart contract
        const response = await contract.methods
          .mint(metadataurl)
          .send({ from: user.get('ethAddress') })

        // Get token id
        const tokenId = response.events.Transfer.returnValues.tokenId
        // Display alert
        alert(
          `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
        )
      }
    } catch (err) {
      console.error(err)
      alert('An error occured!')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          className="w-full border-[1px] border-black p-2 text-lg"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="w-full border-[1px] border-black p-2 text-lg"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <input
          type="file"
          className="border-[1px] border-black p-2 text-lg"
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
        />
      </div>
      <button
        type="submit"
        className="mt-5 w-full rounded-xl bg-green-700 p-5 text-lg text-white"
      >
        Mint now!
      </button>
    </form>
  )
}

export default MinterForm
