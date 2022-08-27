import React from "react"
import "./Header.css"

const Header = ({ homeButton, backHome }) => {
    return (
        <header className="header">
            <h1>Rotten Tomatillos</h1>
            {homeButton && <button onClick={() => backHome()}>Back to All Movies</button>}
        </header>
    )
}

export default Header