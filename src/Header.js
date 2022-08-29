import React from "react"
import "./Header.css"

const Header = ({ homeButton, backHome }) => {
    return (
        <header className="header">
            <h1>Rancid Tomatillos</h1>
            {homeButton && <button onClick={() => backHome()}>Home</button>}
        </header>
    )
}

export default Header