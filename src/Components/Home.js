import React from 'react'
import banner from "../Assets/image/Banner_image.jpg"
import inside from "../Assets/image/Banner_image2.png"
export default function Home() {
  return (
    <>
    <div className="">
    <img src={banner} alt="" className='w-full md:p-5 lg:p-10' />
    </div>
    <div className="p-10 absolute top-0 w-full md:p-10 lg:p-16">
      <img src={inside} alt="" className='w-full mt-10'/>
       
    </div>
    </>
  )
}
