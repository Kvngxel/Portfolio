import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation  } from "react-router-dom"

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Define a function to check if the current path matches the given path
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled, and update the state accordingly
      setScrolled(window.scrollY > 0);
    };
    // Attach the event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className={`flex justify-center w-[100%] md:w-auto pb-2 pt-2.5 mt-8 md:mx-[58vh] fixed top-0 md:left-0 md:right-0 z-10 bg-opacity-95 ${scrolled ? 'bg-white py-3 px-7 rounded-[30px]' : ''}`}>
      <Link to="/" className={`px-6 text-[#4c6763] font-medium text-lg rounded-3xl pt-1.5 pb-1 font-serif ${isActive('/') ? 'bg-gray-100' : ''}`}>Work</Link>
      <Link to="/about" className={`px-4 md:px-6 text-[#4c6763] font-medium text-lg rounded-3xl pt-1.5 pb-1 font-serif ${isActive('/about') ? 'bg-gray-100' : ''}`}>About</Link>
      <Link to="/play" className={`px-6 text-[#4c6763] font-medium text-lg rounded-3xl pt-1.5 pb-1 font-serif ${isActive('/play') ? 'bg-gray-100' : ''}`}>Play</Link>
      <Link to="/notes" className={`px-6 text-[#4c6763] font-medium text-lg rounded-3xl pt-1.5 pb-1 font-serif ${isActive('/notes') ? 'bg-gray-100' : ''}`}>Notes</Link>
      <Link to="/contact" className={`px-6 text-[#4c6763] font-medium text-lg rounded-3xl pt-1.5 pb-1 font-serif ${isActive('/contact') ? 'bg-gray-100' : ''}`}>Contact</Link>
    </div>
  );
};
