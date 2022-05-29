import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const style = {
    displayCardContainer: `flex gap-6 w-full mx-auto items-center justify-center py-20`,
    displayCardItem: `bg-[#52FF00] flex flex-col w-[18%] p-5 pb-10 justify-center items-center rounded-lg relative gap-6`, //green coloured card
    displayCardLogoImage:  `h-[4.5rem] absolute absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2`,
    displayCardPlaceholderText: `text-center din text-xl font-bold text-black tracking-wide pt-6`,
    cardInput: `w-full bg-white p-2 border-2 border-black shadow-lg`,
    cardInputText: `text-center din text-xl opacity-[58%]`
}

const Contact = (props: Props) => {
  return (
        <div className="relative w-full">
      <div className="w-full bg-black">
        <div className="relative mx-auto w-4/5">
          <Navbar active="contact" />
          <div className="pt-[3rem] pb-[2rem] text-center font-pop text-6xl font-extrabold text-white">
            Contact Us
          </div>
        </div>
      </div>
        <div>
            <div className='pt-[3rem] pb-[1.5rem] text-center din text-[2.5rem] font-bold text-black tracking-wider'>
                <h1>Don't be shy, ask the WhiteSpaceSquad !</h1>
            </div>
            <div>
                <div className='bg-black h-3 w-1/5 mx-auto'>

                </div >
            </div >
            <div className='pt-[2rem] pb-[1.5rem] text-center din text-[1.7rem] font-bold text-black tracking-wider'>
            <h1>Monday-Sunday : 7:00 AM to 5:00 PM (IST)</h1>
            </div>
        </div>
        <div className={style.displayCardContainer}>
            <div className={style.displayCardItem}>
                <div><img src="/static/logos/chat.png" alt=""  className={style.displayCardLogoImage}/></div>
                <div className={style.displayCardPlaceholderText}>Let's have a chat.</div>
                <div className={style.cardInput}>
                    <div className={style.cardInputText}>
                        Start a Live Chat
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={style.displayCardItem}>
                <div><img src="/static/logos/message.png" alt=""  className={style.displayCardLogoImage}/></div>
                <div className={style.displayCardPlaceholderText}>Drop us a line.</div>
                <div className={style.cardInput}>
                    <div className={style.cardInputText}>
                        Submit a request.
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={style.displayCardItem}>
                <div><img src="/static/logos/phone.png" alt=""  className={style.displayCardLogoImage}/></div>
                <div className={style.displayCardPlaceholderText}>Text Us.</div>
                <div className={style.cardInput}>
                    <div className={style.cardInputText}>
                        Your Text
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={style.displayCardItem}>
                <div><img src="/static/logos/peace-sign.png" alt=""  className={style.displayCardLogoImage}/></div>
                <div className={style.displayCardPlaceholderText}>Connect on socials</div>
                <div className={style.cardInput}>
                    <div className={style.cardInputText}>
                        Facbook and instagram
                    </div>
                </div>
            </div>
            {/*  */}
        </div>



    </div>
  
  )
}

export default Contact