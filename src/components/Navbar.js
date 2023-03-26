import React from 'react'
import cartIcon from "../images/shared/desktop/icon-cart.svg";

export default function Navbar() {
  return (
    <div className='bg-[#191919]'>
    <div className='bg-[#191919] text-white flex justify-between items-center h-[10vh] border-b-2 border-neutral-600 text-small w-[75%] mx-auto'>
      <span className="font-extrabold text-2xl">audiophile</span>
      <div className='flex justify-between w-[40%]'>
        <span>HOME</span>
        <span>HEADPHONES</span>
        <span>SPEAKERS</span>
        <span>EARPHONES</span>
      </div>
      <span><img src={(cartIcon)} alt="cart" /></span>
    </div>
    </div>
  )
}
