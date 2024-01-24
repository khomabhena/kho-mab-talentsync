import React from 'react'

const Footer = () => {
  return (
    <footer className=' h-[328px] flex flex-col mt-16'>
      <section className=' flex gap-4 bg-slate-100 h-full mx-[84px]'>
        <article className=' bg-slate-300 h-full basis-2/6'></article>
        <article className=' bg-slate-300 h-full basis-3/6'></article>
        <article className=' bg-slate-300 h-full basis-1/6'></article>
      </section>
      <section className=' flex gap-2 justify-between bg-slate-100 h-[74px] py-2 px-[84px]'>
        <article className=' bg-slate-300 w-[350px]'></article>
        <article className=' bg-slate-300 w-[350px]'></article>
      </section>
    </footer>
  )
}

export default Footer
