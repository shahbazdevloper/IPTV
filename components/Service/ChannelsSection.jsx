"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function ChannelsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (divRef.current) observer.observe(divRef.current);

    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center bg-[#0e0e0e] py-16 text-white px-6"
      ref={divRef}
    >
      {/* Heading */}
      <div className="relative flex flex-col items-center text-center w-full max-w-5xl">
        <h1 className="border-emerald-600/50 font-bold uppercase text-emerald-600/10 text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
          CHANNELS
        </h1>
        <h2 className="text-lg lg:text-2xl font-bold absolute top-[75%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100%] md:w-full">
          Get Your <span className="text-[#29b081]">Free IPTV Test</span> with
          Express IPTV
        </h2>
      </div>

      {/* Content */}
      {isVisible && (
        <motion.div
          className="mt-10 max-w-7xl  bg-[#1b1b1b] rounded-lg p-8 text-center shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-md text-left p-4 md:text-lg leading-relaxed mb-6">
            Discover why thousands of viewers trust Express IPTV for their
            entertainment. Instead of browsing endless IPTV channel lists,
            experience the difference with a free IPTV trial. Our service
            delivers premium IPTV channels, live sports, movies, and
            international TV with ultra-fast streaming and zero buffering. With
            a test IPTV line, you can see the quality before starting your
            subscription. Whether you’re looking for HD IPTV, live TV streaming,
            or a reliable IPTV subscription, Express IPTV gives you the perfect
            solution.
          </p>
          <a
            href="https://jivo.chat/p36Je0zF3T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block   px-4 py-2 md:px-8 md:py-4  bg-[#30a079] text-white font-semibold rounded-full text-md shadow-md hover:bg-[#269067] transition"
          >
            Request Your Free IPTV Trial
          </a>
        </motion.div>
      )}
    </div>
  );
}
