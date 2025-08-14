"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Aboutdetails() {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center my-8 pt-10 gap-6 lg:gap-32 px-5 py-10 lg:h-[500px]">

            {/* Image Section */}
            <motion.div
                className="w-full max-w-[550px] h-[300px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/service.png"
                    alt="Express IPTV Service"
                    width={550}
                    height={350}
                    className="w-full h-full object-cover rounded-xl"
                    priority
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="w-full max-w-[600px] px-4 lg:px-0 flex flex-col items-center text-white text-lg lg:text-xl leading-relaxed font-normal text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <b>At Express IPTV, we’re redefining the way the world watches TV.</b><br />
 Backed by a team of digital media experts and tech innovators, we offer a viewing experience that goes beyond traditional broadcasting. Whether it's live sports, global news, or blockbuster entertainment, our platform is designed to deliver seamless, high-speed, and high-definition streaming — anytime, anywhere.
 <br />
 <br />
 Through constant innovation and a customer-first approach, Express IPTV has become a trusted name in IPTV services, offering flexible access to content that fits every lifestyle.
            </motion.div>
        </div>
    );
}
