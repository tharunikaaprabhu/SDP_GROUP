import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, LogOut } from 'lucide-react'; // Imported icons

const Sidebar = () => {
    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/adminpage',
            icon: LayoutDashboard
        },
        {
            title: 'User',
            link: '/userpage',
            icon: User
        }
    ];

    return (
        <div className='h-screen w-1/6 flex flex-col'>
            {/* Logo Image */}
            <div className='mb-10 flex justify-center items-center'>
                <img 
                    src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
                    alt="Event Logo" 
                    className="w-24 h-auto"
                />
            </div>
            {/* Admin Links */}
            <div className='flex flex-col flex-grow'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink 
                            key={index} 
                            to={data.link} 
                            className={`p-5 border-b-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2 ${index < AdminLinks.length - 1 ? 'mb-4' : ''}`} // Added margin-bottom
                        >
                            {React.createElement(data.icon, { size: 20 })}
                            <span className='ml-2'>{data.title}</span>
                        </NavLink>
                    ))
                }
            </div>
            {/* Logout Button */}
            <div className='p-5 border-t-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2'>
                <NavLink 
                    to='/login' // Adjust the link if needed
                    className='flex items-center gap-2'
                >
                    <LogOut size={20} />
                    <span className='ml-2'>Logout</span>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
