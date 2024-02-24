import React from "react";
import Burger from "./Burger";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={Logo} alt="Logo von Agathe Köllner" />
            <Burger />
        </div>
    )
}

export default Navbar