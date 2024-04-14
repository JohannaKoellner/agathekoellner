import React from "react";
import Burger from "./Burger";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#">
                <img className="logo" src={Logo} alt="Logo von Agathe Köllner" />
            </a>
            <Burger />
        </div>
    )
}

export default Navbar