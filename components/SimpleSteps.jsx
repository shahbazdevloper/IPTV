"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function SimpleSteps() {
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
      className="relative w-full h-auto min-h-[550px] bg-black"
      ref={divRef}
    >
      {isVisible && (
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-white py-16 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="xl:max-w-[1100px] 2xl:max-w-[1200px] w-full px-6">
            {/* Section Container */}
            <motion.div
              className="w-full p-8 lg:p-12 rounded-2xl bg-gradient-to-b from-[#111] to-[#1a1a1a] shadow-lg space-y-16"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-left text-white text-3xl lg:text-5xl font-bold mb-8 leading-snug">
                Follow These Simple Steps to Start Your Express TV Free Trial
              </h2>

              {/* Step 1 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  Step 1: Create Your Free Trial Account
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>
                    Go to the{" "}
                    <a href="#" className="text-[#30a179] hover:underline">
                      Free Trial page
                    </a>
                  </li>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/step1.png"
                      width={1000}
                      height={800}
                      alt="Express TV Free Trial page"
                      className="my-8 rounded-xl shadow-xl"
                    />
                  </motion.div>
                  <li>Click <span className="font-medium">Order Now</span></li>
                  <li>Proceed to <span className="font-medium">Checkout</span></li>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/Step2.png"
                      width={1000}
                      height={800}
                      alt="Checkout page"
                      className="my-8 rounded-xl shadow-xl"
                    />
                  </motion.div>
                  <li>Enter billing info and create your Express TV password</li>
                  <li>Select any payment method (your trial is 100% free)</li>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/step3.png"
                      width={1000}
                      height={500}
                      alt="Order completion page"
                      className="my-8 rounded-xl shadow-xl"
                    />
                  </motion.div>
                  <li>
                    Click <span className="font-medium">Complete Order</span>  
                    <br />✅ Done! Your IPTV trial is now active.  
                    Check your email (and Spam/Junk folder) for login details.
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  Step 2: Enjoy 24-Hour Full Access
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>Log in to your account</li>
                  <li>Your 24-hour IPTV trial activates automatically</li>
                  <li>Stream across all supported devices</li>
                  <li>Access to live TV, movies, series, sports, and more</li>
                  <li>Note: Trial is for new users only and valid once</li>
                </ul>
              </div>

              {/* Why Choose */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  Why Choose Express TV’s Free Trial?
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>Instant activation – start watching immediately</li>
                  <li>Full access – same features as paid users</li>
                  <li>Test during live events</li>
                  <li>Global coverage – channels from all regions</li>
                  <li>No restrictions or hidden limits</li>
                </ul>
              </div>

              {/* Devices */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  Compatible With All Devices
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>Amazon Fire Stick & Fire TV Cube</li>
                  <li>Smart TVs (Samsung, LG, Sony)</li>
                  <li>Android TV Boxes (Nvidia Shield, T95, Beelink, etc.)</li>
                  <li>Apple Devices (iPhone, iPad, Apple TV, iMac)</li>
                  <li>Android Phones & Tablets</li>
                  <li>MAG Devices (MAG 322, 425A, 524, etc.)</li>
                  <li>Windows Devices</li>
                  <li>Roku, Chromecast, TiVo, Formuler, Dreamlink, and more</li>
                </ul>
              </div>

              {/* Apps */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  Works with All Popular IPTV Apps
                </h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>IPTV Smarters Pro</li>
                  <li>TiviMate IPTV Player</li>
                  <li>Smart IPTV (SIPTV)</li>
                  <li>XCIPTV Player</li>
                  <li>Flix IPTV</li>
                  <li>Duplex IPTV</li>
                  <li>GSE Smart IPTV</li>
                  <li>Perfect Player</li>
                  <li>Kodi</li>
                  <li>Lazy IPTV, Televizo, ProgTV, OTT Navigator, and more</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-12">
                <motion.button
                  className="bg-[#30a179] px-12 py-5 text-white rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:bg-[#278a66] transition-all"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link href="#">View Subscription Plans</Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
