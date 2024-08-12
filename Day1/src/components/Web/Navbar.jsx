


import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    const LinksData = [
        {
            title: 'Login',
            link: '/login'
        }
    ];

    return (
        <div className='w-full h-[8vh] flex items-center'>
            {/* Logo Section */}
            <div className='h-full w-1/4 flex items-center text-2xl font-bold text-primary'>
                <img 
                    src="https://ik.imagekit.io/yzjvopjsjb/Home/EventLogo.png?updatedAt=1722145380203" 
                    alt="Event Logo" 
                    className="h-full"
                />
            </div>
            {/* Links and ModeToggle */}
            <div className='h-full w-3/4 flex justify-end items-center gap-6 pr-8'>
                {
                    LinksData.map((data, index) => (
                        <li key={index} className="list-none">
                            <NavLink className='text-primary' to={data.link}>
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
















