// import React from 'react'

import { Footer } from "@/components/Web/Footer"
import Navbar from "@/components/Web/Navbar"
import { Outlet } from "react-router-dom"
const Weblayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden overflow-x-hidden m-0 p-0 flex flex-col overflow-y-auto'>
       <Navbar/>
       <Outlet/>
       <Footer/>

        </div>
  )
}
export default Weblayout;