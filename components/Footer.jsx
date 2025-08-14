"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from 'framer-motion';
import "@/styles/social.css"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer
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
    <div ref={divRef} className="  flex flex-wrap lg:flex-nowrap items-center justify-center bg-gray-900 text-white">
      {isVisible &&
        <motion.div
          className="px-6  xl:max-w-[1400px]  md:px-1 lg:px-1 flex flex-wrap lg:flex-nowrap justify-between  lg:gap-[10px] bg-gray-900 text-white pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-[700px] flex flex-col justify-start items-start   mt-14"
            initial={{ x: -220, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <div className="flex items-center ">
                <Image
                  src="./logo.png"
                  alt="Streaming device showing sports Logo"
                  width={300}
                  height={300}
                />
              </div>
              <p className="opacity-70 text-lg leading-7">
                Stream over 45,000 live channels, movies on demand, and 4K content with ExpressIPTV — fast, secure, and completely buffer-free on all your devices. Try it free today at <Link  href="/" className="text-semibold text-white"> ExpressIPTV.com </Link>
              </p>
           
            </div>
       
          </motion.div>

          {/* 1st Footer Navigation Section */}
          <motion.div
            className="flex flex-col space-y-4 mt-14 w-40 lg:w-[300px]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Short Links</h3>
            <div className="space-y-2">
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
            </div>
          </motion.div>
          {/* 2nd Navigation Section */}
          <motion.div
            className="flex flex-col space-y-4 mt-14 w-40 lg:w-[300px]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Instruktioner</h3>
            <div className="space-y-2">
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
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-[550px] flex flex-col gap-6 xl:gap-2 mt-14"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <Image src="./Localtion.png" alt="Location" className="object-contain w-10 h-auto" width={0} height={0} />
                <p className="text-lg">Available daily from 10:00 AM to 12:00 AM</p>
              </div>
              <div className="flex space-x-4">
                <Image src="./Telegram.png" alt="Location" className="object-contain w-10 h-auto" width={0} height={0} />
                <p className="text-lg">Telegram: Join us for LIVE updates</p>
              </div>
              <div className="flex space-x-4 ">
                <Image src="./Email.png" alt="Email" className="object-contain w-10 h-auto" width={0} height={0} />
                <p className="text-lg">expresstv@hushmail.me</p>
              </div>
            </div>
          </motion.div>
        </motion.div>}
    </div>
  );
}
