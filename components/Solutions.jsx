import React from 'react'

const Solutions = () => {
  return (
    <section className=' flex h-[532px] mt-16 mx-[84px] bg-slate-100'>
      <article className=' flex gap-8 flex-col bg-slate-300 basis-1/2 mx-6 my-6'>
        <section className=' bg-slate-400 basis-1/4'></section>
        <section className=' grid grid-cols-2 gap-2 bg-slate-400 basis-3/4'>
          <article className=' bg-slate-500 '></article>
          <article className=' bg-slate-500 '></article>
          <article className=' bg-slate-500 '></article>
          <article className=' bg-slate-500 '></article>
        </section>
      </article>
      <article className=' flex gap-1 flex-col bg-slate-300 basis-1/2 mx-6 my-6'>
        <section className=' bg-slate-400 basis-1/4'></section>
        <section className=' bg-slate-400 basis-3/4'></section>
      </article>
    </section>
  )
}

export default Solutions
