"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { FaqList } from "@/components/FAQ/FaqList3";

export default function Page() {
  const { language } = useLanguage();
  const [t, setT] = useState(translations[language]?.Troubleshooting || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (translations[language]?.Troubleshooting) {
      setT(translations[language].Troubleshooting);
      setLoading(false);
    } else {
      // Fallback to default language or error handling
      setT(translations["en"]?.Troubleshooting); // Example for default fallback
      setLoading(false);
    }
  }, [language]);

  if (loading) {
    return <div className="text-center py-32">Loading...</div>;
  }

  return (
    <main>
      <Header />
        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
                {/* Background Overlay with Zoom Animation */}
                <motion.div 
                    className="absolute inset-0 bg-[#050505] flex justify-center items-center py-12 lg:py-36"
                    initial={{ scale: 1.2 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 1.5, ease: "easeOut" }} // Smooth zoom-in effect
                >
                    <div className="relative w-full h-[400px]">
                        <motion.img
                            className="absolute inset-0 w-full h-full opacity-40 object-cover"
                            src="./Faq-banner.png"
                            alt="FAQ background"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ duration: 1.2 }} // Smooth fade-in
                        />
                    </div>
                </motion.div>
    
                {/* Text Content with Fade-in & Slight Slide-up Animation */}
                <motion.div 
                    className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }} // Fade in after slight delay
                >
                    <div className="text-center text-6xl font-bold">
                        <span className="text-[#30a079] ">
                            Express IPTV Troubleshooting Guide
                        </span>
                    </div>
                    <div className="text-center text-white text-xl font-normal ">
                        Setting up your IPTV service with Express IPTV is quick and easy! Follow these simple steps to get started
                    </div>
                </motion.div>
            </div>

      
   <FaqList />
      
      <FeedbackForm />
      <Footer />
    </main>
  );
}
