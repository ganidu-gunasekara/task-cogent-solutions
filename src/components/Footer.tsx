import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 border-b border-white/10">
                    {/* Left Column */}
                    <div className="lg:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">Cogent Solutions™</h3>
                        <p className="mb-6 text-sm text-white/80 max-w-md">
                            Through our conferences we transform your business challenges into opportunities.
                            Our clients and customers are leading government entities and the Fortune 500 companies.
                        </p>
                        <h3 className="text-lg font-semibold mb-3">Awards</h3>
                        <div className="flex flex-wrap gap-4">
                            <img src="https://cogentsolutions.ae/views/img/logos/BPW-2024_2.png" alt="Award 1" className="h-20 w-20 object-contain" />
                            <img src="https://cogentsolutions.ae/views/img/logos/bestwork-04.png" alt="Award 2" className="h-20 w-20 object-contain" />
                            <img src="https://cogentsolutions.ae/views/img/logos/bestwork-03.png" alt="Award 3" className="h-20 w-20 object-contain" />
                            <img src="https://cogentsolutions.ae/views/img/logos/bestwork-01.png" alt="Award 4" className="h-20 w-20 object-contain" />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2">
                        <h3 className="text-lg font-semibold mb-4">Our Office</h3>
                        <ul className="space-y-6 text-sm text-white/80">

                            <li className="flex items-start gap-3">
                                <HiOutlineMapPin className="text-white text-xl mt-1" />
                                <p>
                                    <span className="block font-medium text-white">Middle East & Africa HQ</span>
                                    Office No: 209, The Metropolis Tower<br />
                                    Business Bay, Dubai, United Arab Emirates
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <HiOutlineMapPin className="text-white text-xl mt-1" />
                                <p>
                                    <span className="block font-medium text-white">Asia Pacific HQ</span>
                                    2nd floor Green Lanka Tower, Colombo<br />
                                    Sri Lanka
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <HiOutlineMapPin className="text-white text-xl mt-1" />
                                <p>
                                    <span className="block font-medium text-white">Saudi Arabia HQ</span>
                                    Riyadh, Saudi Arabia
                                </p>
                            </li>

                            <li className="flex items-center gap-3">
                                <HiOutlinePhone className="text-white text-xl" />
                                <p>+971 4 576 1039 / +971 50 643 5244</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <HiOutlineEnvelope className="text-white text-xl" />
                                <a href="mailto:partnerships@cogentsolutions.ae" className="hover:text-pink-500">
                                    partnerships@cogentsolutions.ae
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-white/60">
                    <p>© 2025 Cogent Solutions Event Management LLC. All Rights Reserved</p>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a
                            href="https://www.linkedin.com/company/cogent-solutions-event-management/mycompany/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0077b5]"
                        >
                            <FaLinkedinIn className="text-white text-lg" />
                        </a>
                        <a
                            href="https://www.facebook.com/cseventsuae/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#1877f2]"
                        >
                            <FaFacebookF className="text-white text-lg" />
                        </a>
                        <a
                            href="https://www.instagram.com/cogent_solutions/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500"
                        >
                            <FaInstagram className="text-white text-lg" />
                        </a>
                        <a
                            href="https://twitter.com/cseventsdxb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sky-500"
                        >
                            <FaTwitter className="text-white text-lg" />
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
