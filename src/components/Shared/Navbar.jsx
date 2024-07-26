import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ]
  return (
    <div className="absolute top-0 left-0 w-full h-[10vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div className="w-1/3 h-full text-primary font-bold flex justofy-start itsems-center text-lg">
     <div className="flex-shrink-0">
                        <img className="block lg:hidden h-5w-auto" src="https://i.pinimg.com/736x/6a/f8/9c/6af89c11b88f11ca084d057798c24f6a.jpg" alt="Logo" />
                        <img className="hidden lg:block h-10" src="https://i.pinimg.com/736x/6a/f8/9c/6af89c11b88f11ca084d057798c24f6a.jpg" alt="Logo" />
                    </div>
                    </div>
      <div className='w-2/4h-full font-bold flex flex-row justify-end items-center gap-8'>

      
        {/* <Link to='/'>Home </Link>
        <Link to='/login'>Login </Link>
        <Link to='/register'>Register </Link> */}
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar