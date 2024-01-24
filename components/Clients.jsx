import React from 'react'

const Clients = () => {
  return (
    <article className=' flex flex-col items-center gap-8 py-4 h-32 mx-[84px] bg-slate-100 mt-16'>
      <p className=' bg-transparent'>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className=' flex gap-8 bg-transparent w-full '> 
        <section className=' bg-slate-300 h-[26] basis-1/6'>Shopify</section>
        <section className=' bg-slate-300 h-[26] basis-1/6'>Coinbase</section>
        <section className=' bg-slate-300 h-[26] basis-1/6'>Dropbox</section>
        <section className=' bg-slate-300 h-[26] basis-1/6'>Intercom</section>
        <section className=' bg-slate-300 h-[26] basis-1/6'>Marvel</section>
        <section className=' bg-slate-300 h-[26] basis-1/6'>Automattic</section>
      </div>
    </article>
  )
}

export default Clients
