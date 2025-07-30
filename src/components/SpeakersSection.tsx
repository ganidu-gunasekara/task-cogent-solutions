import React from 'react';

const speakers = [
  {
    name: 'Mr. Mohamed Elazzazy',
    title: 'Head of IT Governance and Change Management',
    company: 'Al-Baraka Bank Egypt',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png',
    modalId: '',
  },
  {
    name: 'Mr. Shehab Moustafa',
    title: 'Country Center of Excellence Director',
    company: 'Money Fellows',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg',
    modalId: 'speakers-02',
  },
  {
    name: 'Mr. Marwan Abouzeid',
    title: 'Principal Solutions Consultant & Customer Value Lead, MEA & APAC',
    company: 'Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/3s.jpg',
    modalId: 'speakers-03',
  },
  {
    name: 'Mr. Karim El Mourabet',
    title: 'Solution Consulting Director - MEA',
    company: 'Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/4s.jpg',
    modalId: 'speakers-04',
  },
  {
    name: 'Ms. Siobhan Byron',
    title: 'Executive Vice President, Universal Banking',
    company: 'Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/5s.jpg',
    modalId: 'speakers-05',
  },
  {
    name: 'Mr. Narendra Mistry',
    title: 'Chief Product and Technology Officer Universal Banking',
    company: 'Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/6s.jpg',
    modalId: 'speakers-06',
  },
  {
    name: 'Mr. Ahmed Hamdy Bahey El Din',
    title: 'Head of Information Technology',
    company: 'Incolease',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/7s.png',
    modalId: 'speakers-07',
  },
  {
    name: 'Mr. Emad Shawky Habib Hanna',
    title: 'Chief Data and Analytics Officer',
    company: 'Banque Misr',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/8s.png',
    modalId: '',
  },
  {
    name: 'Ms. Heba Yehia',
    title: 'Head of Digital Products',
    company: 'Arab African International Bank',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/9s.jpg',
    modalId: 'speakers-08',
  },
  {
    name: 'Mr. Hamid Nirouzad',
    title: 'Managing Director - Africa',
    company: 'Finastra Universal',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/10s.jpg',
    modalId: 'speakers-09',
  },
  {
    name: 'Mr. Rudy Kawmi',
    title: 'Managing Director - Middle East, Africa & Asia-Pacific',
    company: 'Finastra Universal Banking',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/11s.jpg',
    modalId: 'speakers-10',
  },
  {
    name: 'Mr. Matthew Hughes',
    title: 'Head of FS&I, International Markets',
    company: 'Atos',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/12s.jpg',
    modalId: 'speakers-11',
  },
  {
    name: "Mr. Daragh O'Byrne",
    title: 'Senior Director, Marketing, Universal Banking',
    company: 'Finastra',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/13s.JPG',
    modalId: 'speakers-12',
  },
  {
    name: 'Dr. Ismail Ali',
    title: 'Co-Founder and CEO of CARITech',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/14s.jpg',
    modalId: 'speakers-13',
  },
  {
    name: 'Ms. Riham Muhammad',
    title: 'Corporate CEX Senior Analyst',
    company: 'FABMISR',
    image: 'https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/15s.png',
    modalId: 'speakers-15',
  },
];

const SpeakersSection = () => {
  return (
    <div
      style={{ background: 'linear-gradient(-90deg, #343434 -7.52%, #000 108.41%)' }}
      className="py-5"
    >
      <div id="speakers" className="container">
        <div className="container d-md-flex align-items-center justify-content-center text-center text-md-start pt-md-1 pt-lg-3">
          <h3
            className="display-4 justify-content-center text-light"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Speakers
          </h3>
        </div>
        <div
          className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mt-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="col px-4"
              data-bs-toggle={speaker.modalId ? 'modal' : ''}
              data-bs-target={speaker.modalId ? `#${speaker.modalId}` : ''}
            >
              <a href={speaker.modalId ? `#${speaker.modalId}` : '#'}>
                <div className="card card-hover border-0 bg-transparent">
                  <div className="position-relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      style={{
                        borderRadius: '3.3rem',
                        boxShadow:
                          'rgba(159, 0, 198, 0.25) 0px 50px 100px -20px, rgba(0, 121, 242, 0.3) 0px 30px 60px -30px',
                      }}
                    />
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-5">
                      <span className="position-absolute top-0 start-0 w-100 h-100 opacity-35"></span>
                      <div className="position-relative d-flex zindex-2"></div>
                    </div>
                  </div>
                  <div className="card-body text-center px-0">
                    <h3 className="fs-lg fw-semibold pt-1 mb-2 text-light">{speaker.name}</h3>
                    <p className="fs-sm mb-0" style={{ color: 'rgb(182, 182, 182)' }}>
                      {speaker.title}
                      {speaker.company && <><br />{speaker.company}</>}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
