import React from "react";
import Buttons from "../buttons/button";
import { UseStateContext } from "../../context/context";
import IsLoading from "../isloading/isloading";

const Contact = () => {
    const {sendEmail, handleEmail, handleMessage, handleName,handlePhone, name, email, phone, message, isLoading} = UseStateContext();
    return (
        
        <div id="contacts" className="relative top-24 text-blue-950 font-mono flex flex-col justify-center items-center mt-10 border-b-[2px] border-b-slate-200">
            <h1 className="text-4xl font-extrabold flex justify-center mb-4">CONTACT</h1>
            {isLoading && <IsLoading/>}
            <div className="relative ">
                <form id="contact-form">
                    <div className="xs:flex xs:flex-col sm:flex sm:flex-col">
                        <input value={name} onChange={handleName} type="text" name="name" placeholder="Name" required  className="h-10 pl-2 mr-10 rounded-lg text-white bg-blue-950 sm:mb-4 sm:w-80 xs:mb-4 xs:w-80"/>

                        <input value={email} onChange={handleEmail} type="email" name="email" placeholder="Email" required className="h-10 pl-2 mr-10 rounded-lg text-white bg-blue-950 sm:mb-4 sm:w-80 xs:mb-4 xs:w-80"/>

                        <input value={phone} onChange={handlePhone} type="tel" name="phone" placeholder="Phone Number" required className="h-10 pl-2 mr-10 rounded-lg text-white bg-blue-950 sm:w-80  xs:w-80"/>
                    </div>

                    <div className="flex justify-center mt-16 relative">
                        <textarea value={message} onChange={handleMessage} name="message" placeholder="Your Message" required className="w-96 h-44 pl-2 pt-3 rounded-lg text-white bg-blue-950"></textarea>
                    </div>

                    <div className="flex justify-center mt-16" >
                        <Buttons style="project-btn w-40 text-center h-12 bottom-7 rounded-3xl bg-blue-950 py-3 font-bold hover:bg-blue-900 text-md" text='Send message' onclick={sendEmail}/>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Contact;