import { useContext, createContext, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({children}) => {
    const [screenSize, setScreenSize] = useState(undefined)
    const [menubar, setMenubar] = useState(false);
    const [menu, setMenu] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleResize = () =>  setScreenSize(window.innerWidth);

    const handleName = (e) => {
      const value = e.target.value;
      setName(value);
    }
    const handleEmail = (e) => {
      const value = e.target.value;
      setEmail(value);
    }
    const handlePhone = (e) => {
      const value = e.target.value;
      setPhone(value);
    }
    const handleMessage = (e) => {
      const value = e.target.value;
      setMessage(value);
    }

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
        setIsLoading(true);

        const form = document.getElementById('contact-form');
        const formData = new FormData(form);
    
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: { 'Content-Type': 'application/json' },
        });

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');

    
        if (response.ok) {
          setTimeout(setIsLoading(false), 1000);
          alert('Email sent successfully!');
        } else {
          setTimeout(setIsLoading(false), 1000);
          alert('Failed to send email.');
        };
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
            sendEmail,
            name,
            setName,
            email,
            setEmail,
            phone,
            setPhone,
            message,
            setMessage,
            handleEmail,
            handleMessage,
            handleName,
            handlePhone,
            isLoading
        }}
    >
        {children}
    </stateContext.Provider>
 )
}

export const UseStateContext = () => useContext(stateContext);

