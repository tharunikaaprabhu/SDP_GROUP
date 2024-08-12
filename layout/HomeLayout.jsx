import Leftbar from '@/components/Admin/Leftbar'
import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Outlet, Route } from 'react-router-dom'

const HomeLayout = () => {

    return (
        <>
                
                
                <Navbar />
            <div className='h-screen w-screen overflow-x-hidden m-0 p-0  flex-col overflow-y-auto'style = {{ backgroundImage:'url(https://media.istockphoto.com/id/1409232359/photo/event-planner-timetable-agenda-plan-on-organize-schedule-event-business-woman-using-mobile.jpg?s=2048x2048&w=is&k=20&c=VwBYNWpaQkbcCX7doGDhMq12b_9ft7rPEcZ6mA2krRM=)'}}>
                <Outlet />
            </div>
                <Footer />
        </>
    )
}

export default HomeLayout