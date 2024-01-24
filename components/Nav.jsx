import React from 'react'

const Nav = () => {
  return (
    <nav className=' flex items-center justify-between gap-12 h-[60px] max-w-[1472px] mx-[84px] my-[24px] bg-slate-200 px-[48px]  rounded-[100px] border-solid border-slate-300 border '>
      <div className=' bg-slate-400 h-[38px] w-full basis-1/4'></div>
      <ul className=' bg-slate-400 h-[38px] w-full basis-1/2'></ul>
      <ul className=' bg-slate-400 h-[38px] w-auto basis-1/4'></ul>
    </nav>
  )
}

export default Nav
