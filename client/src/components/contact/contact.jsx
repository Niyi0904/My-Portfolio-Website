import React from "react";
import Buttons from "../buttons/button";

const Contact = () => {
    return (
        <div id="contacts" className="relative top-24 text-blue-950 font-mono flex flex-col justify-center items-center mt-10 border-b-[2px] border-b-slate-200">
            <h1 className="text-4xl font-extrabold flex justify-center mb-4">CONTACT</h1>
            <div className="relative ">
                <form className="">
                    <div>
                        <input type="text" placeholder="Name"  className="h-10 pl-2 mr-10 rounded-lg text-white bg-blue-950"/>
                        <input type="email" placeholder="Email" className="h-10 pl-2 mr-10 rounded-lg text-white bg-blue-950"/>
                        <input type="number" placeholder="Phone" className="h-10 pl-2 mr-10 rounded-lg text-white bg-blue-950"/>
                    </div>
                    <div className="flex justify-center mt-16 relative">
                        <input placeholder="Message" type="text" className="w-96 h-44 pl-2 rounded-lg text-white bg-blue-950"/>
                    </div>
                    <div className="flex justify-center mt-16" >
                        <Buttons style="project-btn w-40 text-center h-12 bottom-7 rounded-3xl bg-blue-950 py-3 font-bold hover:bg-blue-900 text-md" text='Send message'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;