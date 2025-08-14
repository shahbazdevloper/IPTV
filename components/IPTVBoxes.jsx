"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function IPTVBoxes() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
    <div className="w-full px-4 py-8 bg-[#1b1a1a] flex flex-col items-center gap-8" ref={divRef}>
      {/* IPTV Boxes Section */}
      {isVisible && <motion.div
        className="w-full max-w-7xl text-center my-20"
        initial={{ scale: .5, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#30A179]">Top IPTV Boxes for</span>
            <span className="text-white"> Seamless Streaming</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-normal max-w-4xl mx-auto">
            Reliable, fast, and easy-to-use IPTV boxes for the best viewing experience.
          </p>
        </div>
        
        {/* Product Cards Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1 - Onyx IPTV Box */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.0, duration: 0.8 }}
          >
            <div className="w-full h-40 sm:h-[320px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="https://peoplestv.nl/wp-content/uploads/2025/06/OXM-252x300.png"
                alt="Onyx IPTV Box"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Onyx IPTV Box</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#30A179] mb-4">$159.99</p>
            <button className="w-full bg-[#30A179] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#28a06a] transition-colors text-sm sm:text-base">
              BUY NOW
            </button>
          </motion.div>
          
          {/* Card 2 - Tvip 705 s */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="w-full h-40 sm:h-[320px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="https://peoplestv.co/wp-content/uploads/2025/06/tvip-605s.jpg"
                alt="Tvip 705 s"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Tvip 705 s</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#30A179] mb-4">$209.99</p>
            <button className="w-full bg-[#30A179] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#28a06a] transition-colors text-sm sm:text-base">
              BUY NOW
            </button>
          </motion.div>
          
          {/* Card 3 - Formuler Z11 Pro */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="w-full h-40 sm:h-[320px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="https://peoplestv.co/wp-content/uploads/2025/06/z-11-pro-600x715.jpg"
                alt="Formuler Z11 Pro"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Formuler Z11 Pro</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#30A179] mb-4">$284.99</p>
            <button className="w-full bg-[#30A179] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#28a06a] transition-colors text-sm sm:text-base">
              BUY NOW
            </button>
          </motion.div>
          
          {/* Card 4 - Formuler Z11 Pro Max */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="w-full h-40 sm:h-[320px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="https://peoplestv.co/wp-content/uploads/2025/06/z11-pro-max-600x715.jpg"
                alt="Formuler Z11 Pro Max"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Formuler Z11 Pro Max</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#30A179] mb-4">$314.99</p>
            <button className="w-full bg-[#30A179] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#28a06a] transition-colors text-sm sm:text-base">
              BUY NOW
            </button>
          </motion.div>
        </div>
      </motion.div>}

      {/* Website Troubleshooting Section */}
  {/* Best IPTV Subscription Section */}
<motion.div
  className="max-w-[1400px] mx-auto mt-16 px-8"
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 1.2, duration: 0.8 }}
>
  <h2 className="text-3xl font-bold text-white text-center mb-8">
    Best IPTV Subscription in the U.S. – Why Choose Express IPTV
  </h2>

  <p className="text-gray-300 leading-relaxed mb-6">
    In a world where digital entertainment rules, finding a reliable, high-quality IPTV subscription can make all the difference. Express IPTV is redefining the way Americans stream TV—offering unlimited entertainment, ultra-fast servers, and unbeatable value. If you're looking for the best IPTV service in the USA, look no further than Express IPTV.
  </p>

  <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
    Why Express IPTV Is the Top IPTV Subscription Provider in the U.S.
  </h3>

  <p className="text-gray-300 leading-relaxed mb-4">
    When comparing IPTV providers, it’s essential to look at content quality, reliability, streaming performance, and affordability. Express IPTV leads with excellence in every category:
  </p>

  <ul className="list-disc list-inside text-gray-300 mb-8 space-y-3">
    <li><strong>45,000+ Live Channels:</strong> Stream everything from local U.S. news and sports to international programming in multiple languages. Whether you're into NFL, NBA, MLB, or niche global networks—we’ve got it all.</li>
    <li><strong>Over 60,000 Movies & TV Shows On-Demand:</strong> Get instant access to the newest blockbusters, trending series, classics, and documentaries. No need to pay extra for Netflix or Hulu.</li>
    <li><strong>4K, Full HD & HD Streaming:</strong> Watch your favorite content in the best possible quality. With our ultra-stable servers, you’ll enjoy zero buffering and smooth playback every time.</li>
    <li><strong>Fast Activation & Easy Setup:</strong> Get started in minutes. No long waits or complicated installations. Just plug, play, and stream.</li>
    <li><strong>Works on All Devices:</strong> Use Express IPTV on Amazon Firestick, Android TV, Smart TVs, iOS, Windows, MAG Boxes, and more. Total flexibility, anytime and anywhere.</li>
    <li><strong>Affordable Monthly Plans:</strong> Starting from just $14.99/month, you get premium streaming without the high cable bill.</li>
    <li><strong>Dedicated U.S.-Based Support:</strong> Our expert support team is available 24/7 to assist you with setup, troubleshooting, and guidance.</li>
  </ul>

  <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
    Compatible with All Major IPTV Apps
  </h3>

  <ul className="list-disc list-inside text-gray-300 mb-8 space-y-3">
    <li><strong>TiviMate:</strong> Perfect EPG interface and sleek layout</li>
    <li><strong>IPTV Smarters Pro:</strong> Multi-screen support and user-friendly features</li>
    <li><strong>XCIPTV Player:</strong> Advanced settings and dynamic playback</li>
    <li><strong>GSE Smart IPTV:</strong> Supports multiple formats and custom playlists</li>
    <li><strong>Perfect Player IPTV:</strong> Great for managing EPGs and M3U playlists</li>
    <li><strong>Kodi:</strong> Integrates easily with Express IPTV for a complete media center setup</li>
  </ul>

  <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
    Stream on the Best Devices – 100% Compatible with Express IPTV
  </h3>

  <ul className="list-disc list-inside text-gray-300 mb-8 space-y-3">
    <li>Amazon Firestick / Fire TV</li>
    <li>Android TV Boxes (Nvidia Shield, X96 Max, etc.)</li>
    <li>Apple TV & iOS Devices</li>
    <li>MAG Devices & Formuler Z Boxes</li>
    <li>Smart TVs (Samsung, LG, Sony, Vizio)</li>
    <li>Windows & Mac PCs</li>
    <li>Chromecast with Google TV</li>
    <li>Roku (with compatible apps)</li>
  </ul>

  <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
    Why Express IPTV Is the Best IPTV Service in the U.S.
  </h3>

  <p className="text-gray-300 leading-relaxed mb-6">
    With Express IPTV, you’re not just buying a subscription—you’re upgrading your entire entertainment experience. Our premium channel lineup, on-demand library, crystal-clear streaming quality, and rock-solid server uptime put us miles ahead of typical IPTV providers.
  </p>

  <p className="text-gray-300 leading-relaxed mb-6">
    Whether you're a sports fanatic, a movie buff, or just looking to cut the cord and save money, Express IPTV delivers the ultimate solution.
  </p>

  <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
    Start Streaming with Express IPTV Today
  </h3>

  <p className="text-gray-300 leading-relaxed">
    No contracts. No hidden fees. Just high-performance IPTV streaming designed for American viewers. Ready to make the switch? Get started with Express IPTV and unlock a world of endless entertainment today.
  </p>
</motion.div>

    </div>
  );
}