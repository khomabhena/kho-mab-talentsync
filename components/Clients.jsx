import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <article className=' flex flex-col items-center gap-4 py-4 h-32 mx-[84px] mt-16'>
      <p className=' text-slate-600 text-sm'>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className=' flex gap-8 bg-transparent w-full '> 
        <section className=' flex items-center h-[26] basis-1/6'>
          <Image className=' h-6 w-auto' src={"/images/shopify.png"} height={80} width={200} alt='' />
        </section>
        <section className=' flex items-center h-[26] basis-1/6'>
          <Image className=' h-6 w-auto' src={"/images/coinbase.png"} height={80} width={200} alt='' />
        </section>
        <section className=' flex items-center h-[26] basis-1/6'>
          <Image className=' h-6 w-auto' src={"/images/dropbox.png"} height={80} width={200} alt='' />
        </section>
        <section className=' flex items-center h-[26] basis-1/6'>
          <Image className=' h-6 w-auto' src={"/images/intercom.png"} height={80} width={200} alt='' />
        </section>
        <section className=' flex items-center h-[26] basis-1/6'>
          <Image className=' h-6 w-auto' src={"/images/marvel.png"} height={80} width={200} alt='' />
        </section>
        <section className=' flex items-center h-[26] basis-1/6'>
          <Image className=' h-6 w-auto' src={"/images/automattic.png"} height={80} width={200} alt='' />
        </section>
      </div>
    </article>
  )
}

export default Clients
