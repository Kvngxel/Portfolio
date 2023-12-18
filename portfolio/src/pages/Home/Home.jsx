import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer';
import { locale } from '../../assets/images';
import { simon } from '../../assets/images';
import { design } from '../../assets/images';
import { figma } from '../../assets/images';

export const Home = () => {
  return (
    <div className="bg-[#ede7de] pt-10 pb-40">
      <Nav/>
      <div className='px-32 mt-4'>
        <div className='flex justify-end pr-36'>
          <svg fill="none" height="68" viewBox="0 0 68 68" width="68" xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#fff"/></svg>
        </div>
        <div className='mt-14'>
          <p className='text-center text-[17vh] text-pry leading-none font-bold font-acron'>Hi. I'm Excel.</p>
          <p className='text-center text-[17vh] text-pry leading-none font-bold font-acron'>A Developer.</p>
        </div>
        <div className='flex justify-start pl-28'>
          <svg fill="none" height="68" viewBox="0 0 68 68" width="68" xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#fff"/></svg>
        </div>
        <p className='text-center px-52 pb-4 text-xl text-pry font-body font-medium'>
          Blending code with a love for sports, I create immersive digital experiences
          that are engaging, accessible, and user-focused.
        </p>
      </div>
      <div>
        {/* Top Section */}
        <div className="h-[80vh] flex relative py-10 px-4">
        {/* Top Left */}
          <Link to={''} target="_blank" className="w-[35%] h-[100%] hover:mt-1 bg-[#d094e5] hover:bg-[#dba1f1] group relative max-sm:hidden mx-5
            rounded-[70px] overflow-hidden transition-all duration-500 ease-in-out shadow-xs hover:shadow-lg"
          >
            <div className='mr-12 mt-10'>
              <p className='flex justify-end text-[#364442] text-xl tracking-widest pb-1'>Visit</p>
              <p className='flex justify-end font-acron text-[#364442] text-4xl'>SITES</p>
            </div>
            <img className='ml-52 mt-36 group-hover:mt-32 scale-[170%] rounded-2xl transition-all
              duration-700 ease-in-out' 
              src={locale} alt='Locale Image'
              />
          </Link>
        {/* Top Right */}
          <Link to={'https://simon-game-one-psi.vercel.app'} target="_blank" className="w-[65%] h-[100%]
            hover:mt-1 bg-[#8ACDD7] hover:bg-[#9adfea] group relative max-sm:hidden mx-5 rounded-[70px]
            overflow-hidden transition-all duration-500 ease-in-out
            shadow-xs hover:shadow-lg"
          >
            <div className='mr-12 mt-10'>
              <p className='flex justify-end text-[#364442] text-xl tracking-widest pb-1'>Play</p>
              <p className='flex justify-end font-acron text-[#364442] text-4xl'>GAMES</p>
            </div>
            <img className='ml-52 mt-36 group-hover:mt-32 scale-[139%] rounded-2xl transition-all
              duration-700 ease-in-out' 
              src={simon} alt='Locale Image'
              />
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="h-[80vh] flex relative py-10 px-4">
          {/* Bottom Left */}
          <Link to={''} target="_blank" className="w-[65%] h-[100%] hover:mt-1 bg-[#F9F9E0] hover:bg-[#fafae3] group relative max-sm:hidden mx-5
              rounded-[70px] overflow-hidden transition-all duration-500 ease-in-out shadow-xs hover:shadow-lg"
            >
              <div className='mr-12 mt-10'>
                <p className='flex justify-end text-[#364442] text-xl tracking-widest pb-1'>View</p>
                <p className='flex justify-end font-acron text-[#364442] text-4xl'>DESIGNS</p>
              </div>
              <img className='ml-52 mt-36 group-hover:mt-32 scale-[136%] rounded-2xl transition-all
                duration-700 ease-in-out' 
                src={design} alt='Design Image'
                />
          </Link>
          {/* Bottom right */}
          <Link to={''} target="_blank" className="w-[35%] h-[100%] hover:mt-1 bg-[#a3d9ca] hover:bg-[#afe4d6] group relative max-sm:hidden mx-5
            rounded-[70px] overflow-hidden transition-all duration-500 ease-in-out shadow-xs hover:shadow-lg"
          >
            <div className='mr-12 mt-10'>
              <p className='flex justify-end text-[#364442] text-xl tracking-widest pb-1'>See</p>
              <p className='flex justify-end font-acron text-[#364442] text-4xl'>FIGMA</p>
            </div>
            <img className='ml-52 mt-32 group-hover:mt-28 scale-[170%] rounded-2xl transition-all
              duration-700 ease-in-out' 
              src={figma} alt='Locale Image'
              />
          </Link>
        </div>
      </div> 
      <div className='pt-32 pb-10'>
          <p className='text-center text-[16vh] text-pry leading-none font-bold font-acron'>In Progress.</p>
      </div>
      <p className='text-center px-64 pb-10 pt-2 text-lg text-pry font-body font-medium'>
          Engage in diverse stages of design and development, ranging from personal side
          projects to ongoing product design and development initiatives.
      </p>     
      <div>
        <div className="h-[80vh] flex relative py-10 px-4">
          {/* Left */}
          <Link to={''} target="_blank" className="w-[65%] h-[100%] hover:mt-1 bg-[#ffffff] hover:bg-[#fefefb] group relative max-sm:hidden mx-5
              rounded-[70px] overflow-hidden transition-all duration-500 ease-in-out shadow-xs hover:shadow-lg"
            >
              <div className='mr-12 mt-10'>
                <p className='flex justify-end text-[#364442] text-xl tracking-widest pb-1'>My</p>
                <p className='flex justify-end font-acron text-[#364442] text-4xl'>AI</p>
              </div>
              <img className='ml-52 mt-36 group-hover:mt-32 scale-[136%] rounded-2xl transition-all
                duration-700 ease-in-out' 
                src={design} alt='Design Image'
                />
          </Link>
          {/* Right */}
          <Link to={''} target="_blank" className="w-[35%] h-[100%] hover:mt-1 bg-[#000000] hover:bg-[#1c1c1c] group relative max-sm:hidden mx-5
            rounded-[70px] overflow-hidden transition-all duration-500 ease-in-out shadow-xs hover:shadow-lg"
          >
            <div className='mr-12 mt-10'>
              <p className='flex justify-end text-white text-xl tracking-widest pb-1'>My</p>
              <p className='flex justify-end font-acron text-white text-4xl'>WEB3</p>
            </div>
            <img className='ml-52 mt-32 group-hover:mt-28 scale-[170%] rounded-2xl transition-all
              duration-700 ease-in-out' 
              src={figma} alt='Locale Image'
              />
          </Link>
        </div>
      </div> 
      <Footer/>
    </div>    
    
  )
}
