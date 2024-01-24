import Image from 'next/image'
import React from 'react'

const FAQs = () => {
  return (
    <section className=' flex h-[532px] mt-16 mx-[84px]'>
      <article className=' basis-2/5 mx-6 my-6'>
        <p className=' text-[#175CD3] text-lg font-bold'>Support</p>
        <h2 className=' mt-4 text-slate-700 text-5xl font-bold'>FAQs</h2>
        <p className=' mt-4 text-slate-600 text-base'>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      </article>
      <article className=' basis-3/5 mx-6 my-6'>
        <section className=' border border-slate-300 bg-[#EAECF0] rounded-xl px-8 py-4'>
          <h3 className=' text-slate-700 font-bold text-base flex justify-between'>How many participants can join a ClearLink video conference?
            <span><Image src={'/images/minus-circle.png'} width={20} height={20} alt='' /> </span>
          </h3>
          <p className=' mt-4 text-sm'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
        </section>
        <section className=' mt-4 border border-l-0 border-t-0 border-r-0 border-b-1 border-slate-300 px-4 py-2'>
          <h3 className=' text-slate-700 font-bold text-base flex justify-between'>Can I use ClearLink on multiple devices?
            <span><Image src={'/images/plus-circle.png'} width={20} height={20} alt='' /> </span>
          </h3>
        </section>
        <section className=' mt-4 border border-l-0 border-t-0 border-r-0 border-b-1 border-slate-300 px-4 py-2'>
          <h3 className=' text-slate-700 font-bold text-base flex justify-between'>Is ClearLink compatible with other video conferencing platforms?
            <span><Image src={'/images/plus-circle.png'} width={20} height={20} alt='' /> </span>
          </h3>
        </section>
        <section className=' mt-4 border border-l-0 border-t-0 border-r-0 border-b-1 border-slate-300 px-4 py-2'>
          <h3 className=' text-slate-700 font-bold text-base flex justify-between'>How does ClearLink ensure the security of my video conferences?
            <span><Image src={'/images/plus-circle.png'} width={20} height={20} alt='' /> </span>
          </h3>
        </section>
        <section className=' mt-4 border border-l-0 border-t-0 border-r-0 border-b-1 border-slate-300 px-4 py-2'>
          <h3 className=' text-slate-700 font-bold text-base flex justify-between'>Do I need to download any software to use ClearLink?
            <span><Image src={'/images/plus-circle.png'} width={20} height={20} alt='' /> </span>
          </h3>
        </section>
        <section className=' mt-4 border border-l-0 border-t-0 border-r-0 border-b-1 border-slate-300 px-4 py-2'>
          <h3 className=' text-slate-700 font-bold text-base flex justify-between'>What kind of customer support does ClearLink provide?
            <span><Image src={'/images/plus-circle.png'} width={20} height={20} alt='' /> </span>
          </h3>
        </section>
      </article>
    </section>
  )
}

export default FAQs
