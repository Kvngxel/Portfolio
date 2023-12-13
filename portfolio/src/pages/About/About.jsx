import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'

export const About = () => {
  return (
    <div className="bg-[#ede7de] pt-10 pb-40">
       <Nav/>
       <Footer/>
    </div>
  )
}
