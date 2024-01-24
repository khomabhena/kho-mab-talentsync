import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <header className=' flex gap-8 h-[424px] mt-20 mx-[84px] bg-slate-100'>
      <article className=' flex flex-col gap-8 bg-slate-300 basis-1/2 mx-6 my-6'>
        <h2 className=' text-4xl'>Uniting the world, <br />one video call at a time</h2>
        <p>Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</p>
        <div className=' flex gap-4'>
          <button className=' border text-white bg-[#175CD3] px-4 rounded-[100px]' type="button">Start your free trial</button>
          <button className=' flex items-center border bg-white text-xs border-[#98A2B3] px-4 rounded-[100px]' type="button"><Image className=' h-[20px] w-[20px]' src={"/images/chevron-down.png"} width={50} height={50} alt='chevron' />Discover AI assistant</button>
        </div>
        <div className=' flex'>
          <Image className=' h-[42px] w-auto' src={"/images/Avatar group.png"} alt='' width={100} height={50} />
          <Image className=' h-[42px] w-auto' src={"/images/Reviews.png"} alt='' width={100} height={50} />
        </div>
      </article>
      <article className=' bg-slate-300 basis-1/2 mx-6 my-6'>
        <Image alt='' src={"/images/people.png"} width={600} height={600} />
      </article>
    </header>
  )
}

export default Hero
