import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

export const About = () => {
  return (
    <div className="bg-[#ede7de] pt-10 pb-40">
       <Nav/>
       <div className='md:my-36'>
        <div className='mt-[30%] mb-[7%] md:mt-32 md:mb-2'>
            <p className='pb-1 md:pb-0 text-center text-[5vh] md:text-[17vh] text-pry leading-none font-bold md:font-bold font-acron'>I'm Excel.</p>
        </div>
        {/* Mid Section */}
        <div className='md:flex mx-10 md:ml-[11%] md:mr-[8%] my-24'>
          {/* Top Left */}
          <div className='md:w-[30%] bg-white rounded-t-full'>

          </div>
          {/* Top Right */}
          <div className='md:w-[70%] md:mx-10 md:px-12 max-sm:mt-10'>
            <p className='pb-1 md:pb-0 text-left text-[3vh] md:text-[7vh] text-pry leading-[120%] font-bold md:font-bold font-acron'>I'm a Fullstack Developer working remotely from 26°C Abuja, Nigeria.</p>
            <p className='text-pry font-semibold md:font-medium font-body text-[16px] md:text-xl my-6'>
              In the last 5 years, I've excelled in digital design, focusing on front-end development, email, marketing, and app UI/UX. As a developer, I've worn multiple hats, showcasing my versatility and expertise.</p>
            <p className='text-pry font-semibold md:font-medium font-body text-[16px] md:text-xl my-6'>
              Currently, my emphasis is on spearheading design efforts for freelance projects. I specialize in enabling donors to directly support the freelance community</p>
          </div>
        </div>
       </div>
       <Footer/>
    </div>
  )
}
