'use client';
import { motion } from "framer-motion";

type Speaker = {
    name: string;
    title: string;
    company?: string;
    image: string;
};

type Props = {
    speakers: Speaker[];
    isInView: boolean;
};

const SpeakerCardGrid = ({ speakers, isInView }: Props) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {speakers.map((speaker, index) => (
            <motion.div
                key={index}
                className="w-full max-w-xs rounded-t-[5rem] rounded-b-2xl text-white bg-gradient-to-b from-[#2e003e] to-[#222121]"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1 }}
            >
                <div className="overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-auto aspect-square object-cover rounded-[5rem]"
                    />
                    <div className="text-center p-4 mt-auto">
                        <h5 className="font-bold text-base">{speaker.name}</h5>
                        <p className="text-sm text-gray-300 mt-1">{speaker.title}</p>
                        {speaker.company && (
                            <p className="text-sm text-gray-400 mt-1">{speaker.company}</p>
                        )}
                    </div>
                </div>
            </motion.div>
        ))}
    </div>
);

export default SpeakerCardGrid;
