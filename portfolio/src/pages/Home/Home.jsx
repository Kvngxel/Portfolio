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
    <div className="bg-[#ede7de] pt-10 pb-40 w-[100%]">
      <Nav/>
      <div className='px-6 md:px-32 mt-4'>
        <div className='flex justify-end pr-36 mt-16 mb-[-40px] invisible md:visible absolute md:relative'>
          <svg fill="none" height="68" viewBox="0 0 68 68" width="68" xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#fff"/></svg>
        </div>
        <div className='mt-[30%] mb-[7%] md:mt-14 md:mb-2'>
          <p className='pb-1 md:pb-0 text-center text-[6vh] md:text-[17vh] text-pry leading-none font-bold md:font-bold font-acron'>Hi. I'm Excel.</p>
          <p className='text-center text-[6vh] md:text-[17vh] text-pry leading-none font-bold font-acron'>A Developer.</p>
        </div>
        <div className='flex justify-start pl-28 invisible md:visible absolute md:relative'>
          <svg fill="none" height="68" viewBox="0 0 68 68" width="68" xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#fff"/></svg>
        </div>
        <p className='pt-1 md:pt-0 text-center md:px-52 pb-4 text-sm md:text-xl text-pry font-body font-medium'>
          Blending code with a love for sports, I create immersive digital experiences
          that are engaging, accessible, and user-focused.
        </p>
      </div>
      {/* Top Section */}
      <div>
        <div className="h-[80vh] md:flex relative mb-24 md:mb-0 pt-10 md:pb-10 px-2 md:px-4">
        {/* Top Left ( Sites ) */}
          <Link to={''} target="_blank" className="flex md:w-[35%] h-[51%] md:h-[100%] hover:mt-1 bg-[#d094e5]
            hover:bg-[#dba1f1] group relative mx-5 rounded-3xl md:rounded-[70px] overflow-hidden
              transition-all duration-500 ease-in-out shadow-xs hover:shadow-lg mb-16 md:mb-0"
          >
            <div>
              <div className='mr-5 md:mr-12 mt-5 md:mt-10'>
                <p className='flex justify-end text-[#364442] text-lg md:text-xl tracking-widest pb-1'>Visit</p>
                <p className='flex justify-end font-acron text-[#364442] text-3xl md:text-4xl'>SITES</p>
              </div>
              <img className='ml-44 mt-28 md:ml-52 md:mt-36 group-hover:mt-24 group-hover:md:mt-32 scale-[170%] rounded-2xl transition-all
                duration-700 ease-in-out' 
                src={locale} alt='Locale Image'
                />
            </div>
          </Link>
        {/* Top Right ( Games ) */}
          <Link to={"/play"} className="flex md:w-[65%] h-[51%] md:h-[100%]
            hover:mt-1 bg-[#8ACDD7] hover:bg-[#9adfea] group relative mx-5 rounded-3xl md:rounded-[70px]
            overflow-hidden transition-all duration-500 ease-in-out
            shadow-xs hover:shadow-lg"
          >
            <div>
            <div className='mr-5 md:mr-12 mt-7 md:mt-10'>
                <p className='flex justify-end text-[#364442] text-lg md:text-xl tracking-widest pb-1'>Play</p>
                <p className='flex justify-end font-acron text-[#364442] text-3xl md:text-4xl'>GAMES</p>
              </div>
              <img className='ml-28 mt-20 md:ml-52 md:mt-36 group-hover:mt-16 group-hover:md:mt-32 scale-[139%] rounded-2xl transition-all
                duration-700 ease-in-out' 
                src={simon} alt='Locale Image'
                />
              </div>
          </Link>
        </div>
        {/* Bottom Section */}
        <div className="h-[80vh] md:flex relative pt-12 md:py-10 px-4">
          {/* Bottom Left */}
          <Link to={''} target="_blank" className="flex md:w-[65%] h-[50%] md:h-[100%] hover:mt-1 bg-[#F9F9E0]
              hover:bg-[#fafae3] group relative mx-3 md:mx-5 rounded-3xl md:rounded-[70px] overflow-hidden
                transition-all duration-500 ease-in-out shadow-xs hover:shadow-lg mb-[4rem] md:mb-0"
            >
            <div>
              <div className='mr-5 md:mr-12 mt-7 md:mt-10'>
                <p className='flex justify-end text-[#364442] text-lg md:text-xl tracking-widest pb-1'>View</p>
                <p className='flex justify-end font-acron text-[#364442] text-3xl md:text-4xl'>DESIGNS</p>
              </div>
              <img className='ml-24 mt-20 md:ml-52 md:mt-36 group-hover:mt-16 group-hover:md:mt-32 scale-[136%] rounded-2xl transition-all
                duration-700 ease-in-out' 
                src={design} alt='Design Image'
                />
            </div>
          </Link>
          {/* Bottom right */}
          <Link to={''} target="_blank" className="flex md:w-[35%] h-[51%] md:h-[100%] hover:mt-1 bg-[#a3d9ca] 
              hover:bg-[#afe4d6] group relative mx-3 md:mx-5
                rounded-3xl md:rounded-[70px] overflow-hidden transition-all duration-50
                ease-in-out shadow-xs hover:shadow-lg"
          >
            <div>
              <div className='mr-5 md:mr-12 mt-7 md:mt-10'>
                  <p className='flex justify-end text-[#364442] text-lg md:text-xl tracking-widest pb-1'>See</p>
                  <p className='flex justify-end font-acron text-[#364442] text-3xl md:text-4xl'>FIGMA</p>
                </div>
              <img className='ml-40 md:ml-52 mt-28 md:mt-32 group-hover:mt-24 md:group-hover:mt-28 scale-[170%] rounded-2xl transition-all
                duration-700 ease-in-out' 
                src={figma} alt='Locale Image'
                />
              </div>
          </Link>
        </div>
      </div> 

      <div className='mt-24 md:mt-0 pt-32 pb-10'>
          <p className='text-center text-[5.5vh] md:text-[16vh] text-pry leading-none font-bold font-acron'>In Progress.</p>
      </div>
      <p className='text-center mx-5 md:mx-0 md:px-64 pb-10 pt-2 text-sm md:text-lg text-pry font-body font-medium'>
          Engage in diverse stages of design and development, ranging from personal side
          projects to ongoing product design and development initiatives.
      </p>     
      <div className="h-[80vh] md:flex relative md:py-10 px-4">
          {/* Left */}
          <Link to={''} target="_blank" className="flex md:w-[65%] h-[50%] md:h-[100%] hover:mt-1 bg-[#ffffff]
              hover:bg-[#fefefb] group relative mx-3 md:mx-5 rounded-3xl md:rounded-[70px] overflow-hidden
                transition-all duration-500 ease-in-out shadow-xs hover:shadow-lg mb-20 md:mb-0"
            >
            <div>
              <div className='mr-5 md:mr-12 mt-7 md:mt-10'>
                <p className='flex justify-end text-[#364442] text-xl tracking-widest pb-1'>My</p>
                <p className='flex justify-end font-acron text-[#364442] text-4xl'>AI</p>
              </div>
              <img className='ml-24 mt-20 md:ml-52 md:mt-36 group-hover:mt-16 group-hover:md:mt-32 scale-[136%] rounded-2xl transition-all
                duration-700 ease-in-out' 
                src={design} alt='Design Image'
                />
            </div>
          </Link>
          {/* Right */}
          <Link to={''} target="_blank" className="flex md:w-[35%] h-[51%] md:h-[100%] hover:mt-1
               bg-[#000000] hover:bg-[#1c1c1c]  group relative mx-3 md:mx-5
                rounded-3xl md:rounded-[70px] overflow-hidden transition-all duration-50
                ease-in-out shadow-xs hover:shadow-lg"
          >
            <div>
            <div className='mr-5 md:mr-12 mt-7 md:mt-10'>
                <p className='flex justify-end text-[#ffffff] text-xl tracking-widest pb-1'>My</p>
                <p className='flex justify-end font-acron text-[#ffffff] text-4xl'>WEB3</p>
              </div>
              <img className='ml-40 md:ml-52 mt-28 md:mt-32 group-hover:mt-24 md:group-hover:mt-28 scale-[170%] rounded-2xl transition-all
                duration-700 ease-in-out' 
                src={figma} alt='Locale Image'
                />
              </div>
          </Link>
        </div>
      <Footer/>
    </div>    
    
  )
}
