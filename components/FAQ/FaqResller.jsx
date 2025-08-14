"use client"

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqResller() {
    const faqs = [
       
    {
        "question": "Is there a setup fee for IPTV?",
        "answer": "No, simply purchase credits and start using the service immediately."
    },
    {
        "question": "How many devices can I use per IPTV account?",
        "answer": "The number of devices is customizable based on the package, ranging from single-stream to unlimited concurrent connections."
    },
    {
        "question": "Do IPTV credits expire?",
        "answer": "No, credits never expire and can be used whenever needed to add or renew subscriptions."
    },
    {
        "question": "Can I recruit sub-resellers for IPTV?",
        "answer": "Yes, you can grant creation rights to master resellers or manage sub-resellers yourself."
    }

    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full  mx-auto flex flex-col gap-4 py-10 px-5">
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
