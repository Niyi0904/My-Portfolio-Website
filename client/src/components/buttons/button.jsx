import React from "react";

const Buttons = ({style, text, onclick}) => {
    return (
        <div className={`relative text-white cursor-pointer rounded-xl ${style}`} onClick={onclick} >
            {text}
        </div>
    )
}

export default Buttons;