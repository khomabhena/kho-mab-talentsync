import Image from 'next/image'
import React from 'react'

const Solutions = () => {
  return (
    <section className=' flex h-[532px] mt-16 mx-[84px]'>
      <article className=' flex gap-8 flex-col basis-3/5 mx-6 my-6'>
        <section className=' basis-1/4'>
          <p className=' text-[#175CD3] font-bold text-sm'>The ClearLink Advantage</p>
          <h2 className=' mt-4 text-slate-700 text-4xl font-bold'>Why choose ClearLink?</h2>
          <p className=' mt-4 text-slate-500 text-lg'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
        </section>
        <section className=' grid grid-cols-2 gap-8 basis-3/4'>
          <article className=' '>
            <Image className=' w-10 h-10 ' src={"/images/camcoder.png"} width={50} height={50} alt='' />
            <h3 className=' mt-4 text-xl text-slate-700'>Crystal-clear HD video</h3>
            <p className=' mt-2 text-sm font-lightf text-slate-500'>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
          </article>
          <article className=' '>
            <Image className=' w-10 h-10 ' src={"/images/noise.png"} width={50} height={50} alt='' />
            <h3 className=' mt-4 text-xl text-slate-700'>Noise-canceling audio</h3>
            <p className=' mt-2 text-sm font-lightf text-slate-500'>Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
          </article>
          <article className=' '>
            <Image className=' w-10 h-10 ' src={"/images/calender.png"} width={50} height={50} alt='' />
            <h3 className=' mt-4 text-xl text-slate-700'>Scheduling made easy</h3>
            <p className=' mt-2 text-sm font-lightf text-slate-500'>Streamline your agenda with {"ClearLink's"} intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</p>
          </article>
          <article className=' '>
            <Image className=' w-10 h-10 ' src={"/images/security.png"} width={50} height={50} alt='' />
            <h3 className=' mt-4 text-xl text-slate-700'>Bank-grade security</h3>
            <p className=' mt-2 text-sm font-lightf text-slate-500'>Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
          </article>
        </section>
      </article>
      <article className=' flex gap-1 flex-col basis-2/5 mx-6 my-6'>
        <section className=' z-20 basis-1/4'>
          <Image className=' -mb-10 ml-20 w-auto h-36' src={"/images/arrow.png"} width={200} height={200} alt='' />
        </section>
        <section className=' flex basis-3/4'>
          <Image className=' flex h-full w-auto self-end' src={"/images/people2.png"} width={600} height={600} alt='' />
        </section>
      </article>
    </section>
  )
}

export default Solutions
