import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import "./Navbar.css";
import { useState } from "react";
import React from "react";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { IconContext } from "react-icons";
import { AiOutlineAlipayCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Leftbar from "../Admin/Leftbar";
import HoverMenuButton from "./HoverMenuButton";
import DropdownNav from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const [sidebar, setSidebar] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    const showSidebar = () => setSidebar(!sidebar);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
          <div>
          <Link className=" nav-logo  h-5 nav-item nav-links"  to="/Home" >SparkEvents</Link>
          </div>
        
        
          <IconContext.Provider value={{ color: '#fff' }}>
        <div>
          <Link to='/Leftbar' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          </div>
      </IconContext.Provider>
      </div>
        </nav>
      </>
      )}
    

export default Navbar;