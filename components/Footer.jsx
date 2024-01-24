import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const product = ["Overview", "Features", "Solutions", "Tutorials", "Pricing"]
  const company = ["About us", "Careers", "Press", "News", "Contact"]
  const resources = ["Blog", "Events", "Help centre", "Tutorials", "Support"]
  const legal = ["Terms", "Privacy", "Cookies", "Licenses", "Contact"]
  return (
    <footer className=' h-[328px] flex flex-col mt-16'>
      <section className=' flex gap-4 bg-slate-100 h-full mx-[84px]'>
        <article className=' bg-slate-300 h-full basis-2/6'>
          <Image src={'/images/clear-link-logo.png'} height={50} width={100} alt='' />
          <p>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </article>
        <article className=' grid grid-cols-4 bg-slate-300 h-full basis-3/6'>
          <section>
            <h1>Product</h1>
            {
              product.map((item, index) => (
                <p key={index}><a href="/">{item}</a></p>
              ))
            }
          </section>
          <section>
            <h1>Company</h1>
            {
              company.map((item, index) => (
                <p key={index}><a href="/">{item}</a></p>
              ))
            }
          </section>
          <section>
            <h1>Resources</h1>
            {
              resources.map((item, index) => (
                <p key={index}><a href="/">{item}</a></p>
              ))
            }
          </section>
          <section>
            <h1>Legal</h1>
            {
              legal.map((item, index) => (
                <p key={index}><a href="/">{item}</a></p>
              ))
            }
          </section>
        </article>
        <article className=' bg-slate-300 h-full basis-1/6'>
          <Image src={'/images/app store.png'} width={200} height={230} alt='' />
        </article>
      </section>
      <section className=' flex items-center gap-2 justify-between bg-slate-100 h-[74px] py-2 px-[84px]'>
        <article className=' bg-slate-300 w-[350px]'>
          <p>© {new Date().getFullYear()} ClearLink. All rights reserved.</p>
        </article>
        <article className=' flex items-center justify-end bg-slate-300 w-[350px]'>
            <Image src={'/images/social icons.png'} height={80} width={250} alt='social icons' />
        </article>
      </section>
    </footer>
  )
}

export default Footer
