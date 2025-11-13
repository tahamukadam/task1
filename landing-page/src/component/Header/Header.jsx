import React, { useState } from "react";
import image from "../../assets/image.png";
import "./Header.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="logo">
                <img src={image} alt="Logo" />
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>

            <nav className={isOpen ? "open" : ""}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
