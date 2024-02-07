import React from 'react'

export const Footer = () => {    
  // Get the current year
  const currentYear = new Date().getFullYear();
  return (
    <div className='h-[80vh] pt-14 md:pt-44'>
      <div className="h-[29vh] md:flex justify-center relative pt-40 md:pt-20 md:pb-10 md:pl-32 md:pr-40 mx-8 md:mx-0">        
        <div className="flex md:justify-start items-center w-auto md:w-2/3 bg-[#f6f3ef] relative
            py-4 md:py-0 md:ml-28 md:mr-10 rounded-[70px]">
          <svg className='ml-7' width="45" height="45" viewBox="0 0 41 40"  xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5013 0.0664062C9.48964 0.0664062 0.5625 8.99331 0.5625 20.005C0.5625 31.0171 9.48964 39.9433 20.5013 39.9433C31.5142 39.9433 40.4404 31.0171 40.4404 20.005C40.4404 8.99403 31.5142 0.0673586 20.5011 0.0673586L20.5013 0.0664062V0.0664062ZM29.6451 28.8236C29.56 28.963 29.4483 29.0842 29.3163 29.1804C29.1843 29.2766 29.0346 29.3458 28.8758 29.3841C28.717 29.4223 28.5522 29.4289 28.3909 29.4034C28.2296 29.3779 28.0748 29.3208 27.9356 29.2355C23.2542 26.3759 17.3608 25.7283 10.4204 27.314C10.099 27.3871 9.76174 27.3296 9.48275 27.1541C9.20375 26.9787 9.00584 26.6996 8.9325 26.3783C8.89597 26.2192 8.89119 26.0545 8.91842 25.8935C8.94565 25.7326 9.00436 25.5786 9.09118 25.4404C9.17801 25.3021 9.29126 25.1824 9.42443 25.088C9.5576 24.9936 9.70808 24.9264 9.86726 24.8902C17.4625 23.1543 23.9775 23.9021 29.2332 27.114C29.8189 27.4736 30.0046 28.2378 29.6451 28.8236V28.8236ZM32.0856 23.3938C31.6356 24.1259 30.6785 24.3569 29.9475 23.9069C24.588 20.6119 16.4182 19.6578 10.0789 21.5821C9.25679 21.8305 8.38845 21.3671 8.13893 20.5464C8.01986 20.1518 8.06213 19.7262 8.25647 19.3627C8.4508 18.9993 8.78134 18.7277 9.1756 18.6076C16.4168 16.4105 25.4189 17.4747 31.5737 21.2569C32.3046 21.7069 32.5356 22.664 32.0856 23.394V23.3938ZM32.2951 17.7405C25.8689 13.9236 15.2665 13.5726 9.13107 15.4347C8.14583 15.7335 7.10393 15.1774 6.80536 14.1921C6.66179 13.7188 6.71209 13.2078 6.94521 12.7715C7.17832 12.3353 7.57515 12.0094 8.04845 11.8657C15.0915 9.7276 26.7999 10.1407 34.1985 14.5328C34.4093 14.6576 34.5935 14.8227 34.7404 15.0187C34.8874 15.2147 34.9942 15.4378 35.0548 15.6752C35.1154 15.9126 35.1286 16.1596 35.0936 16.4021C35.0586 16.6446 34.9761 16.8778 34.8508 17.0883C34.327 17.9745 33.1794 18.2666 32.2961 17.7405H32.2951Z"></path>
          </svg>
          <div className='pl-5'>
              {/* Make spotify actual on repeat */}
              <p className='text-md font-medium text-pry'>On repeat</p>
              <p className='text-md text-pry text-body font-semibold'>Lonely at the top</p>
          </div>
        </div>
        <div className="flex w-full md:w-1/3 md:mx-5 mt-14 md:mt-0">
            {/* Add Links to footer elements */}
          <div>
              <p className='px-5 pb-3 text-pry text-lg font-body font-semibold'>Elsewhere</p>
              <p className='px-5 pt-5 text-[#4c6763] text-lg font-body'>Figma</p>
              <p className='px-5 pt-5 text-[#4c6763] text-lg font-body'>Github</p>
              <p className='px-5 pt-5 text-[#4c6763] text-lg font-body'>CV</p>
              <p className='px-5 pt-5 text-[#4c6763] text-lg font-body'>LinkedIn</p>
          </div>
          <div className='ml-5 md:ml-0'>
              <p className='px-5 mb-3 text-pry text-lg font-body font-semibold'>Contact</p> 
              <p className='px-5 pt-5 text-[#4c6763] text-lg font-body'>Message</p>             
          </div>
        </div>
      </div> 
      <div className='max-sm:flex max-sm:justify-center mt-80 md:mt-0 md:ml-64 pb-10 font-body text-pry font-medium'>
        <p className='text-lg'>© El {currentYear}</p>
      </div>
    </div>
  )
}
