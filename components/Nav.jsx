import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav className=' flex items-center justify-between h-[60px] max-w-[1472px] mx-[84px] my-[24px] bg-[#F2F4F7] px-[48px]  rounded-[100px] border-solid border-[#D0D5DD] border '>
      <div className=' flex items-center h-[38px] bg-transparent w-full basis-1/4'>
        <Image className=' h-[28px] w-auto' src={"/images/clear-link-logo.png"} width={200} height={62} alt='logo' />
      </div>
      <ul className=' flex gap-8 items-center text-base text-slate-600 bg-transparent h-[38px] w-full basis-1/2'>
        <li className=' flex items-center'><a href="">Product</a><Image className=' h-[20px] w-[20px]' src={"/images/chevron-down.png"} width={50} height={50} alt='chevron' /></li>
        <li className=' flex items-center'><a href="">Solutions</a><Image className=' h-[20px] w-[20px]' src={"/images/chevron-down.png"} width={50} height={50} alt='chevron' /></li>
        <li className=' flex items-center'><a href="">Resources</a><Image className=' h-[20px] w-[20px]' src={"/images/chevron-down.png"} width={50} height={50} alt='chevron' /></li>
        <li className=' flex items-center'><a href="">Pricing</a></li>
      </ul>
      <ul className=' flex gap-2 text-sm h-[38px] w-auto basis-1/4'>
        <button className=' border bg-white text-xs border-[#98A2B3] px-4 rounded-[100px]' type="button">Talk to Sales</button>
        <button className=' border text-white bg-[#175CD3] px-4 rounded-[100px]' type="button">Sign up for Free</button>
      </ul>
    </nav>
  )
}

export default Nav
