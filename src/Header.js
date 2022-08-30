import React from "react"
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ({ homeButton, backHome }) => {
    return (
        <header className="header">
            <h1>Rancid Tomatillos</h1>
            <Link to={'/'}onClick={() => backHome()}>{ homeButton && <button className='home-button'>Home</button>}</Link>
        </header>
    )
}

export default Header