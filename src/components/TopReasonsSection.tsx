import React from "react";
import Image from "next/image";

const TopReasonsSection = () => {
    return (
        <section className="w-[95%] mx-auto text-white">
            <div
                className="flex flex-col md:flex-row justify-between gap-6 md:gap-[100px] px-4 md:px-6 pt-5 pb-8 rounded-[40px] border border-dashed border-white/30 max-w-[1200px] mx-auto"
                style={{
                    background: "linear-gradient(84deg, #1c015d -7.52%, #8045ce 108.41%)",
                    backgroundSize: "cover",
                    position: "relative",
                }}
            >
                {/* Image */}
                <div className="w-full md:w-1/2 px-6">
                    <Image
                        src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Finastra-UB-Egypt-Benefits-of-attending%20SMALL.jpg"
                        alt="Finastra Event"
                        width={800}
                        height={600}
                        className="rounded-[30px] w-full h-auto object-cover"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 md:pl-[33px] px-13">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 leading-snug">
                        TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025
                    </h3>
                    <ul className="space-y-4 text-base sm:text-lg">
                        <li className="flex items-start gap-3">
                            <Image
                                src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Icon_5h.png"
                                alt="Learn"
                                width={24}
                                height={24}
                            />
                            <span>Learn from industry experts</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image
                                src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Icon_4f.png"
                                alt="Trends"
                                width={24}
                                height={24}
                            />
                            <span>Stay ahead of emerging trends</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image
                                src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Icon_2ff.png"
                                alt="Connect"
                                width={24}
                                height={24}
                            />
                            <span>Connect with fellow banking professionals</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image
                                src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Icon_8d.png"
                                alt="Enhance"
                                width={24}
                                height={24}
                            />
                            <span>Enhance your knowledge, skills, and network</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Image
                                src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Icon_1f.png"
                                alt="Share"
                                width={24}
                                height={24}
                            />
                            <span>Share your expertise and experience with peers</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TopReasonsSection;
