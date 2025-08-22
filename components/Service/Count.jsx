"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function Count() {
  const { language } = useLanguage();
  const t = translations[language].Count_section;

  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (divRef.current) observer.observe(divRef.current);

    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, []);

  return (
    <section
      ref={divRef}
      className="w-full px-4 py-10 lg:py-20 flex justify-center"
    >
      {/* Container with same width as Header */}
      <div className="w-full xl:w-[1300px] 2xl:w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE - TEXT CONTENT */}
        <div className="w-full lg:w-1/2 text-white flex flex-col gap-8 text-center lg:text-left">
          {isVisible && (
            <motion.h1
              className="text-3xl lg:text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#30a079]">{t.highlighted_text}</span>{" "}
              {t.heading}
            </motion.h1>
          )}
          {isVisible && (
            <motion.p
              className="text-lg md:text-xl text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {t.description}
            </motion.p>
          )}
          {isVisible && (

 <motion.button
                  className="w-44 h-12 bg-[#30a179] hover:bg-[#259467] transition-all duration-300 text-white rounded-full text-md lg:text-lg font-medium flex items-center justify-center shadow-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                      {t.button_text}
                </motion.button>

           
          )}
        </div>

        {/* RIGHT SIDE - STATS WITH IMAGES */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-8">
          {/* Row 1 */}
          {isVisible && (
            <motion.div
              className="flex items-center gap-4 w-full max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="bg-[#30A179] flex-1 h-36 rounded-2xl flex flex-col justify-center pl-6">
                <h2 className="text-[42px] font-bold leading-none">10K+</h2>
                <p className="text-lg font-medium">{t.Live_tv_Channel}</p>
              </div>
              <div className="w-28 h-28 bg-gradient-to-r from-[#0C2D2C]/50 to-[#0C2D2C]/10 rounded-2xl flex justify-center items-center">
                <Image
                  src="/live.png"
                  alt="Live Icon"
                  className="w-20 h-20 object-contain"
                  width={80}
                  height={80}
                />
              </div>
            </motion.div>
          )}

          {/* Row 2 */}
          {isVisible && (
            <motion.div
              className="flex items-center gap-4 w-full max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="w-28 h-28 bg-gradient-to-l from-[#0C2D2C]/50 to-[#0C2D2C]/10 rounded-2xl flex justify-center items-center">
                <Image
                  src="/vod.png"
                  alt="VOD Icon"
                  className="w-20 h-20 object-contain"
                  width={80}
                  height={80}
                />
              </div>
              <div className="bg-[#0C2D2C] flex-1 h-36 rounded-2xl flex flex-col justify-center pl-6">
                <h2 className="text-[42px] font-bold leading-none">100K+</h2>
                <p className="text-lg font-medium">{t.Movie_TV_Shows}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
