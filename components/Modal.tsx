import React, { MouseEventHandler } from 'react'
import { contractAddress } from '../contracts/contract'
import useAuth from '../hooks/useAuthentication'
import { Data } from '../pages/explore'

type Props = {
  data: Data
  clickHandler: () => void
}

const Modal = (props: Props) => {
  const [{ Moralis, user, enableWeb3 }] = useAuth()

  const transferNFT: MouseEventHandler<HTMLButtonElement> = async () => {
    console.log('Transfering ownership')
    await enableWeb3()
    console.log('enabled')

    await Moralis.transfer({
      type: 'erc721',
      receiver: user?.get('ethAddress'),
      contractAddress,
      tokenId: props.data.token_id,
    })

    console.log('Done!')
  }

  return (
    <div className="absolute top-1/2 left-1/2 z-10  w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl hover:cursor-default">
      <div className="din rounded-t-xl bg-[#52ff00] py-5 text-center text-5xl">
        {props.data.metadata.name}
      </div>
      <div className="flex flex-col items-center p-5">
        <img src={props.data.image} className="w-1/2 rounded-xl shadow-lg" />
        <div className="mt-5 font-pop uppercase">
          {props.data.metadata.description}
        </div>
        <div className="mt-5 flex w-full justify-center gap-5">
          {props.data.username !== user?.getUsername() && (
            <button
              className="rounded-lg bg-[#f24c4c] px-10 py-3 font-pop text-lg font-extrabold text-white"
              onClick={transferNFT}
            >
              BUY
            </button>
          )}
          <button
            className="rounded-lg border-2 border-[#f24c4c] px-10 py-3 font-pop text-lg font-extrabold text-[#f24c4c]"
            onClick={() => props.clickHandler()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
