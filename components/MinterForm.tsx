import { FormEventHandler, useState } from 'react'
import { contractABI, contractAddress } from '../contracts/contract'
import Moralis from 'moralis'
import { NextPage } from 'next'
import Web3 from 'web3'

const MinterForm: NextPage<{
  user: Moralis.User<Moralis.Attributes>
  web3: Web3
}> = ({ user, web3 }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      if (file) {
        // Attempt to save image to IPFS
        const file1 = new Moralis.File(file.name, file)
        await file1.saveIPFS()
        const file1url = file1.url()

        // Generate metadata and save to IPFS
        const metadata = {
          title,
          description,
          image: file1url,
        }

        const file2 = new Moralis.File(`${title}metadata.json`, {
          base64: Buffer.from(JSON.stringify(metadata)).toString('base64'),
        })
        await file2.saveIPFS()
        const metadataurl = file2.url()

        // Interact with smart contract
        const contract = new web3.eth.Contract(contractABI, contractAddress)
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
