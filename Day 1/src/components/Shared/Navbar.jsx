// import { NavLink } from "react-router-dom";
// import { ModeToggle } from "../mode-toggle";

// const Navbar = () => {
//     const LinksData = [
//         {
//         title:'Home',
//         link:'/'
//     },

//         {
//         title:'Login',
//         link:'/login'
//     },

//         {
//         title:'Register',
//         link:'/register'
//     },
//         {
//          title:'Event',
//          link:'/event'
//     }
// ]
//   return (
//     <div className='w-full h-[8vh] flex flex-row justify-center items-center bg-primary/5 border b-2 border-primary'>
//     <div className='h-full w-1/4 flex flex-row justify-center items-center text-2xl font-bold text-primary'>
//     Logo
//     </div>
//     <div className='h-full w-3/4 flex flex-row justify-end items-center text-xl font-bold gap-6'>
//     {
//      LinksData.map((data ,index ) => (
//         <li key={index} className="list-none">
//             <NavLink to={data.link}>
//                 {data.title}
//             </NavLink>

//         </li>

//      ))
//     }
//     <ModeToggle/>
//     </div>
//     </div>
//   )
// }

// export default Navbar;
//  import { NavLink } from "react-router-dom";
// import { ModeToggle } from "../mode-toggle";

//  const Navbar = () => {
//     const LinksData = [
//         {
//             title: 'Home',
//             link: '/'
//         },
//         {
//             title: 'Login',
//             link: '/login'
//         },
//         {
//             title: 'Register',
//             link: '/register'
//         },
//         {
//             title: 'Event',
//             link: '/event'
//         }
//     ];

//     return (
//         <div className='w-full h-[8vh] flex flex-row justify-between items-center bg-primary/5 border-b-2 border-primary px-4'>
//             <div className='h-full flex flex-row items-center text-2xl font-bold text-primary gap-4'>
//                 <NavLink to='/admin/dashboard' className="text-xl font-bold">
//                     Dashboard
//                 </NavLink>
//                 <span>Elite</span>
//             </div>
//             <div className='h-full flex flex-row items-center text-xl font-bold gap-6'>
//                 {
//                     LinksData.map((data, index) => (
//                         <li key={index} className="list-none">
//                             <NavLink to={data.link}>
//                                 {data.title}
//                             </NavLink>
//                         </li>
//                     ))
//                 }
//                 <ModeToggle />
//             </div>
//          </div>
//     );
// }

// export default Navbar;






// import { NavLink } from "react-router-dom";
// import { ModeToggle } from "../mode-toggle";

// const Navbar = () => {
//     const LinksData = [
//         {
//             title: 'Home',
//             link: '/'
//         },
//         {
//             title: 'Login',
//             link: '/login'
//         },
//         {
//             title: 'Register',
//             link: '/register'
//         },
//         {
//             title: 'Event',
//             link: '/event'
//         }
//     ];

//     return (
//         <div className='w-full h-[8vh] flex flex-row justify-between items-center bg-primary/5 border-b-2 border-primary px-4'>
//             <div className='h-full flex flex-row items-center text-2xl font-bold text-primary gap-4'>
//                 <NavLink to='/admin/dashboard' className="text-xl font-bold">
//                     Dashboard
//                 </NavLink>
//                 <img
//                     src='https://i.pinimg.com/474x/6f/f4/48/6ff4482c534d4af9ba9d997543cba6f2.jpg' // Replace with your logo URL
//                     alt='Elite Logo'
//                     className='h-12 w-12' // Adjust the size as needed
//                 />
//             </div>
//             <div className='h-full flex flex-row items-center text-xl font-bold gap-6'>
//                 {
//                     LinksData.map((data, index) => (
//                         <li key={index} className="list-none">
//                             <NavLink to={data.link}>
//                                 {data.title}
//                             </NavLink>
//                         </li>
//                     ))
//                 }
//                 <ModeToggle />
//             </div>
//         </div>
//     );
// }

// export default Navbar;







// import { NavLink } from "react-router-dom";
// import { ModeToggle } from "../mode-toggle";

// const Navbar = () => {
//     const LinksData = [
//         {
//             title: 'Home',
//             link: '/'
//         },
//         {
//             title: 'Login',
//             link: '/login'
//         },
//         {
//             title: 'Register',
//             link: '/register'
//         },
//         {
//             title: 'Event',
//             link: '/event'
//         },
//         {
//             title: 'Feedback',
//             link: '/feedback'
//         }
//     ];

//     return (
//         <div className='w-full h-[8vh] flex flex-row justify-between items-center bg-pink-200 border-b-2 border-primary px-4'>
//             <div className='h-full flex flex-row items-center text-2xl font-bold text-primary gap-4'>
//                 <NavLink to='/admin/dashboard' className="text-xl font-bold">
//                     Dashboard
//                 </NavLink>
//                 <img
//                     src='https://i.pinimg.com/474x/6f/f4/48/6ff4482c534d4af9ba9d997543cba6f2.jpg' // Replace with your logo URL
//                     alt='Elite Logo'
//                     className='h-12 w-12' // Adjust the size as needed
//                 />
//             </div>
//             <div className='h-full flex flex-row items-center text-xl font-bold gap-6'>
//                 {
//                     LinksData.map((data, index) => (
//                         <li key={index} className="list-none">
//                             <NavLink to={data.link} className="text-primary hover:text-primary-dark">
//                                 {data.title}
//                             </NavLink>
//                         </li>
//                     ))
//                 }
//                 <ModeToggle />
//             </div>
//         </div>
//     );
// }

// export default Navbar;
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    const LinksData = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'Register',
            link: '/register'
        },
        {
            title: 'Feedback',
            link: '/feedback'
        }
    ];

    return (
        <div className='w-full h-[8vh] flex flex-row justify-between items-center bg-pink-200 border-b-2 border-primary px-4'>
            <div className='h-full flex flex-row items-center text-xl font-bold text-primary gap-4'>
                {/* <NavLink to='/admin/dashboard' className="text-lg font-bold">
                    Dashboard
                </NavLink> */}
                <img
                    src='https://i.pinimg.com/474x/6f/f4/48/6ff4482c534d4af9ba9d997543cba6f2.jpg' // Replace with your logo URL
                    alt='Elite Logo'
                    className='h-10 w-10' // Adjust the size as needed
                />
            </div>
            <div className='h-full flex flex-row items-center text-sm font-medium gap-6'>
                {
                    LinksData.map((data, index) => (
                        <li key={index} className="list-none">
                            <NavLink to={data.link} className="text-primary hover:text-primary-dark">
                                {data.title}
                            </NavLink>
                        </li>
                    ))
                }
                <ModeToggle />
            </div>
        </div>
    );
}

export default Navbar;
