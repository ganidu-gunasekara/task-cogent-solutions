import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="w-full bg-[#171717] bg-[url('https://res.cloudinary.com/dbyioi2qq/q_auto/v1711694351/static/lightpng_1711694345_16780.png')] bg-no-repeat bg-cover bg-bottom pt-16 px-4 flex flex-col items-center text-center relative">
            
            {/* Organized by */}
            <p className="text-lg md:text-xl font-normal text-[#878787] mb-4 capitalize">Organized By</p>

            {/* Finastra logo */}
            <div className="w-[260px] md:w-[340px] pb-8">
                <Image
                    src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/img/finastra-boardroom.png"
                    alt="Finastra Logo"
                    width={340}
                    height={100}
                    className="mx-auto object-contain w-full"
                    priority
                />
            </div>

            {/* Heading */}
            <h2 className="text-white text-2xl md:text-5xl font-semibold mb-6 leading-snug px-2">
                Reimagine Banking:
                <br className="hidden md:block" />
                <span className="block">Adapt. Evolve. Thrive.</span>
            </h2>

            {/* Event Details */}
            <div className="text-[#878787] space-y-2 text-sm md:text-base">
                <p>Date: 9th April 2025</p>
                <p>Time: 9:30 AM - 2:00 PM GMT+2</p>
                <p className="px-4 md:px-0">The Nile Ritz-Carlton, Cairo, Egypt</p>
            </div>

            {/* Hero Image */}
            <div className="w-full px-4 flex justify-center mt-10">
  <Image
    src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Finastra-UB-Egypt-Event-Overview%20SMALL.jpg"
    alt="Event Overview"
    width={0}
    height={0}
    sizes="100vw"
    className="w-full max-w-[600px] h-auto object-cover rounded-2xl"
    quality={100}
  />
</div>

        </section>
    );
};

export default HeroSection;
