import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const navLinksStyle = {
        fontFamily: "var(--font-header)",
        fontSize: "var(--font-small-text-size)",
        color: "var(--black)",
        mixBlendMode: "difference"
    };
    const navLinksSlideStyle = {
        fontFamily: "var(--font-header)",
        fontSize: "var(--font-small-text-size)",
        color: "var(--white)",
        mixBlendMode: "difference"
    };


    return (
        <>
            {/* Navbar for desktop */}
            <nav className="fixed top-0 left-0 w-full hidden md:flex justify-end px-8 py-4">
                <ul className="flex space-x-6">
                    <li><Link to="/" style={navLinksStyle} className="hoverable">HOME</Link></li>
                    <li><Link to="/works" style={navLinksStyle} className="hoverable">WORKS</Link></li>
                    <li><Link to="/about" style={navLinksStyle} className="hoverable">ABOUT</Link></li>
                </ul>
            </nav>


            {/* Mobile hamburger */}
            <button
                onClick={toggleMenu}
                className="md:hidden fixed top-4 right-4 z-50 text-black"
                aria-label="Toggle menu"
            >
                {isOpen ? <FaTimes size={24} className='text-white' /> : <FaBars size={24} />}
            </button>

            {/* Slide menu */}
            <div
                className={`md:hidden fixed top-0 left-0 h-screen w-screen z-40 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } bg-black`}
            >
                <ul className="flex flex-col items-center justify-center space-y-4 text-white h-full">
                    <li><Link to="/" style={navLinksSlideStyle} className="hoverable">HOME</Link></li>
                    <li><Link to="/works" style={navLinksSlideStyle} className="hoverable">WORKS</Link></li>
                    <li><Link to="/about" style={navLinksSlideStyle} className="hoverable">ABOUT</Link></li>
            </ul>
            </div>
        </>
    );
};

export default Navbar;