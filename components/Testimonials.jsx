import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className=' flex gap-8 h-[532px] mt-16 px-[84px] bg-slate-100'>
      <article className=' flex flex-col gap-8 bg-slate-300 basis-1/2 mx-6 my-6'>
        <Image src={"/images/shopify.png"} height={80} width={120} alt='' />
        <Image src={"/images/stars.png"} height={50} width={120} alt='' />
        <h3 className=' text-3xl'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</h3>
        <Image src={"/images/person and arrows.png"} height={64} width={250} alt='' />
      </article>
      <article className=' flex items-center bg-slate-300 basis-1/2 mx-6 my-6'>
        <Image src={"/images/people3.png"} height={600} width={600} alt='' />
      </article>
    </section>
  )
}

export default Testimonials
