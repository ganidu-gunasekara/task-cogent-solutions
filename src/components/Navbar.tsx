"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollToRegister = () => {
        const el = document.getElementById("register");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false); // Optional: close menu on mobile after click
    };
    return (
        <nav className="w-full bg-[#171717] text-white z-50 relative">
            <div className="flex items-center justify-between px-6 lg:px-16 py-6">
                <div className="ml-2 lg:ml-24">
                    <Image
                        src="https://cogentsolutions.ae/views/img/logos/cogent-logo-01.png"
                        alt="Cogent Solutions Logo"
                        width={200} // Adjust based on actual image ratio or preference
                        height={56} // Tailwind's h-14 = 56px
                        className="h-14 w-auto"
                    />
                </div>

                <ul className="hidden lg:flex space-x-6 text-sm text-[#878787]">
                    <li className="cursor-default">Event Overview</li>
                    <li className="cursor-default">Agenda</li>
                </ul>

                <button
                    onClick={scrollToRegister}
                    className="hidden lg:inline border border-white text-white rounded-full px-5 py-2 text-sm hover:bg-black hover:text-red-500 transition mr-2 lg:mr-24"
                >
                    Register Now
                </button>
                <div className="lg:hidden z-50">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden px-8 pb-6 flex flex-col space-y-4 text-sm text-[#878787]">
                    <ul className="space-y-3">
                        <li className="cursor-default">Event Overview</li>
                        <li className="cursor-default">Agenda</li>
                    </ul>
                    <button
                        onClick={scrollToRegister}
                        className="w-fit mt-4 border border-white text-white rounded-full px-6 py-2 text-sm hover:bg-black hover:text-red-500 transition"
                    >
                        Register Now
                    </button>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
