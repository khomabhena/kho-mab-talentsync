import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
  return (
    <section className=' flex h-[532px] mt-16 ml-[84px] bg-slate-100'>
      <article className=' bg-slate-300 basis-1/2 mx-6 my-6'>
        <h1>Ready to clear the path to perfect communication?</h1>
        <section>
          <div className=' flex items-center gap-4'>
            <Image className=' h-6 w-6' src={'/images/check icon.png'} width={20} height={20} alt='' />
            <p>30 days free trial</p>
          </div>
        </section>
        <section>
          <div className=' flex items-center gap-4'>
            <Image className=' h-6 w-6' src={'/images/check icon.png'} width={20} height={20} alt='' />
            <p>Cancel at any time</p>
          </div>
        </section>
        <section>
          <div className=' flex items-center gap-4'>
            <Image className=' h-6 w-6' src={'/images/check icon.png'} width={20} height={20} alt='' />
            <p>Access all features</p>
          </div>
        </section>
        <section>
          <div className=' flex items-center gap-4'>
            <Image className=' h-6 w-6' src={'/images/check icon.png'} width={20} height={20} alt='' />
            <p>Personalized onboarding</p>
          </div>
        </section>
        <section>
          <button className=' border bg-white text-xs border-[#98A2B3] px-4 rounded-[100px]' type="button">Talk to Sales</button>
          <button className=' border text-white bg-[#175CD3] px-4 rounded-[100px]' type="button">Start your free trial</button>
        </section>
      </article>
      <article className=' bg-slate-300 basis-1/2 my-6'>
        <Image src={'/images/people4.png'} width={600} height={600} alt='' />
      </article>
    </section>
  )
}

export default Subscribe
