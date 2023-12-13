import React from 'react'
import { Nav } from '../../components/Nav'

export const Error = () => {
  return (
    <div className="flex bg-[#ede7de] pt-10 pb-40 h-[100vh] justify-center items-center">
        <Nav/>
        <div className='mt-32'>
            <p className='text-center text-[16vh] text-pry leading-none font-bold font-acron'>Portfolio In Progress.</p>
            <p className='text-center text-[16vh] text-pry leading-none font-bold font-acron mt-5'>:) 404.</p>
        </div>
    </div>
  )
}
