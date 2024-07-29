
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { LayoutDashboard, Users } from 'lucide-react'
// const Leftbar = () => {

//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         }, {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         }
//     ]
//     return (
//         <div className='h-screen w-1/6 flex justify-center items-center flex-col bg-red-500/5 pt-10'>
//             <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>
//                             <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//                                 {React.createElement(data.icon, { size: 20 })}
//                                 {data.title}
//                             </span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//             <div className='h-1/6 w-full flex flex-col justify-center items-center'>
//                 logout
//             </div>

//         </div>
//     )
// }


// export default Leftbar





// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, Users } from 'lucide-react';

// const Leftbar = () => {
//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         }, 
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col items-center'>
//             {/* Logo Image */}
//             <div className='mb-10 flex justify-center items-center'>
//                 <img 
//                     src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//                     alt="Event Logo" 
//                     className="w-24 h-auto"
//                 />
//             </div>
//             {/* Admin Links */}
//             <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>
//                             <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//                                 {React.createElement(data.icon, { size: 20 })}
//                                 {data.title}
//                             </span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//             {/* Logout */}
//             <div className='h-1/6 w-full flex flex-col justify-center items-center'>
//                 logout
//             </div>
//         </div>
//     );
// }

// export default Leftbar;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, Users, Calendar } from 'lucide-react'; // Assuming you have an icon for events

// const Leftbar = () => {
//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Events',
//             link: '/admin/events',
//             icon: Calendar // Assuming Calendar icon for events
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col items-center'>
//             {/* Logo Image */}
//             <div className='mb-10 flex justify-center items-center'>
//                 <img 
//                     src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//                     alt="Event Logo" 
//                     className="w-24 h-auto"
//                 />
//             </div>
//             {/* Admin Links */}
//             <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>
//                             <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//                                 {React.createElement(data.icon, { size: 20 })}
//                                 {data.title}
//                             </span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//             {/* Logout */}
//             <div className='h-1/6 w-full flex flex-col justify-center items-center'>
//                 logout
//             </div>
//         </div>
//     );
// }

// export default Leftbar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, Users, Calendar } from 'lucide-react';

// const Leftbar = () => {
//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Events',
//             link: '/events', // This should be /events to navigate to the Events page
//             icon: Calendar
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col items-center'>
//             {/* Logo Image */}
//             <div className='mb-10 flex justify-center items-center'>
//                 <img 
//                     src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//                     alt="Event Logo" 
//                     className="w-24 h-auto"
//                 />
//             </div>
//             {/* Admin Links */}
//             <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>
//                             <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//                                 {React.createElement(data.icon, { size: 20 })}
//                                 {data.title}
//                             </span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//             {/* Logout */}
//             <div className='h-1/6 w-full flex flex-col justify-center items-center'>
//                 logout
//             </div>
//         </div>
//     );
// }

// export default Leftbar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, Users, Calendar, Info, Star, Mail } from 'lucide-react'; // Assuming appropriate icons

// const Leftbar = () => {
//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Events',
//             link: '/events', // This should be /events to navigate to the Events page
//             icon: Calendar
//         },
//         {
//             title: 'About Us',
//             link: '/about',
//             icon: Info
//         },
//         {
//             title: 'Review',
//             link: '/Client',
//             icon: Star
//         },
//         {
//             title: 'Contact',
//             link: '/contact',
//             icon: Mail
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col items-center'>
//             {/* Logo Image */}
//             <div className='mb-10 flex justify-center items-center'>
//                 <img 
//                     src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//                     alt="Event Logo" 
//                     className="w-24 h-auto"
//                 />
//             </div>
//             {/* Admin Links */}
//             <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold mt-2 w-full'>
//                             <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//                                 {React.createElement(data.icon, { size: 20 })}
//                                 {data.title}
//                             </span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//             {/* Logout */}
//             <div className='h-1/6 w-full flex flex-col justify-center items-center'>
//                 logout
//             </div>
//         </div>
//     );
// }

// export default Leftbar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, Users, Calendar, Info, Star, Mail, LogOut } from 'lucide-react'; // Imported LogOut icon

// const Leftbar = () => {
//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Events',
//             link: '/events', // This should be /events to navigate to the Events page
//             icon: Calendar
//         },
//         {
//             title: 'About Us',
//             link: '/about',
//             icon: Info
//         },
//         {
//             title: 'Review',
//             link: '/Client',
//             icon: Star
//         },
//         {
//             title: 'Contact',
//             link: '/contact',
//             icon: Mail
//         },
//         {
//             title: 'Logout',
//             link: '/login', // Placeholder link for logout action
//             icon: LogOut
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col'>
//             {/* Logo Image */}
//             <div className='mb-10 flex justify-center items-center'>
//                 <img 
//                     src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//                     alt="Event Logo" 
//                     className="w-24 h-auto"
//                 />
//             </div>
//             {/* Admin Links with Logout Button */}
//             <div className='flex flex-col flex-grow'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2'>
//                             {React.createElement(data.icon, { size: 20 })}
//                             {data.title}
//                         </NavLink>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }

