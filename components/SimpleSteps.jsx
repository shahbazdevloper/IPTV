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
    <div
      className="relative w-full h-auto min-h-[550px] lg:min-h-[550px] overflow-hidden"
      ref={divRef}
    >
      {isVisible && (
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-white py-12 w-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="xl:max-w-[1400px] 2xl:max-w-[1500px] w-full px-6">
            {/* Step-by-Step Guide */}
            <motion.div
              className="w-full p-6 rounded-xl"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-left text-white text-2xl lg:text-4xl lg:leading-[4.5rem] font-semibold mb-6">
                Follow These Simple Steps to Start Your Express TV Free Trial
              </h2>

              {/* Step 1: Create Your Free Trial Account */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  Step 1: Create Your Free Trial Account
                </h3>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2">
                  <li>
                    Go to the{" "}
                    <a href="#" className="text-[#30a179] hover:underline">
                      Free Trial page
                    </a>
                  </li>
                  <Image
                    src="/step1.png"
                    width={1000}
                    height={800}
                    alt="Screenshot of the Express TV Free Trial page"
                    className="my-4 rounded-lg shadow-md"
                  />
                  <li>
                    Click <span className="font-medium">Order Now</span>
                  </li>
                  <li>
                    Proceed to <span className="font-medium">Checkout</span>
                  </li>
                   <Image
                    src="/Step2.png"
                    width={1000}
                    height={800}
                    alt="Screenshot of the Express TV Free Trial page"
                    className="my-4 rounded-lg shadow-md"
                  />
                  <li>
                    Enter your billing information and create a password for
                    your Express TV account
                  </li>
                  <li>
                    Select any payment method (don’t worry—your trial is 100%
                    free)
                  </li>
                     <Image
                    src="/step3.png"
                    width={1000}
                    height={400}
                    alt="Screenshot of the Express TV Free Trial page"
                    className="my-4 rounded-lg shadow-md"
                  />
                  <li>
                    Click <span className="font-medium">Complete Order</span>
                  </li>
                  <li>
                    ✅ Done! Your IPTV trial is now active. Check your email for
                    your login details. Make sure to also check the
                    <span className="font-medium"> Spam or Junk folder</span>.
                  </li>
                </ul>
              </div>

              {/* Step 2: Enjoy 24-Hour Full Access */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  Step 2: Enjoy 24-Hour Full Access
                </h3>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2">
                  <li>Log in to your account</li>
                  <li>A 24-hour IPTV trial is activated automatically</li>
                  <li>Stream across all supported devices</li>
                  <li>
                    Access to live TV, movies, series, PPV events, sports, and
                    more
                  </li>
                  <li>
                    ⚠️ Note: Trial is limited to new users only and valid once.
                  </li>
                </ul>
              </div>

              {/* Why Choose Express TV’s Free Trial? */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  🌟 Why Choose Express TV’s Free Trial?
                </h3>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2">
                  <li>
                    ⚡ Instant Activation – No waiting. Start watching in
                    seconds
                  </li>
                  <li>💯 Full Access – Enjoy everything our paid users get</li>
                  <li>
                    🕹️ Test During Live Events – Try it when it matters most
                  </li>
                  <li>🗺️ Global Coverage – Channels from every region</li>
                  <li>
                    🎯 No Restrictions – No hidden limits or blocked features
                  </li>
                </ul>
                <p className="text-white text-lg lg:text-xl mt-4">
                  You deserve the full experience before subscribing.
                </p>
              </div>

              {/* Compatible Devices */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  📱 Compatible With All Devices
                </h3>
                <p className="text-white text-lg lg:text-xl mb-4">
                  Express TV works seamlessly on all major platforms:
                </p>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2">
                  <li>Amazon Fire Stick & Fire TV Cube</li>
                  <li>Smart TVs (Samsung, LG, Sony)</li>
                  <li>Android TV Boxes (Nvidia Shield, T95, Beelink, etc.)</li>
                  <li>Apple Devices (iPhone, iPad, Apple TV, iMac)</li>
                  <li>Android Phones & Tablets</li>
                  <li>MAG Devices (MAG 322, 425A, 524, etc.)</li>
                  <li>Windows Devices</li>
                  <li>
                    Roku, Chromecast, TiVo, Formuler, Dreamlink, and many more
                  </li>
                </ul>
                <p className="text-white text-lg lg:text-xl mt-4">
                  🎥 No matter where you watch, Express TV supports it.
                </p>
              </div>

              {/* Supported IPTV Apps */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                  📦 Works with All Popular IPTV Apps
                </h3>
                <p className="text-white text-lg lg:text-xl mb-4">
                  You can use Express TV with your favorite apps using M3U
                  links, Xtream Codes, or Portal URLs:
                </p>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2">
                  <li>IPTV Smarters Pro</li>
                  <li>TiviMate IPTV Player</li>
                  <li>Smart IPTV (SIPTV)</li>
                  <li>XCIPTV Player</li>
                  <li>Flix IPTV</li>
                  <li>Duplex IPTV</li>
                  <li>GSE Smart IPTV</li>
                  <li>Perfect Player</li>
                  <li>Kodi</li>
                  <li>
                    Lazy IPTV, Televizo, ProgTV, OTT Navigator, and many more
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <motion.button
                className=" bg-[#30a179] px-8 py-3 text-white rounded-full text-md 2xl:text-xl font-medium flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="#"> Subscription Plans</Link>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
