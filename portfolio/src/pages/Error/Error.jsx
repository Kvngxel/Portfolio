import React from 'react'
import { Nav } from '../../components/Nav'

export const Error = () => {
  return (
    <div className="flex bg-[#ede7de] pt-10 pb-40 h-[100vh] justify-center items-center">
        <Nav/>
        <div className='mt-32'>
            <p className='text-center text-[5vh] md:text-[16vh] text-pry leading-none font-bold font-acron'>Page not found.</p>
            <p className='text-center text-[6vh] md:text-[16vh] text-pry leading-none font-bold font-acron mt-5'>Error :) 404.</p>
        </div>
    </div>
  )
}
