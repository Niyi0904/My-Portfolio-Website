import React, {useEffect, useState} from "react";
import { Link } from "react-scroll";

import { UseStateContext } from "../../context/context";


const Navbar = () =>  {
  const {handleResize, menubar, setMenubar, screenSize, menu, openMenu, closeMenu} = UseStateContext();

    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      handleResize()
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      if (screenSize <= 800) {
        setMenubar(true)
      } else {
        setMenubar(false);
      }
    }, [screenSize]);

  return (
    <div className="fixed w-full z-20 mb-11">
        <nav className="flex justify-between bg-gray-50 text-blue-950 space-x-4 h-12 lg:h-14 xl:h-14">
            <div className="relative left-[5%] top-2 text-3xl xs:text-2xl font-extrabold font-sans ">Nidavtech</div>
            {
                menubar ? <div className="flex relative right-[5%] top-3">
                  <p className="relative right-3 text-sm">Menu</p>
                    <i className="fi fi-br-menu-burger menu-bar text-blue-950 text-xl xs:text-lg font-light" onClick={() => {
                      openMenu();
                      console.log(menu);
                    }}></i>
                </div> 
                : 
                <ul className="relative bottom-1 flex justify-center space-x-10 pt-5 pr-20 font-serif font-bold nav-items pb-0">
                    <li>
                      <Link to="home" smooth={true} duration={500} >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="skills" smooth={true} duration={500} >
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link to="projects" smooth={true} duration={500} >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="certificates" smooth={true} duration={500} >
                        Certificates
                      </Link>
                    </li>
                    <li>
                      <Link to="contacts" smooth={true} duration={500} >
                        Contacts
                      </Link>
                    </li>
                </ul>
            }
        </nav>
    </div>
)}

export default Navbar;