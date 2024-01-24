import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className=' flex gap-8 h-[532px] mt-16 px-[84px] bg-[#F9FAFB]'>
      <article className=' flex flex-col gap-8 basis-1/2 mx-6 my-6'>
        <Image className=' h-8 mt-8' src={"/images/shopify.png"} height={80} width={120} alt='' />
        <Image src={"/images/stars.png"} height={50} width={120} alt='' />
        <h3 className=' text-slate-800 text-3xl'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</h3>
        <Image className=' h-12 w-auto' src={"/images/person and arrows.png"} height={300} width={450} alt='' />
      </article>
      <article className=' flex items-center basis-1/2 mx-6 my-6'>
        <Image src={"/images/people3.png"} height={600} width={600} alt='' />
      </article>
    </section>
  )
}

export default Testimonials
