"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from 'framer-motion';
import "@/styles/social.css";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const navigation = [
    { name: t.Home, href: "/" },
    { name: t.About_us, href: "/about" },
    { name: t.Pricing, href: "/Pricing" },
    { name: t.Blogs, href: "/blog" },
    { name: t.FAQs, href: "/faq" },
    { name: t.Troubleshoot, href: "/Troubleshoot" },
  ];

  const navigation2 = [
    { name: t.Apple_TV, href: "/" },
    { name: t.Smart_Tv, href: "/" },
    { name: t.Mobil_Surfplatta, href: "/" },
    { name: t.Datorn, href: "/" },
    { name: t.Android_Box, href: "/" },
    { name: t.Formuler_Box, href: "/" },
    { name: t.TVIP_Box, href: "/" },
    { name: t.Onyx_Box, href: "/" },
  ];

  const [isVisible, setIsVisible] = useState(true);
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
    <div ref={divRef} className="flex flex-col items-center justify-center bg-gray-900 text-white">
      {isVisible && (
        <motion.div
          className="w-full xl:max-w-[1400px] px-6 md:px-8 lg:px-10 py-12 
                     grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr] gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          {/* Left Section */}
          <motion.div
            className="flex flex-col justify-start items-start space-y-6"
            initial={{ x: -220, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="./logo.png"
              alt="Streaming device showing sports Logo"
              width={200}
              height={60}
              className="object-contain"
            />
            <p className="opacity-70 text-lg leading-7 max-w-[380px]">
              Stream over 45,000 live channels, movies on demand, and 4K content with ExpressIPTV — fast, secure, and completely buffer-free on all your devices. Try it free today at{" "}
              <Link href="/" className="font-semibold text-[#2EAE8C] hover:underline">
                ExpressIPTV.com
              </Link>
            </p>
          </motion.div>

          {/* Short Links */}
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Short Links</h3>
            <nav className="grid items-center gap-3">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-400 text-lg hover:text-[#2EAE8C] transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Instructions */}
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Instruktioner</h3>
            <nav className="grid items-center gap-3">
              {navigation2.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-400 text-lg hover:text-[#2EAE8C] transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image src="./Localtion.png" alt="Location" width={24} height={24} />
                <p className="text-lg">Available daily from 10:00 AM – 12:00 AM</p>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="./Telegram.png" alt="Telegram" width={24} height={24} />
                <p className="text-lg">Telegram: Join us for LIVE updates</p>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="./Email.png" alt="Email" width={24} height={24} />
                <p className="text-lg">expresstv@hushmail.me</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      )}

      <hr className="border-white border w-full my-6" />

      <div className="w-full xl:max-w-[1400px] flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-400 px-6 md:px-8 lg:px-10 pb-6">
        <p>Copyright 2025 | All rights reserved</p>
        <ul className="flex gap-4 text-sm">
          <li className="hover:text-white cursor-pointer">DMCA</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">Terms of Use</li>
        </ul>
      </div>
    </div>
  );
}
