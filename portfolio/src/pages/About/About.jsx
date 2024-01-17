import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { Excel, Excel2 } from '../../assets/images'

export const About = () => {
  return (
    <div className="bg-[#ede7de] pt-10 pb-40">
      <Nav/>
      {/* Main */}
      <div className='md:my-36'>
        <div className='mt-[30%] mb-[7%] md:mt-32 md:mb-2'>
            <p className='pb-1 md:pb-0 text-center text-[5vh] md:text-[17vh] text-pry leading-none font-bold md:font-bold font-acron'>I'm Excel.</p>
        </div>
        {/* Mid Section */}
        <div className='md:flex mx-10 md:ml-[11%] md:mr-[8%] my-24'>
          {/* Top Left */}
          {/* Remember to add the hover ease transition */}
          <div className='relative h-[430px] group md:w-[30%] rounded-t-full overflow-hidden md:mt-[-25px]'>
            <div className='bg-pry h-20 w-full absolute bottom-0 z-10'>
              <div className='flex ml-4 mt-4'>
                <svg className='ml-7 opacity-[.8]' fill='#ede7de' width="42" height="42" viewBox="0 0 41 40"  xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5013 0.0664062C9.48964 0.0664062 0.5625 8.99331 0.5625 20.005C0.5625 31.0171 9.48964 39.9433 20.5013 39.9433C31.5142 39.9433 40.4404 31.0171 40.4404 20.005C40.4404 8.99403 31.5142 0.0673586 20.5011 0.0673586L20.5013 0.0664062V0.0664062ZM29.6451 28.8236C29.56 28.963 29.4483 29.0842 29.3163 29.1804C29.1843 29.2766 29.0346 29.3458 28.8758 29.3841C28.717 29.4223 28.5522 29.4289 28.3909 29.4034C28.2296 29.3779 28.0748 29.3208 27.9356 29.2355C23.2542 26.3759 17.3608 25.7283 10.4204 27.314C10.099 27.3871 9.76174 27.3296 9.48275 27.1541C9.20375 26.9787 9.00584 26.6996 8.9325 26.3783C8.89597 26.2192 8.89119 26.0545 8.91842 25.8935C8.94565 25.7326 9.00436 25.5786 9.09118 25.4404C9.17801 25.3021 9.29126 25.1824 9.42443 25.088C9.5576 24.9936 9.70808 24.9264 9.86726 24.8902C17.4625 23.1543 23.9775 23.9021 29.2332 27.114C29.8189 27.4736 30.0046 28.2378 29.6451 28.8236V28.8236ZM32.0856 23.3938C31.6356 24.1259 30.6785 24.3569 29.9475 23.9069C24.588 20.6119 16.4182 19.6578 10.0789 21.5821C9.25679 21.8305 8.38845 21.3671 8.13893 20.5464C8.01986 20.1518 8.06213 19.7262 8.25647 19.3627C8.4508 18.9993 8.78134 18.7277 9.1756 18.6076C16.4168 16.4105 25.4189 17.4747 31.5737 21.2569C32.3046 21.7069 32.5356 22.664 32.0856 23.394V23.3938ZM32.2951 17.7405C25.8689 13.9236 15.2665 13.5726 9.13107 15.4347C8.14583 15.7335 7.10393 15.1774 6.80536 14.1921C6.66179 13.7188 6.71209 13.2078 6.94521 12.7715C7.17832 12.3353 7.57515 12.0094 8.04845 11.8657C15.0915 9.7276 26.7999 10.1407 34.1985 14.5328C34.4093 14.6576 34.5935 14.8227 34.7404 15.0187C34.8874 15.2147 34.9942 15.4378 35.0548 15.6752C35.1154 15.9126 35.1286 16.1596 35.0936 16.4021C35.0586 16.6446 34.9761 16.8778 34.8508 17.0883C34.327 17.9745 33.1794 18.2666 32.2961 17.7405H32.2951Z"></path>
                </svg>
                <div className='pl-5'>
                    {/* Make spotify actual on repeat */}
                    <p className='text-md font-medium text-[#ede7de] opacity-[.8]'>On repeat</p>
                    <p className='text-md text-[#ede7de] text-body font-semibold'>Lonely at the top</p>
                </div>
              </div>
            </div>
            <img className='group-hover:hidden rounded-t-full' 
              src={Excel} alt='Image'
            />
            <img className='hidden group-hover:block rounded-t-full' 
              src={Excel2} alt='Image'
            />
          </div>
          {/* Top Right */}
          <div className='md:w-[70%] md:mx-10 md:px-12 max-sm:mt-10'>
          {/* Remember to make the temperature the exact temperature of where you are */}
            <p className='pb-1 md:pb-0 text-left text-[3vh] md:text-[7vh] text-pry leading-[120%] font-bold md:font-bold font-acron'>I'm a Fullstack Developer working remotely from 26°C Abuja, Nigeria.</p>
            <p className='text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl my-6'>
              In the last 5 years, I've excelled in digital design, focusing on front-end development,
              email, marketing, and app UI/UX. As a developer, I've worn multiple hats,
              showcasing my versatility and expertise.</p>
            <p className='text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl my-6'>
              Currently, my emphasis is on spearheading design efforts for freelance projects. I specialize in enabling donors to directly support the freelance community</p>
          </div>
        </div>
      </div>
      {/* Collaboration */}
      <div className='mx-11 md:mx-48 md:mt-48 '>
      <p className='pb-1 md:pb-0 text-left text-[3vh] md:text-[7vh] text-pry leading-[120%] font-bold md:font-bold font-acron'>I'm open to collaboration if your focus aligns with growth, sustainability,
        and promoting clean and efficient work practices.</p>
      <p className='text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl my-6 md:mr-10'>
        Dedicated to leaving a positive impact on our Earth for future generations, my goal is to
        actively contribute to ideals of sustainability. If you share the same commitment, I would love
        to engage in a conversation with you.</p>
      </div>
      {/* 1 - 4  */}
      <div className='my-16 md:my-32 md:mx-20 py-16 md:py-32 px-8 md:pl-44 md:pr-32 bg-[#f1ece4] md:rounded-[70px] drop-shadow-sm'>
        <div className='md:flex'>
          <div className='mx-3'>
            <p className='pb-1 md:pb-0 text-left text-[3vh] md:text-[5vh] text-pry leading-[120%] font-bold md:font-bold font-acron opacity-[.5]'>01</p>
            <p className='mt-2 md:mt-6 md:pb-0 text-left text-[2.5vh] md:text-[4vh] text-pry leading-[120%] font-bold md:font-bold font-acron'>Crafting Solutions</p>
            <p className='mt-5 text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl md:mr-10'>I engage in the art of sketching wireframes and crafting prototypes.
              The discourse around tangible designs, manifested in the browser, holds immeasurable value.
              While design tools have their limits, the true realization comes with a link that unites
              my team.
            </p>
          </div>
          <div className='mx-3 max-sm:mt-10'>
            <p className='pb-1 md:pb-0 text-left text-[3vh] md:text-[5vh] text-pry leading-[120%] font-bold md:font-bold font-acron opacity-[.5]'>02</p>
            <p className='mt-2 md:mt-6 md:pb-0 text-left text-[2.5vh] md:text-[4vh] text-pry leading-[120%] font-bold md:font-bold font-acron'>Fostering Team Harmony</p>
            <p className='mt-5 text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl md:mr-10'>Great design doesn't emerge in isolation but flourishes in a collaborative
              arena. It's a process of facilitation and iteration within a team. My design philosophy
              revolves around involving stakeholders, cultivating a collaborative atmosphere that thrives
              on constructive feedback.
            </p>
          </div>
        </div>
        <div className='md:flex mt-10 md:mt-20'>
          <div className='mx-3'>
            <p className='pb-1 md:pb-0 text-left text-[3vh] md:text-[5vh] text-pry leading-[120%] font-bold md:font-bold font-acron opacity-[.5]'>03</p>
            <p className='mt-2 md:mt-6 md:pb-0 text-left text-[2.5vh] md:text-[4vh] text-pry leading-[120%] font-bold md:font-bold font-acron'>Universal Accessibility Champion</p>
            <p className='mt-5 text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl md:mr-1'>
              Every design I embark upon aims for universal accessibility. It's not just a goal; it's the ethical
              path to tread. Accessible designs are a boon for the masses, not the privileged few.
            </p>
          </div>
          <div className='mx-3 md:ml-28 max-sm:mt-10'>
            <p className='pb-1 md:pb-0 text-left text-[3vh] md:text-[5vh] text-pry leading-[120%] font-bold md:font-bold font-acron opacity-[.5]'>04</p>
            <p className='mt-2 md:mt-6 md:pb-0 text-left text-[2.5vh] md:text-[4vh] text-pry leading-[120%] font-bold md:font-bold font-acron'>Eternal Innovation Journey</p>
            <p className='mt-5 text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl md:mr-10'>
              In my creative realm, everything is a canvas for change and experimentation. Not every stroke
              will create a masterpiece, but the journey is worth the attempt. Each endeavor becomes a
              lesson, a step towards continuous learning and improvement.
            </p>
          </div>
        </div>      
      </div>
      {/* Final quote */}
      <div className='mx-10 md:mx-[50vh]'>
        <p className='text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl my-6 md:mr-10'>Before I stepped into the world of product design, I was a web developer.
          Specializing in full-stack development, I weave digital wonders on the World Wide Web, translating
          ideas into interactive and visually appealing online experiences. With a keen eye for design and a
          knack for problem-solving, I thrive on the ever-evolving challenges of the tech world.
        </p>
        <p className='text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl my-6 md:mr-10'>Coding emails forced me to understand how HTML and CSS play together, a skill set
          Beyond the lines of code, my heart beats for the thrill of sports, Whether it's the pulse-pounding
          action on the field or the strategic maneuvers in a digital arena, I find joy in the diverse realms
          of athletic pursuits. 
        </p>
        <p className='text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl my-6 md:mr-10'>
          When the digital world and athletic delights take a backseat, you'll find me embracing the social
          tapestry of life, relishing moments with friends as we explore the rich cultural tapestry of Abuja.
          Whether it's a night out on the town or a cozy gathering at home, I believe in the power of
          connection and shared experiences, weaving the threads of friendship into the fabric of my life's
          narrative. So, join me on this exhilarating journey where technology meets passion, and every day
          is an opportunity to create, savor, and celebrate!
        </p>
        <p className='text-pry font-semibold md:font-medium font-body text-[17px] md:text-xl mt-6 md:mr-10'>
          See Abuja!!
        </p>
      </div>
      {/* Bottom Images */}
      <div className='flex mt-20 md:mt-32 md:mx-16'>
        <div className='relative md:w-2/3 md:mx-2 md:rounded-3xl bg-white group overflow-hidden'>
          <div className='bg-[#ede7de] text-pry rounded-lg ml-7 mb-5 px-5 py-2 h-10 absolute bottom-0 z-10 hidden group-hover:block'>
            <p>Abuja, Nigeria</p>
          </div>
          <img src='https://i.pinimg.com/originals/4e/30/60/4e30608a2fcb1a6d5f6cfdb47b070cfd.jpg'/>
        </div>
        <div className='max-sm:hidden relative w-1/3 mx-2 rounded-3xl bg-white group overflow-hidden'>
          <div className='bg-[#ede7de] text-pry rounded-lg ml-7 mb-5 px-5 py-2 h-10 absolute bottom-0 z-10 hidden group-hover:block'>
            <p>Abuja, Nigeria</p>
          </div>
          <img className='w-full h-full object-cover' src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Abuja_night_time.jpg'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
