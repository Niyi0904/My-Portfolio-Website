import React from "react";
import { languageData } from "../../components/skills/skillsData";

const AboutMe = () =>  {
  return (
    <div id="skills" className="relative top-20 text-blue-950 font-mono border-b-[2px] border-b-slate-200">
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

export default AboutMe;

{/* <div className="nic opacity-0 description pt-4 text-sm leading-3 bg-red-900">
<p className="relative">{skills.description}</p>
</div> */}
        
