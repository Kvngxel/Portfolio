import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="bg-[#ede7de] pb-40">
      <Nav/>
      <div className='px-32 mt-4'>
        <div className='flex justify-end pr-36'>
          <img src='https://www.seanhalpin.xyz/hp/star-1.svg'/>
        </div>
        <div>
          <p className='text-center text-[16vh] text-pry leading-none font-bold font-acron'>Hi. I'm Excel.</p>
          <p className='text-center text-[16vh] text-pry leading-none font-bold font-acron'>A Developer.</p>
        </div>
        <div className='flex justify-start pl-28'>
          {/* Change to actual Images */}
          <img src='https://www.seanhalpin.xyz/hp/star-1.svg'/>
        </div>
        <p className='text-center px-52 pb-4 text-xl text-pry font-body font-medium'>
          Blending code with a love for sports, I create immersive digital experiences
          that are engaging, accessible, and user-focused.
        </p>
      </div>
      <div>
        <div className="h-[80vh] flex relative py-10 px-4">
          <div className="w-1/3 bg-pry relative max-sm:hidden mx-5 rounded-[70px]">

          </div>
          <div className="w-2/3 bg-red-500 relative max-sm:hidden mx-5 rounded-[70px]">
          
          </div>
        </div>
        <div className="h-[80vh] flex relative pt-20 pb-10 px-4">        
          <div className="w-2/3 bg-red-500 relative max-sm:hidden mx-5 rounded-[70px]">
          
          </div>
          <div className="w-1/3 bg-pry relative max-sm:hidden mx-5 rounded-[70px]">

          </div>
        </div>
      </div> 
      <div className='pt-24 pb-10'>
          <p className='text-center text-[16vh] text-pry leading-none font-bold font-acron'>In Progress.</p>
      </div>
      <p className='text-center px-64 pb-4 text-lg text-pry font-body font-medium'>
          Engage in diverse stages of design and development, ranging from personal side
          projects to ongoing product design and development initiatives.
      </p>     
      <div className="h-[80vh] flex relative py-10 px-4">
        <div className="w-1/3 bg-pry relative max-sm:hidden mx-5 rounded-[70px]">

        </div>
        <div className="w-2/3 bg-red-500 relative max-sm:hidden mx-5 rounded-[70px]">
        
        </div>
      </div>
      <Footer/>
    </div>    
    
  )
}