// export default Leftbar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, Users, Calendar, Info, Star, Mail, LogOut } from 'lucide-react'; // Imported LogOut icon

// const Leftbar = () => {
//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Users',
//             link: '/admin/users',
//             icon: Users
//         },
//         {
//             title: 'Events',
//             link: '/events', // This should be /events to navigate to the Events page
//             icon: Calendar
//         },
//         {
//             title: 'About Us',
//             link: '/about',
//             icon: Info
//         },
//         {
//             title: 'Review',
//             link: '/Client',
//             icon: Star
//         },
//         {
//             title: 'Contact',
//             link: '/contact',
//             icon: Mail
//         },
//         {
//             title: 'Logout',
//             link: '/login', // Placeholder link for logout action
//             icon: LogOut
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col'>
//             {/* Logo Image */}
//             <div className='mb-10 flex justify-center items-center'>
//                 <img 
//                     src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//                     alt="Event Logo" 
//                     className="w-24 h-auto"
//                 />
//             </div>
//             {/* Admin Links with Logout Button */}
//             <div className='flex flex-col flex-grow'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink 
//                             key={index} 
//                             to={data.link} 
//                             className={`p-5 border-b-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2 ${index < AdminLinks.length - 1 ? 'mb-4' : ''}`} // Added margin-bottom
//                         >
//                             {React.createElement(data.icon, { size: 20 })}
//                             <span className='ml-2'>{data.title}</span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }

// export default Leftbar;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LayoutDashboard, List, Calendar, Info, Star, Mail, LogOut } from 'lucide-react'; // Imported new icon

// const Leftbar = () => {
//     const AdminLinks = [
//         {
//             title: 'Dashboard',
//             link: '/admin/dashboard',
//             icon: LayoutDashboard
//         },
//         {
//             title: 'Event List',
//             link: '/admin/users', // Adjust the link if needed
//             icon: List // New icon for Event List
//         },
//         {
//             title: 'Events',
//             link: '/events', // This should be /events to navigate to the Events page
//             icon: Calendar
//         },
//         {
//             title: 'About Us',
//             link: '/about',
//             icon: Info
//         },
//         {
//             title: 'Review',
//             link: '/Client',
//             icon: Star
//         },
//         {
//             title: 'Contact',
//             link: '/contact',
//             icon: Mail
//         },
//         {
//             title: 'Logout',
//             link: '/login', // Placeholder link for logout action
//             icon: LogOut
//         }
//     ];

//     return (
//         <div className='h-screen w-1/6 flex flex-col'>
//             {/* Logo Image */}
//             <div className='mb-10 flex justify-center items-center'>
//                 <img 
//                     src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
//                     alt="Event Logo" 
//                     className="w-24 h-auto"
//                 />
//             </div>
//             {/* Admin Links with Logout Button */}
//             <div className='flex flex-col flex-grow'>
//                 {
//                     AdminLinks.map((data, index) => (
//                         <NavLink 
//                             key={index} 
//                             to={data.link} 
//                             className={`p-5 border-b-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2 ${index < AdminLinks.length - 1 ? 'mb-4' : ''}`} // Added margin-bottom
//                         >
//                             {React.createElement(data.icon, { size: 20 })}
//                             <span className='ml-2'>{data.title}</span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }

// export default Leftbar;



import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, List, Calendar, Info, Star, Mail, LogOut } from 'lucide-react'; // Imported icons

const Leftbar = () => {
    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Event List',
            link: '/admin/users',
            icon: List
        },
        {
            title: 'Events',
            link: '/events',
            icon: Calendar
        },
        {
            title: 'About Us',
            link: '/about',
            icon: Info
        },
        {
            title: 'Review',
            link: '/Client',
            icon: Star
        },
        {
            title: 'Contact',
            link: '/contact',
            icon: Mail
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
                {/* Spacer to push Logout button to the bottom */}
                <div className='mt-auto'>
                    <NavLink 
                        to='/login'
                        className='p-5 border-b-4 border-gray-500 hover:border-primary font-bold flex items-center gap-2'
                    >
                        <LogOut size={20} />
                        <span className='ml-2'>Logout</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Leftbar;
