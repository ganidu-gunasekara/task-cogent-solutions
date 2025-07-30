"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#171717] text-white z-50 relative">
            <div className="flex items-center justify-between px-6 lg:px-16 py-6">
                {/* Logo */}
                <div className="ml-2 lg:ml-24">
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
                    className="hidden lg:inline border border-white text-white rounded-full px-5 py-2 text-sm hover:bg-black hover:text-red-500 transition mr-2 lg:mr-24"
                >
                    Register Now
                </a>

                {/* Hamburger Toggle for Mobile/Tablet */}
                <div className="lg:hidden z-50">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="lg:hidden px-8 pb-6 flex flex-col space-y-4 text-sm text-[#878787]">
                    <ul className="space-y-3">
                        <li className="cursor-default">Event Overview</li>
                        <li className="cursor-default">Agenda</li>
                    </ul>
                    <a
                        href="#register"
                        className="w-fit not-visited:mt-4 border border-white text-white rounded-full px-6 py-2 text-sm hover:bg-black hover:text-red-500 transition"
                    >
                        Register Now
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
