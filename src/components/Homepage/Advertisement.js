import React from 'react'
import circle from "../../images/home/desktop/pattern-circles.svg";
export default function Advertisement() {
  return (
    <div className='w-[70%] mx-auto my-32'>
      <div className='ad-div'>
      <img src={require("../../images/home/desktop/image-speaker-zx9.png")} alt="" className='z-20' />
      <img src={circle} alt="" className='z-10'/>
      <div className='text-white w-96 p-20 absolute right-10 top-20 flex flex-col gap-8'>
        <span className='font-semibold text-5xl'>ZX9 SPEAKER</span>
        <p className="font-thin">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button className="bg-black p-3 w-fit">SEE PRODUCT</button>
        </div>
      </div>
      <div className='relative my-10 rounded-lg'>
        <img src={require("../../images/home/desktop/image-speaker-zx7.jpg")} alt="" className="rounded-lg" />
        <div className='absolute top-20 text-black p-10 flex flex-col left-10 gap-5'>
          <span className='font-semibold text-4xl'>ZX7 SPEAKER</span>
          <button className='border-2 border-black w-fit p-2'>SEE PRODUCT</button>
        </div>
      </div>
      <div className='flex gap-5'>
      <img src={require("../../images/home/desktop/image-earphones-yx1.jpg")} alt="" className='rounded-lg' />
      <div className='bg-[#F1F1F1] w-[50%] rounded-lg flex flex-col items-center justify-center gap-4'>
        <span className='text-4xl font-semibold'>YX1 EARPHONES</span>
        <button className="bg-black text-white w-fit p-3">SEE PRODUCT</button>
      </div>
      </div>
    </div>
  )
}
