import React from 'react';
import { certifications } from './certificationData';
import Buttons from '../buttons/button';
const Certifications = () => {
    return (
        <div id='certificates' className="relative top-24 text-blue-950 font-mono flex flex-col justify-center items-center mt-10 border-b-[2px] border-b-slate-200">
        <h1 className="text-4xl font-extrabold flex justify-center mb-4">CERTIFICATIONS</h1>
        <div className="flex flex-wrap px-4 gap-x-12 pt-10 justify-center items-center w-full text-blue-950">
            {certifications.map(certificate  => (       
                <div className="bg-white project-card w-80 min-h-80 xs:mt-8 rounded-lg sm:mt-8 mt-4 p-1">
                    <div className=" relative w-full flex h-[70%]">
                        <img className="relative w-[100%] rounded-lg h-[100%] project-image" src={certificate.image}/>
                    </div>
                    <div className="relative left-2 mt-4">
                        <h1 className="text-lg italic font-normal project-title">{certificate.title}</h1>
                        <h1 className='text-xs italic text-gray-500 mt-2'>{certificate.platform}</h1>
                    </div>
                </div>
            )) }  

        </div>
        <Buttons style="project-btn w-40 text-center h-12 bottom-7 rounded-3xl bg-blue-950 py-3 font-bold hover:bg-blue-900 text-md" text='View all'/>
    </div>
    )
}

export default Certifications;