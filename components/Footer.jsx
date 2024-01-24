import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const product = ["Overview", "Features", "Solutions", "Tutorials", "Pricing"]
  const company = ["About us", "Careers", "Press", "News", "Contact"]
  const resources = ["Blog", "Events", "Help centre", "Tutorials", "Support"]
  const legal = ["Terms", "Privacy", "Cookies", "Licenses", "Contact"]
  return (
    <footer className=' h-[328px] flex flex-col mt-16'>
      <section className=' flex gap-12 h-full mx-[84px]'>
        <article className=' h-full basis-2/6'>
          <Image className=' h-7 w-auto' src={'/images/clear-link-logo.png'} height={100} width={300} alt='' />
          <p className=' mt-8 text-slate-500'>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </article>
        <article className=' grid grid-cols-4 h-full basis-3/6'>
          <section>
            <h1 className=' text-lg mb-4 text-slate-400'>Product</h1>
            {
              product.map((item, index) => (
                <p className=' mt-2 text-slate-600' key={index}><a href="/">{item}</a></p>
              ))
            }
          </section>
          <section>
            <h1 className=' text-lg mb-4 text-slate-400'>Company</h1>
            {
              company.map((item, index) => (
                <p className=' mt-2 text-slate-600' key={index}><a href="/">{item}</a></p>
              ))
            }
          </section>
          <section>
            <h1 className=' text-lg mb-4 text-slate-400'>Resources</h1>
            {
              resources.map((item, index) => (
                <p className=' mt-2 text-slate-600' key={index}><a href="/">{item}</a></p>
              ))
            }
          </section>
          <section>
            <h1 className=' text-lg mb-4 text-slate-400'>Legal</h1>
            {
              legal.map((item, index) => (
                <p className=' mt-2 text-slate-600' key={index}><a href="/">{item}</a></p>
              ))
            }
          </section>
        </article>
        <article className=' h-full basis-1/6'>
          <Image className=' w-[130px] h-auto cursor-pointer' src={'/images/app store.png'} width={500} height={630} alt='' />
        </article>
      </section>
      <section className=' flex items-center gap-2 justify-between bg-[#F9FAFB] h-[74px] py-2 px-[84px]'>
        <article className=' w-[350px]'>
          <p className=' text-slate-500 text-sm'>© {new Date().getFullYear()} ClearLink. All rights reserved.</p>
        </article>
        <article className=' flex items-center justify-end w-[350px]'>
            <Image className=' h-5 w-auto cursor-pointer' src={'/images/social icons.png'} height={80} width={250} alt='social icons' />
        </article>
      </section>
    </footer>
  )
}

export default Footer
