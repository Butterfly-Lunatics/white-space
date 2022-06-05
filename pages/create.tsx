import React, { FormEventHandler, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Web3 from 'web3'
import { contractABI, contractAddress } from '../contracts/contract'
import { useMoralisFile, useNewMoralisObject } from 'react-moralis'
import useAuth from '../hooks/useAuthentication'
import Router, { useRouter } from 'next/router'
import Spinner from '../components/Spinner'

const web3 = new Web3(Web3.givenProvider)
const contract = new web3.eth.Contract(contractABI, contractAddress)

const Index = () => {
  const router = useRouter()

  const r_title = useRef<HTMLInputElement | null>(null)
  const r_desc = useRef<HTMLTextAreaElement | null>(null)
  const r_price = useRef<HTMLInputElement>(null)
  const r_image = useRef<HTMLInputElement>(null)
  const r_finalimage = useRef<HTMLImageElement>(null)
  const r_submit = useRef<HTMLButtonElement>(null)

  const [imgName, setImgName] = useState('click to add screenshot of the space')
  const { saveFile } = useMoralisFile()
  const [{ user }] = useAuth()
  const { save } = useNewMoralisObject('Sellers')

  const [loading, setLoading] = useState(false)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    const title = r_title.current?.value
    const desc = (r_desc.current as any).value
    const price = r_price.current?.value
    const file = r_image.current?.files![0]

    try {
      if (file) {
        // Attempt to save image to IPFS
        const image = await saveFile(file.name, file, { saveIPFS: true })
        console.log('uploading')
        const imageurl: string = (image as any).ipfs()

        // Generate metadata and save to IPFS
        const metadata = {
          name: title,
          description: desc,
          image: imageurl,
          logo: user?.get('userData')?.profilePic,
        }
        console.log('uploading')

        const metadataFile = await saveFile(
          `${title}metadata.json`,
          {
            base64: Buffer.from(JSON.stringify(metadata)).toString('base64'),
          },
          { type: 'base64', saveIPFS: true }
        )
        const metadataurl: string = (metadataFile as any).ipfs()

        console.log(user!.get('ethAddress'))
        // Interact with smart contract
        const response = await contract.methods
          .mint(metadataurl)
          .send({ from: user!.get('ethAddress') })
        console.log('transferring')

        // Get token id
        const tokenId = response.events.Transfer.returnValues.tokenId
        // Display alert
        alert(
          `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
        )

        setLoading(false)

        const data = {
          token_id: tokenId,
          image: image?._url,
          metadata,
          username: user?.getUsername(),
        }

        save(data, {
          onSuccess: (e) => console.log(e.id),
          onError: (e) => console.log(e.message),
        })
        // insert confetti here

        router.push('/explore')
      }
    } catch (err) {
      console.error(err)
      alert('An error occured!')
    }
  }

  const imageHandler = () => {
    setImgName(
      !r_image.current?.files?.[0]
        ? 'click to add screenshot of the space'
        : r_image.current?.files?.[0].name?.substring(0, 20) +
            (r_image.current?.files?.[0].name.length > 20 ? '...' : '')
    )
    if (imgName === 'click to add screenshot of the space') return
    r_finalimage.current!.src = URL.createObjectURL(r_image.current!.files![0])
  }

  return (
    <div className="relative w-full">
      {loading && <Spinner />}
      <div className="w-full bg-black">
        <div className="relative mx-auto w-4/5">
          <Navbar active="create" />
          <div className="pt-20 pb-28 text-center font-pop text-7xl font-extrabold text-white">
            Create
          </div>
          <img
            src={user?.attributes['userData'].profilePic}
            className="absolute left-1/2 top-full aspect-square h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover outline-dashed outline-8 outline-stone-900"
          />
        </div>
      </div>
      <div className="mx-auto flex w-4/5 items-center gap-10 px-10 pt-28">
        <form className="flex w-1/2 flex-col gap-4" onSubmit={onSubmit}>
          <div className="din flex flex-col gap-2 text-3xl">
            <label>Title</label>
            <input
              className="w-full rounded-lg border-2 border-black p-2 text-xl"
              ref={r_title}
            />
          </div>
          <div className="din flex flex-col gap-2 text-3xl">
            <label>Description</label>
            <textarea
              className="w-full rounded-lg border-2 border-black p-2 text-xl"
              ref={r_desc as any}
            />
          </div>
          <div className="din flex flex-col gap-2 text-3xl">
            <label>Price</label>
            <input
              type={'number'}
              className="w-full rounded-lg border-2 border-black p-2 text-xl"
              ref={r_price}
            />
          </div>
          <input
            type={'file'}
            className="invisible"
            ref={r_image}
            onChange={imageHandler}
          />
          <button type="submit" ref={r_submit}></button>
        </form>
        <div
          className="din relative h-[350px] w-1/2 rounded-lg border-2 border-black bg-rose-50 text-4xl hover:cursor-pointer"
          onClick={() => r_image.current?.click()}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              display:
                imgName === 'click to add screenshot of the space'
                  ? 'block'
                  : 'none',
            }}
          >
            {imgName}
          </div>
          <img
            className="h-full w-full rounded-lg object-cover"
            ref={r_finalimage}
          />
        </div>
      </div>
      <button
        className="absolute left-1/2 mt-10 w-1/5 -translate-x-1/2 rounded-lg bg-[#52ff00] py-3 font-pop text-2xl font-extrabold"
        type="button"
        onClick={() => {
          r_submit.current?.click()
        }}
      >
        SUBMIT
      </button>
    </div>
  )
}

export default Index
