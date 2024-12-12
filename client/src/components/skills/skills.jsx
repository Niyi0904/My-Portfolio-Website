import { useState } from "react";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import { GrNext } from "react-icons/gr";


import { skillsData } from "./skillsData";

const Skills = () =>  {
    const [toggle, setToggle] = useState(false);

    const handleToggle = (id) => {
        const parent = document.getElementById('card-parent')
        parent.childNodes.forEach(child => {
            if (child.classList.contains('expand')) {
                child.classList.add('unexpand');
                child.classList.remove('expand');
            }
        })
        const element = document.getElementById(id)
        const element2 = element.classList
        if (element2.contains('expand')) {
            element2.remove('expand');
        } else {
            element2.remove('unexpand');
            element2.add('expand');
        }
    }

    if (toggle) {
        const event = document.addEventListener('click', events => {
            const element = events.target
            console.log(element);
        }
        )
    }
  return (
    <div id="skills" className="relative top-20 text-blue-950 font-mono border-b-[2px] border-b-slate-200">
        <div className="flex flex-wrap px-4 gap-x-12 pt-4 justify-center items-center w-full text-blue-950 mb-10 gap-y-7">
            <div className="flex text-lg bg-blue-950 gap-x-16 h-20 w-52 text-white text-center rounded-2xl pt-7 pl-2">
                About Me 
                <GrNext />

            </div>

            <div className="flex text-lg bg-blue-950 gap-x-16 h-20 w-52 text-white text-center rounded-2xl pt-7 pl-2">
                Portfolio
                <GrNext />

            </div>

            <div className="flex text-lg bg-blue-950 gap-x-16 h-20 w-52 text-white text-center rounded-2xl pt-7 pl-2">
                Blog
                <GrNext />

            </div>
        </div>
        <h1 className="text-4xl font-extrabold flex justify-center mb-4">SKILLS</h1>
        <div id='card-parent' className="flex flex-wrap px-4 gap-x-12 pt-4 justify-center items-center w-full text-blue-950 mb-10">
            {skillsData.map(skills => (
                <div id={`divcard${skills.id}`} key={skills.id} className={`bg-gray-300 cards shadow-xl max-w-80 h-28 overflow-hidden xs:max-w-90 sm:max-w-90 rounded-xl xs:mb-8 sm:mb-8`}>
                    <div className="pt-4 px-4">
                        <div className="relative mb-1 mt-2 left-5 flex">
                            <img className="w-12" src={skills.icon} alt="Backend-Icon"/>
                            <IoMdArrowDropdown className="relative text-4xl left-[60%] hover:text-white hover:bg-blue-950 hover:rounded-lg" onClick={() => handleToggle(`divcard${skills.id}`) } />
                        </div>
                        <h1 className="border-b-2 py-3 font-bold">{skills.title}</h1>
                        <p className=" relative nic opacity-0 description pt-4 text-sm leading-3">{skills.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)}

export default Skills;

{/* <div className="nic opacity-0 description pt-4 text-sm leading-3 bg-red-900">
<p className="relative">{skills.description}</p>
</div> */}
        
