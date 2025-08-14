"use client"

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";
import { FaqList } from "@/components/FAQ/FaqList2";

export function HelpCenter() {
  const { language } = useLanguage();
  const t = translations[language].NonStop_Entertainment_section;

  return (
    <div className="flex justify-center">
      <motion.div
        className="flex flex-col lg:flex-row max-w-[1400px] 2xl:max-w-[1500px] bg-neutral-950 py-16 items-center text-white gap-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* IMAGE LEFT */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          <Image
            src="/HelpCenterImgae.png"
            alt="Help Center Preview"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </motion.div>

        {/* TEXT RIGHT */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col text-center lg:text-left gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Help Center - FAQs
          </h2>

          <ul className="space-y-4 text-md md:text-xl xl:text-[16px] text-left">
            <FaqList />
          </ul>

          <motion.div className="flex justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2EAE8C] hover:bg-[#269b7b] transition-colors text-white text-xl font-medium rounded-full mt-4 w-40 h-12"
            >
              {t.button_text}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
