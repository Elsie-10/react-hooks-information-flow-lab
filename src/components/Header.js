import React from "react"

function Header({onDarkModeClick, isDarkMode}){
    return(
        <header>
            <h2>
                <button onClick={onDarkModeClick}>
                    {isDarkMode? "Light" : "Dark"} Mode
                </button>
            </h2>
        </header>
    )
}
export default Header