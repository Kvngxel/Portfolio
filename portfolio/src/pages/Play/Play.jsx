import React from 'react'
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { PlayItems } from './PlayItems'

export const Play = () => {
  const playData = [
    { 
      ItemName: "Simon Game",
      ItemInfo: "Memory challenge with colored buttons. As you repeat sequences, The difficulty increases.",
      Link:"https://simon-game-one-psi.vercel.app",
      Image:"https://github.com/Kvngxel/excelPortfolio2023/blob/main/portfolio/src/assets/images/simon.png?raw=true"
    },{ 
      ItemName: "Drum Kit",
      ItemInfo: "Enjoy the sounds of the drumset at the tips of your fingers. Music is only a click away",
      Link:"https://drum-kit-six-blush.vercel.app/",
      Image:"data:image/jpeg;base64,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"

    },{ 
      ItemName: "Fibonacci",
      ItemInfo: "Turn hi-fi designs to lo-fi in one click - comes in nasty pink.",
      Link:"",
      Image:"data:image/png;base64,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"
    },
  ]
  return (
    <div className="bg-[#ede7de] pt-10 pb-40">
       <Nav/>
       <div className='flex justify-center mt-[22%] mb-[7%] md:mt-40 md:mb-2'>
          <p className='pb-1 md:pb-0 text-center text-[5vh] md:text-[16vh] text-pry leading-none font-bold md:font-bold font-acron'>Play.</p>
          <div className='justify-start invisible md:visible absolute md:relative'>
            <svg fill="none" height="68" viewBox="0 0 68 68" width="68" xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#fff"/></svg>
          </div>
        </div>
        <p className='text-pry text-center font-semibold md:font-medium font-body text-[17px] md:text-xl my-6 mx-10 md:mx-80'>
          A collection of tools and sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.
        </p>
        {/* Plays */}
        <div class='flex mx-5 md:mx-10 my-16 justify-center flex-wrap'>
          {playData.map((item, index) => (
              <PlayItems 
                key={index} 
                ItemName={item.ItemName}
                ItemInfo={item.ItemInfo}
                Link={item.Link}
                Image={item.Image}
              />
          ))}
        </div>
       <Footer/>
    </div>
  )
}
