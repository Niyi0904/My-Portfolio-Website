import { useState } from "react";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { skillsData, languageData } from "./skillsData";
import { click } from "@testing-library/user-event/dist/click";
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
        <h1 className="text-4xl font-extrabold flex justify-center">SKILLS</h1>
        <div id='card-parent' className="flex flex-wrap px-4 gap-x-12 pt-4 justify-center items-center w-full text-blue-950">
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

        <div>
            <div className="w-full flex justify-center mt-4 mb-4">
                <div className="text-3xl xs:text-xl font-extrabold flex justify-center mt-7 xs:w-72">LANGUAGES & FRAMEWORKS</div>
            </div>
            <div className="w-full items-center flex justify-center">
                <div className="flex flex-wrap justify-center items-center w-1/2 xs:w-full">
                    {languageData.map(language => (
                        <div className="px-2 m-8 xs:m-4" key={language.id}>
                            <img className="w-12 xs:w-8 mb-4 text-red-800" src={language.icon}/>
                            <p className="flex justify-center font-mono">{language.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)}

export default Skills;

{/* <div className="nic opacity-0 description pt-4 text-sm leading-3 bg-red-900">
<p className="relative">{skills.description}</p>
</div> */}
        
