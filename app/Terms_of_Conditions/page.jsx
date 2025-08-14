"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language]?.Terms_and_Conditions || translations["en"]?.Terms_and_Conditions; // Fallback to English if translations are missing

  if (!t) return <div>Loading...</div>;

  return (
    <main>
      <Header />
            <div className="relative w-full h-[400px] lg:h-[400px] py-5 overflow-hidden">
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
                                         Terms and Conditions
      
                                          </span>
                                      </div>
                                      <div className="text-center text-white text-xl font-normal max-w-[1200px] ">
                                          Welcome to Express IPTV! These Terms and Conditions outline the rules and regulations for using our website and services. By accessing or using our services, you agree to comply with these terms. If you disagree with any part of these terms, please refrain from using our services.

                                      </div>
                                  </motion.div>
                              </div>
      <div className="py-32 text-white min-h-screen">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >

            {t.other_description.map((item, index) => (
              <motion.div
                key={index}
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <motion.h2
                  className="text-2xl font-semibold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {item.heading}
                </motion.h2>
                <motion.p
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <FeedbackForm />
      <Footer />
    </main>
  );
}
