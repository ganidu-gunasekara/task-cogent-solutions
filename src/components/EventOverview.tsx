"use client";

import React from "react";
import TopReasonsSection from "./TopReasonsSection";
import { motion } from "framer-motion";
const EventOverview = () => {
    return (
        <>
            <section className="w-full px-4 py-16 text-white bg-[#171717] mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start pt-[100px] pr-4 pb-[100px] pl-4">

                    {/* Title */}
                    <motion.div
                        className="flex w-full md:w-1/4 justify-center text-center"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-5xl font-light leading-tight">
                            Event <br className="hidden md:block" />
                            Overview
                        </h3>
                    </motion.div>



                    {/* Content */}
                    <motion.div
                        className="w-full md:w-3/4 space-y-6 text-lg md:text-xl text-justify"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                    >
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
                    </motion.div>
                </div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <TopReasonsSection />
                </motion.div>
            </section>
        </>
    );
};

export default EventOverview;
