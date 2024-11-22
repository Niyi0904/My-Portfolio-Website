import { useContext, createContext, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({children}) => {
    const [screenSize, setScreenSize] = useState(undefined)
    const [menubar, setMenubar] = useState(false);
    const [menu, setMenu] = useState(false);

    const handleResize = () =>  setScreenSize(window.innerWidth);

    const openMenu = () => {
        setMenu(true);
        console.log(menu)
    }
    const closeMenu = () => setMenu(false)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    async function sendEmail() {
        const form = document.getElementById('contact-form');
        const formData = new FormData(form);
    
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email.');
        }
      }

 return (
    <stateContext.Provider
        value={{
            screenSize,
            menubar,
            setMenubar,
            handleResize,
            openMenu,
            closeMenu,
            menu,
            sendEmail
        }}
    >
        {children}
    </stateContext.Provider>
 )
}

export const UseStateContext = () => useContext(stateContext);

