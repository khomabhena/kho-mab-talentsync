import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
  return (
    <section className=' flex h-[532px] mt-16 ml-[84px]'>
      <article className=' basis-1/2 mx-6 my-6'>
        <h1 className=' text-4xl font-bold text-slate-600'>Ready to clear the path to perfect communication?</h1>
        <section className=' mt-8'>
          <div className=' text-lg text-slate-600 mt-4 flex items-center gap-4'>
            <Image className=' h-6 w-6' src={'/images/check icon.png'} width={20} height={20} alt='' />
            <p>30 days free trial</p>
          </div>
        </section>
        <section>
          <div className=' text-lg text-slate-600 mt-4 flex items-center gap-4'>
            <Image className=' h-6 w-6' src={'/images/check icon.png'} width={20} height={20} alt='' />
            <p>Cancel at any time</p>
          </div>
        </section>
        <section>
          <div className=' text-lg text-slate-600 mt-4 flex items-center gap-4'>
            <Image className=' h-6 w-6' src={'/images/check icon.png'} width={20} height={20} alt='' />
            <p>Access all features</p>
          </div>
        </section>
        <section>
          <div className=' text-lg text-slate-600 mt-4 flex items-center gap-4'>
            <Image className=' h-6 w-6' src={'/images/check icon.png'} width={20} height={20} alt='' />
            <p>Personalized onboarding</p>
          </div>
        </section>
        <section className=' mt-8'>
          <button className=' border-2 bg-white text-lg border-[#175CD3] px-4 py-2 rounded-[100px]' type="button">Talk to Sales</button>
          <button className=' border text-white ml-8 text-lg bg-[#175CD3] px-4 py-2 rounded-[100px]' type="button">Start your free trial</button>
        </section>
      </article>
      <article className=' basis-1/2 my-6'>
        <Image src={'/images/people4.png'} width={600} height={600} alt='' />
      </article>
    </section>
  )
}

export default Subscribe
