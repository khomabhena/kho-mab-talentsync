import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <header className=' flex gap-8 h-[424px] mt-20 mx-[84px]'>
      <article className=' flex flex-col gap-4 basis-1/2 mx-6 my-6'>
        <h2 className=' text-5xl text-slate-700'>Uniting the world, <br />one video call at a time</h2>
        <p className=' text-lg text-slate-500'>Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</p>
        <div className=' flex gap-4 mt-8'>
          <button className=' border text-white bg-[#175CD3] px-6 py-2 rounded-[100px]' type="button">Start your free trial</button>
          <button className=' flex items-center gap-2 text-[#175CD3] font-bold text-base hover:border transition hover:border-[#98A2B3] px-4 rounded-[100px]' type="button"><Image className=' h-[20px] w-[20px]' src={"/images/robot.png"} width={50} height={50} alt='chevron' />Discover AI assistant</button>
        </div>
        <div className=' flex mt-4 gap-8'>
          <Image className=' h-[48px] w-auto' src={"/images/Avatar group.png"} alt='' width={300} height={100} />
          <Image className=' h-[48px] w-auto' src={"/images/Reviews.png"} alt='' width={300} height={100} />
        </div>
      </article>
      <article className=' basis-1/2 mx-6 my-6'>
        <Image alt='' src={"/images/people.png"} width={600} height={600} />
      </article>
    </header>
  )
}

export default Hero
