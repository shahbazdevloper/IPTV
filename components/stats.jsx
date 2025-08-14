'use client';

import React, { useEffect } from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion, useMotionValue, animate } from "framer-motion";

function AnimatedNumber({ value, suffix = "" }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      onUpdate: (v) => setDisplayValue(Math.floor(v)),
    });
    return controls.stop;
  }, [value, count]);

  return (
    <span>
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  const { language } = useLanguage();
  const t = translations[language].stats_section;

  const stats = [
    {
      icon: "/county.png",
      value: 130,
      suffix: "+",
      label: t.county,
    },
    {
      icon: "/user.png",
      value: 150,
      suffix: "K+",
      label: t.user,
    },
    {
      icon: "/Live_tv.png",
      value: 45,
      suffix: "K+",
      label: t.Live_tv,
    },
    {
      icon: "/movie_series.png",
      value: 100,
      suffix: "K+",
      label: t.movie_series,
    },
  ];

  return (
    <section className="bg-[#30A179] py-8">
      <div className="container mx-auto px-1">
        <motion.div
          className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-center max-sm:gap-7 sm:gap-2 max-2xl:gap-2 2xl:gap-24 sm:flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="card-shadow w-72 text-left bg-[#30A179]/3 flex rounded-lg p-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-4">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={56}
                  height={56}
                  className="pt-3 w-14 h-14 object-contain"
                />
              </div>
              <div className="pt-5">
                <div className="text-3xl font-bold text-white">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xl text-white mt-2">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
