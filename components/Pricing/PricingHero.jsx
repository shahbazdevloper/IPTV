"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function PricingHero() {
    const { language } = useLanguage();
    const t = translations[language].PricingBanner_section;

    return (
        <div className="relative w-full h-[400px] lg:h-[535px] overflow-hidden">
            {/* Background Overlay with Animation */}
            <motion.div
                className="absolute inset-0 bg-[#121212] flex justify-center items-center py-12 lg:py-36"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="relative w-full h-[356px]">
                    <motion.img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="./cinema.png"
                        alt="Cinema background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </div>
            </motion.div>

            {/* Text Content with Animations */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#30a079] text-3xl lg:text-[50px] font-bold">
                        Find the Perfect 
                    </span>
                    <span className="text-white text-3xl lg:text-[50px] font-bold">
                        {" "}Plan for You!
                    </span>
                </motion.div>

                <motion.div
                    className="text-center text-white text-md lg:text-2xl font-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Choose Your Premium IPTV Subscription and Access a World of Unlimited Entertainment.
                </motion.div>
            </div>
        </div>
    )
}