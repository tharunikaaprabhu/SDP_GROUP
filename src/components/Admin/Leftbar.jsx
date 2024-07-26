import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard,  Users } from 'lucide-react'
const Leftbar = () => {

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        }, {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        }
    ]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col bg-green-500/5 pt-10'>
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            <div className='h-1/6 w-full flex flex-col justify-center items-center'>
                logout
            </div>

        </div>
    )
}

export default Leftbar