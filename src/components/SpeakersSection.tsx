import React from 'react';

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
    return (
        <div className="bg-gradient-to-r from- to-[#343434] p-14">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-semibold text-center text-white mb-10">
                    Our Speakers
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                    {speakers.map((speaker, index) => (
                        <div key={index}>
                            <div className="rounded-t-[2rem] w-full max-w-xs text-white bg-gradient-to-b from-[#2e003e] to-[#222121]">
                                <div className="overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-auto aspect-square object-cover rounded-[2rem] "
                                    />
                                    <div className="text-center p-4 mt-auto">
                                        <h5 className="font-bold text-base">{speaker.name}</h5>
                                        <p className="text-sm text-gray-300 mt-1">{speaker.title}</p>
                                        {speaker.company && (
                                            <p className="text-sm text-gray-400 mt-1">{speaker.company}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpeakersSection;
