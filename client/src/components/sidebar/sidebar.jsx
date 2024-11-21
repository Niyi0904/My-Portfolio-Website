import React from 'react';
import { Link } from 'react-scroll';
import { UseStateContext } from '../../context/context';

import { MdCancel } from "react-icons/md";

const SideBar = () => {
    const {closeMenu} = UseStateContext();
    return (
        <div className='fixed w-[70%] h-full menu z-[5] bg-gray-100 text-blue-950 text-sm rounded-bl-md '>
            <div className='flex left-[10%] top-[15%] relative'>
                <div className='flex flex-col text-left relative space-y-4 menu-item w-[30%] font-semibold'>
                    <h1 >
                        <Link to="home" smooth={true} duration={500} onClick={closeMenu} >
                            Home
                        </Link>
                    </h1>  
                    <h1>
                        <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
                            Skills
                        </Link>
                    </h1>
                    <h1>
                        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
                            Projects
                        </Link>
                    </h1>
                    <h1>
                        <Link to="certificates" smooth={true} duration={500} onClick={closeMenu}>
                            Certificates
                        </Link>
                    </h1>
                    <h1>
                        <Link to="contacts" smooth={true} duration={500} onClick={closeMenu}>
                            Contacts
                        </Link>
                    </h1>
                </div>
                <div className="relative bottom-5 left-[27%]" onClick={closeMenu}>
                    <MdCancel  className='text-blue-950 text-2xl font-light'/>
                </div> 
            </div>
        </div>
    )
}

export default SideBar; 
// fi-br-closed-captioning-slash menu-bar text-blue-950 text-2xl font-light