"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function IPTVBoxes() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.4 }
    );
    if (divRef.current) observer.observe(divRef.current);
    return () => divRef.current && observer.unobserve(divRef.current);
  }, []);

  return (
    <div
      className="w-full px-6 py-24 bg-[#1b1a1a] flex flex-col items-center gap-20"
      ref={divRef}
    >
      {/* IPTV Boxes Section */}
      {isVisible && (
        <motion.div
          className="w-full max-w-7xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {/* Header */}
          <div className="mb-16 text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-snug">
              <span className="text-[#30A179]">Top IPTV Boxes</span>{" "}
              <span className="text-white">for Seamless Streaming</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Reliable, fast, and easy-to-use IPTV boxes built for the ultimate
              viewing experience.
            </p>
          </div>

          {/* Product Cards */}
          <div className="flex flex-wrap justify-start gap-8 lg:gap-8">
            {[
              {
                name: "Onyx IPTV Box",
                price: "$159.99",
                img: "https://peoplestv.nl/wp-content/uploads/2025/06/OXM-252x300.png",
              },
              {
                name: "Tvip 705 s",
                price: "$209.99",
                img: "https://peoplestv.co/wp-content/uploads/2025/06/tvip-605s.jpg",
              },
              {
                name: "Formuler Z11 Pro",
                price: "$284.99",
                img: "https://peoplestv.co/wp-content/uploads/2025/06/z-11-pro-600x715.jpg",
              },
              {
                name: "Formuler Z11 Pro Max",
                price: "$314.99",
                img: "https://peoplestv.co/wp-content/uploads/2025/06/z11-pro-max-600x715.jpg",
              },
            ].map((box, i) => (
              <motion.div
                key={box.name}
                className="bg-[#2a2a2a] rounded-2xl shadow-xl hover:shadow-2xl transition-all p-8 flex flex-col items-start w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[260px] max-w-[320px] border border-[#3a3a3a]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * i, duration: 0.8 }}
              >
                <div className="w-full h-52 sm:h-64 rounded-xl mb-6 flex items-center justify-center overflow-hidden bg-[#1f1f1f] hover:scale-105 transition-transform">
                  <Image
                    src={box.img}
                    alt={box.name}
                    width={250}
                    height={250}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-left">
                  {box.name}
                </h3>
                <p className="text-2xl font-extrabold text-[#30A179] mb-6 text-left">
                  {box.price}
                </p>
                <button className="w-full bg-[#30A179] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#28a06a] transition-colors text-base shadow-lg">
                  BUY NOW
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Divider */}
      <div className="w-full max-w-6xl border-t border-gray-700"></div>

      {/* Best IPTV Subscription Section */}
      <motion.div
        className="max-w-5xl mx-auto px-4 space-y-12 text-left"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.9 }}
      >
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Best IPTV Subscription in the U.S. –{" "}
            <span className="text-[#30A179]">Why Choose Express IPTV</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
            In a world where digital entertainment rules, finding a reliable,
            high-quality IPTV subscription can make all the difference. Express
            IPTV is redefining the way Americans stream TV—offering unlimited
            entertainment, ultra-fast servers, and unbeatable value.
          </p>
        </div>

        <div className="space-y-8">
          <SectionBlock
            title="Why Express IPTV Is the Top IPTV Subscription Provider in the U.S."
            items={[
              "45,000+ Live Channels – From local U.S. news and sports to global networks.",
              "60,000+ Movies & Shows On-Demand – Blockbusters, trending series, and classics.",
              "4K, Full HD & HD Streaming – Zero buffering, smooth playback.",
              "Fast Activation & Easy Setup – Plug, play, and stream in minutes.",
              "Works on All Devices – Firestick, Android TV, iOS/Windows, MAG, and more.",
              "Affordable Plans – Starting at just $14.99/month.",
              "24/7 U.S.-Based Support – Always here to help.",
            ]}
          />

          <SectionBlock
            title="Compatible with All Major IPTV Apps"
            items={[
              "TiviMate",
              "IPTV Smarters Pro",
              "XCIPTV Player",
              "GSE Smart IPTV",
              "Perfect Player IPTV",
              "Kodi",
            ]}
          />

          <SectionBlock
            title="Stream on the Best Devices"
            items={[
              "Amazon Firestick / Fire TV",
              "Android TV Boxes",
              "Apple TV & iOS",
              "MAG & Formuler Z Boxes",
              "Smart TVs (Samsung, LG, Sony, etc.)",
              "Windows & Mac PCs",
              "Chromecast with Google TV",
              "Roku (compatible apps)",
            ]}
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#30A179] mb-4">
            Start Streaming with Express IPTV Today
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            No contracts. No hidden fees. Just high-performance IPTV streaming
            built for U.S. viewers. Ready to make the switch? Get started today
            and unlock endless entertainment.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* Reusable SectionBlock component */
function SectionBlock({ title, items }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[#30A179] mb-4">{title}</h3>
      <ul className="list-disc list-inside text-gray-300 text-lg space-y-3 max-w-3xl">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
