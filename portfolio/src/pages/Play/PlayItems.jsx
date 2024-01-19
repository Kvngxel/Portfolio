import React from 'react'
import { Link } from 'react-router-dom';

export const PlayItems = (props) => {
  return (
    <Link to={props.Link} target="_blank" 
        className='md:w-[600px] flex flex-item px-7 md:pl-[50px] md:pr-0 items-center my-4 rounded-lg 
            md:rounded-xl py-6 md:py-7 mx-4 bg-[#f1ece4] drop-shadow-sm'>
        <div className='w-2/3' >
            <p className='text-pry text-md md:text-lg font-semibold mb-2 md:my-3'>{props.ItemName}</p>
            <p className='text-[#4c6763] text-[14.5px] md:text-md font-semibold md:font-medium'>{props.ItemInfo}</p>
        </div>
        <div className='ml-4 mt-3 rounded-full bg-white w-[100px] h-[100px] overflow-hidden'>
            <img
                // src="data:image/png;base64,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" 
                src={props.Image}
                alt='Locale Image'
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
        </div>
    </Link>
  )
}
