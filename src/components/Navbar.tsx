"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between px-6 lg:px-16 py-6 bg-[#171717] text-white z-50 relative">
            {/* Logo */}
            <div className="ml-6 lg:ml-24">
                <img
                    src="https://cogentsolutions.ae/views/img/logos/cogent-logo-01.png"
                    alt="Cogent Solutions Logo"
                    className="h-14"
                />
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex space-x-6 text-sm text-[#878787]">
                <li className="cursor-default">Event Overview</li>
                <li className="cursor-default">Agenda</li>
            </ul>

            {/* Desktop Button */}
            <a
                href="#register"
                className="hidden lg:inline border border-white text-white rounded-full px-5 py-2 text-sm hover:bg-black hover:text-red-500 transition mr-6 lg:mr-24"
            >
                Register Now
            </a>

            {/* Hamburger Toggle for Mobile/Tablet */}
            <div className="lg:hidden z-[60] mr-4">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile/Tablet Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#171717] text-white flex flex-col items-start space-y-4 py-6 px-6 z-40">
                    <ul className="space-y-3 text-sm text-[#878787]">
                        <li className="cursor-default">Event Overview</li>
                        <li className="cursor-default">Agenda</li>
                    </ul>
                    <button
                        className="mt-4 border border-white text-white rounded-full px-6 py-2 text-sm hover:bg-black hover:text-red-500 transition"
                    >
                        Register Now
                    </button>
                </div>


            )}
        </nav>
    );
};

export default Navbar;
