"use client";
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import AgendaItem from './AgendaItem';
const agendaItems = [
    {
        time: '09:30 AM',
        title: 'Registration & Welcome Coffee',
        note: 'Registration',
    },
    {
        time: '10:00 AM',
        title: 'Opening Remarks',
        subtitle: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking',
    },
    {
        time: '10:10 AM',
        title: 'Keynote session: Digital Transformation in a Gen AI World',
        subtitle: 'Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking',
    },
    {
        time: '10:30 AM',
        title: 'Decoding the Future - Transformation: The Opportunity & Time is Now',
        subtitle: "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra",
    },
    {
        time: '11:00 AM',
        title: 'Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World',
        subtitle: [
            'Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking',
            'Ahmad Hamdy, Head of Information Technology, Incolease',
            'Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR',
        ],
    },
    {
        time: '11:30 AM',
        title: 'Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead',
        subtitle: [
            'Karim El Mourabet, Solution Consulting Director - MEA, Finastra Universal Banking',
            'Heba Yehia, Head of Digital Products, Arab African International Bank',
            'Ismail Ali, Co-Founder and CEO of CARITech',
            'Mohamed Elazzazy, Head of IT Governance, Al-Baraka Bank Egypt',
        ],
    },
    {
        time: '12:00 PM',
        title: 'Coffee Break & Networking',
    },
    {
        time: '12:30 PM',
        title: 'Panel Discussion: Cost to Serve: Deliver Customer Delight',
        subtitle: [
            'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking',
            'Shehab Moustafa, Country Center of Excellence Director, Money Fellows',
            'Matthew Hughes, Head of FS&I, International Markets, Atos',
            'Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr',
        ],
    },
    {
        time: '01:00 PM',
        title: 'The Essential Elements: What do you need to be "all things to all people"?',
        subtitle: 'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking',
    },
    {
        time: '01:30 PM',
        title: 'Making the case for change: The Question is How',
        subtitle: 'Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra',
    },
    {
        time: '01:50 PM',
        title: 'Closing Remarks',
        subtitle: 'Rudy Kawmi, Managing Director - MEA & Asia-Pacific, Finastra Universal Banking',
    },
    {
        time: '02:00 PM',
        title: 'Lunch',
    },
];

const AgendaSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.05 });

    return (
        <section ref={sectionRef} className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 text-center mb-8 md:mb-0">
                        <motion.h3
                            className="text-4xl pb-5 bg-gradient-to-r from-[#694ED6] to-[#C137A2] text-transparent bg-clip-text"
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        >
                            Agenda
                        </motion.h3>
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="bg-[#f9f1ff80] text-gray-800 p-6 rounded-lg">
                            {agendaItems.map((item, idx) => (
                                <AgendaItem key={idx} {...item} index={idx} isInView={isInView} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgendaSection;