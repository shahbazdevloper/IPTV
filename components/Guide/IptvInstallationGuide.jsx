"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function IptvInstallationGuide() {
  const platforms = [
    { image: "image(8).png", name: "Apple TV", description: "How to Install IPTV on Apple TV", link: "https://blog.expressiptv.com/how-to-install-iptv-on-apple-tv/" },
    { image: "IPTV-on-smart-TV.png", name: "Smart TV", description: "How to Install IPTV on Smart TV", link: "https://blog.expressiptv.com/how-to-install-iptv-on-smart-tv/" },
    { image: "IPTV-on-mobile-or-Tablet.png", name: "Mobile/Tablet", description: "How to Install IPTV on Mobile/Tablet", link: "https://blog.expressiptv.com/how-to-install-iptv-on-mobile-tablet/" },
    { image: "IPTV-on-laptop-or-computer.png", name: "Computer (Windows/Mac)", description: "How to Install IPTV on Computer (Windows/Mac)", link: "https://blog.expressiptv.com/how-to-install-iptv-on-computer-windows-mac/" },
    { image: "image(1).png", name: "Android Box", description: "How to Install IPTV on Android Box", link: "https://blog.expressiptv.com/how-to-install-iptv-on-android-box/" },
    { image: "Formuler-Box.png", name: "Formuler Box", description: "How to Install IPTV on Formuler Box", link: "https://blog.expressiptv.com/how-to-install-iptv-on-formuler-box/" },
    { image: "TVIP-box.png", name: "TVIP Box", description: "How to Install IPTV on TVIP Box", link: "https://blog.expressiptv.com/how-to-install-iptv-on-tvip-box/" },
    { image: "Onyx-Box.png", name: "Onyx Box", description: "How to Install IPTV on Onyx Box", link: "https://blog.expressiptv.com/how-to-install-iptv-on-onyx-box/" },
  ];

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
    <div className="w-full p-5 gap-10 flex flex-wrap my-20 px-10 justify-center" ref={divRef}>
      {platforms.map((platform, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div
            className="flex lg:flex-row w-96 lg:w-[650px] flex-col bg-[#1b1b1b] rounded-lg p-5 items-center gap-5 shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <img
              className="w-full max-w-[250px] h-[200px] rounded-lg object-cover"
              src={platform.image}
              alt={platform.name}
            />
            <div className="flex flex-col items-center sm:items-start gap-3">
              <div className="px-4 py-1 bg-[#0b2c2b] rounded-md text-[#30a079] text-base sm:text-lg font-medium">
                {platform.name}
              </div>
              <div className="text-white text-lg sm:text-xl font-medium text-center sm:text-left">
                {platform.description}
              </div>
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base sm:text-lg font-medium underline hover:text-[#30a079] flex justify-center items-center gap-2"
              >
                Learn More
                <img src="./rightlong.png" className="w-8 h-3 object-contain" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
