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

 return (
    <stateContext.Provider
        value={{
            screenSize,
            menubar,
            setMenubar,
            handleResize,
            openMenu,
            closeMenu,
            menu
        }}
    >
        {children}
    </stateContext.Provider>
 )
}

export const UseStateContext = () => useContext(stateContext);

