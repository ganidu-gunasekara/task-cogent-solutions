import React from "react";

const EventOverview = () => {
    return (
        <section className="w-full px-4 py-16 text-white bg-[#171717] mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Title */}
                <div className="flex w-full md:w-1/4 justify-center text-center">
                    <h3 className="text-4xl md:text-5xl font-light leading-tight">
                        Event <br className="hidden md:block" />
                        Overview
                    </h3>
                </div>



                {/* Content */}
                <div className="w-full md:w-3/4 space-y-6 text-lg md:text-xl text-justify">
                    <p>
                        Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve.
                        Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
                    </p>

                    <p>
                        Our forum will bring together business and technology experts, industry leaders, and visionaries to share their
                        insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as
                        Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats,
                        shifts in competitive dynamics, and evolving regulations.
                    </p>

                    <p>
                        Each session will delve into the implications, challenges, and opportunities these topics present, providing you with
                        practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique
                        chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking
                        professionals.
                    </p>

                    <p>
                        Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register
                        today and secure your place at this must-attend event!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EventOverview;
