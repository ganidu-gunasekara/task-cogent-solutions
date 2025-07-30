"use client";
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import SpeakerCardGrid from './SpeakerCardGrid';

const speakers = [
    {
        name: 'Mr. Mohamed Elazzazy',
        title: 'Head of IT Governance and Change Management',
        company: 'Al-Baraka Bank Egypt',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png',
    },
    {
        name: 'Mr. Shehab Moustafa',
        title: 'Country Center of Excellence Director',
        company: 'Money Fellows',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg',
    },
    {
        name: 'Mr. Marwan Abouzeid',
        title: 'Principal Solutions Consultant & Customer Value Lead, MEA & APAC',
        company: 'Finastra',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/3s.jpg',
    },
    {
        name: 'Mr. Karim El Mourabet',
        title: 'Solution Consulting Director - MEA',
        company: 'Finastra',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/4s.jpg',
    },
    {
        name: 'Ms. Siobhan Byron',
        title: 'Executive Vice President, Universal Banking',
        company: 'Finastra',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/5s.jpg',
    },
    {
        name: 'Mr. Narendra Mistry',
        title: 'Chief Product and Technology Officer Universal Banking',
        company: 'Finastra',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/6s.jpg',
    },
    {
        name: 'Mr. Ahmed Hamdy Bahey El Din',
        title: 'Head of Information Technology',
        company: 'Incolease',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/7s.png',
    },
    {
        name: 'Mr. Emad Shawky Habib Hanna',
        title: 'Chief Data and Analytics Officer',
        company: 'Banque Misr',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/8s.png',
    },
    {
        name: 'Ms. Heba Yehia',
        title: 'Head of Digital Products',
        company: 'Arab African International Bank',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/9s.jpg',
    },
    {
        name: 'Mr. Hamid Nirouzad',
        title: 'Managing Director - Africa',
        company: 'Finastra Universal',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/10s.jpg',
    },
    {
        name: 'Mr. Rudy Kawmi',
        title: 'Managing Director - Middle East, Africa & Asia-Pacific',
        company: 'Finastra Universal Banking',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/11s.jpg',
    },
    {
        name: 'Mr. Matthew Hughes',
        title: 'Head of FS&I, International Markets',
        company: 'Atos',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/12s.jpg',
    },
    {
        name: "Mr. Daragh O'Byrne",
        title: 'Senior Director, Marketing, Universal Banking',
        company: 'Finastra',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/13s.JPG',
    },
    {
        name: 'Dr. Ismail Ali',
        title: 'Co-Founder and CEO of CARITech',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/14s.jpg',
    },
    {
        name: 'Ms. Riham Muhammad',
        title: 'Corporate CEX Senior Analyst',
        company: 'FABMISR',
        image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/15s.png',
    },
];

const SpeakersSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.01 });
    return (
        <div ref={sectionRef} className="bg-gradient-to-r from- to-[#343434] p-14">
            <div className="container mx-auto px-4">
                <motion.h3
                    className="text-4xl md:text-4xl text-center text-white mb-10"
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Our Speakers
                </motion.h3>
                <SpeakerCardGrid speakers={speakers} isInView={isInView} />
            </div>
        </div>
    );
};

export default SpeakersSection;
