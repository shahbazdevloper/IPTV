"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function FeedbackForm() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className="relative w-full min-h-[500px] lg:min-h-[550px] overflow-hidden"
    >
      {isVisible && (
        <>
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/Image_Grid.png"
              alt="Background Grid"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-r from-[#041610] via-[#041610]/90 to-[#30a179]/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] w-full px-6">
              <motion.div
                className="w-full lg:max-w-[750px] xl:max-w-[50%] p-6 lg:p-10 rounded-2xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h2
                  className="text-left text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug lg:leading-[3.5rem] mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Express IPTV is a leader in smart IPTV solutions.
                </motion.h2>

                <motion.p
                  className="text-left text-white text-base sm:text-lg lg:text-xl mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Enjoy the best and high-performance of our IPTV with the best
                  IPTV server technology. Have a buffer-free streaming
                  experience on any of your devices. Also, you can contact us
                  anytime of the year, 24 hours a day, 7 days a week, as our
                  customer support works around the clock.
                </motion.p>

                <motion.button
                  className="w-44 h-12 bg-[#30a179] hover:bg-[#259467] transition-all duration-300 text-white rounded-full text-md lg:text-lg font-medium flex items-center justify-center shadow-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
