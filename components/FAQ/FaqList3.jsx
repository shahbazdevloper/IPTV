"use client"

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqList() {
const faqs = [
    {
        question: "Buffering or Freezing",
        answer: `One Channel Buffering: Contact us via live chat for immediate help.

All Channels Buffering: Use a VPN to resolve possible ISP or geo-based streaming issues.`,
    },
    {
        question: "App Crashing or Not Working",
        answer: `Restart the app and device.

Clear app cache/data if available.

If issues continue, reach out to support via chat.`,
    },
    {
        question: "“Channel Not Available” Error",
        answer: `This usually means your device's stream token has expired.
Fix:
Unplug your device, wait a few seconds, then plug it back in.

Tip: Avoid leaving the app running when not in use. Always reboot before watching.`,
    },
    {
        question: "No Audio/Video or Sync Issues",
        answer: `Single Channel Issue: Message us on chat for a quick fix.

Multiple Channels Affected: Restart your device/app. Reinstall if needed or try a different device.`,
    }
];


    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 py-10 px-5">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    className={`bg-[#1b1b1b] rounded-lg border p-5 cursor-pointer ${openIndex === index ? "border-[#30a079]" : "border-white/20"}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    {/* Question Section */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-white text-lg font-medium">{(index + 1) + " . " + faq.question}</h3>
                        <span className="text-[#30a079] text-2xl">
                            {openIndex === index ? (
                                <Image src="./down.png" className="w-5 h-5 object-contain" alt="Down Arrow" width={0} height={0} />
                            ) : (
                                <Image src="./right.png" className="w-5 h-5 object-contain" alt="Right Arrow" width={0} height={0} />
                            )}
                        </span>
                    </div>

                    {/* Answer Section with Framer Motion Animation */}
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                className="w-full border-t-2 mt-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <p className="text-white/70 text-base mt-3">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}
