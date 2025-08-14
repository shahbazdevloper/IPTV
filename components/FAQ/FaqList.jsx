"use client"

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqList() {
    const faqs = [
        {
            question: "What is IPTV?",
            answer:
                "IPTV stands for Internet Protocol Television, and it is a method of streaming television content over the internet, rather than using traditional cable or satellite.",
        },
        {
            question: "Do I need a fast internet connection for IPTV?",
            answer:
                "IPTV delivers your favorite TV shows, movies, and live channels directly to your device via the internet, allowing for more flexibility and fewer interruptions than traditional cable.",
        },
        {
            question: "What Are the Best IPTV Providers?",
            answer:
                "Express IPTV is one of the best providers in 2025, offering reliable service, flexible plans, and access to global content.",
        },
        {
            question: "Is IPTV Legal in the USA?",
            answer:
                "Yes, IPTV is legal in the USA as long as the content is sourced from legitimate providers. Always verify the provider's credentials before subscribing.",
        },
        {
            question: "What Devices Can I Use with IPTV?",
            answer:
                "You can enjoy Express IPTV on a variety of devices, including Firestick, Apple TV, Roku, smartphones, and tablets.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 py-10 px-5">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    className={`bg-[#1b1b1b] rounded-lg border p-5 cursor-pointer ${openIndex === index ? "border-[#30a079]" : "border-white/20"}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    {/* Question Section */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-white text-lg font-medium">{(index + 1) + " . " + faq.question}</h3>
                        <span className="text-[#30a079] text-2xl">
                            {openIndex === index ? (
                                <Image src="./down.png" className="w-5 h-5 object-contain" alt="Down Arrow" width={0} height={0} />
                            ) : (
                                <Image src="./right.png" className="w-5 h-5 object-contain" alt="Right Arrow" width={0} height={0} />
                            )}
                        </span>
                    </div>

                    {/* Answer Section with Framer Motion Animation */}
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                className="w-full border-t-2 mt-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <p className="text-white/70 text-base mt-3">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}
