import React from "react"
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({ homeButton, backHome }) => {
    return (
        <header className="header">
            <h1><span>Rancid</span> Tomatillos</h1>
            <Link to={'/'}onClick={() => backHome()}>{ homeButton && <button className='homeButton'>Home</button>}</Link>
        </header>
    )
}

export default Header