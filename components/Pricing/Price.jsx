"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function Price() {
  const { language } = useLanguage()
  const t = translations[language].pricing_section
  const [Price, setPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isConnection, setIsConnection] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsConnection(true)
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

  function handleConnection(index){
    setIsConnection(false)
    setTimeout(()=>{
      setIsConnection(true)
    },5)
    setPrice(index)
  }
  return (
    <div className="w-full px-4 py-8 bg-[#1b1a1a] flex flex-col items-center justify-center gap-8">
      {/* Heading Section */}
      {isVisible && <motion.div
        className="w-full max-w-6xl text-center my-16 flex flex-col items-center justify-center"
        initial={{ scale: .5, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="w-full max-w-4xl text-center flex flex-col items-center justify-center">
    <h1 className="text-4xl md:text-5xl font-bold text-center">
  <span className="text-[#30a079] mb-2 inline-block">{t.highlighted_text}</span>
  <span className="text-white mt-2 inline-block"> {t.heading}</span>
</h1>
          <p className="mt-8 text-white text-lg md:text-xl font-normal text-center max-w-4xl">
            {t.description}
          </p>
        </div>
        

        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-12">
          {["1 Month Package", "3 Month Package", "6 Month Package" ,"1 Year Package"].map((item, index) => (
            <div key={index} className={`px-6 py-3 rounded-full text-white text-lg font-medium flex items-center justify-center 
              ${index === Price ? "bg-[#30A179] hover:text-white" : "bg-[#2d2d2d] hover:bg-[#30A179] hover:text-white"} 
              transition-all cursor-pointer border border-[#30A179]/30`} 
              onClick={() => handleConnection(index)}>
              {item}
            </div>
          ))}
        </div>
      </motion.div>}
      
      {/* Pricing Cards Section */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12" ref={divRef}>
        {/* First Row - 1 Month Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <PriceCard t={t.one_Month} Price={Price + 1} />
        </motion.div>}
        
        {/* First Row - 6 Month Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div
            className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="w-[450px] 2xl:w-[450px]  max-sm:w-[350px] xl:w-[400px] relative overflow-hidden">
              <div className="transform sm:scale-100 scale-90 origin-top">
                <div className="relative w-full h-[1090px] rounded-[32.32px]">
                  <div className="absolute left-0 top-0 w-full h-[1079.97px] bg-[#30a079] rounded-[26px]" />
                  <div className="absolute left-0 top-[349.31px] w-full h-[0.87px] bg-[#aebdd6]" />
                  <div className="absolute left-[70.85px] top-[110.60px] text-center text-white text-[58px] font-semibold">
                    $ {(t.six_Month.plan_value * (Price + 1)).toString().slice(0, 6)}
                  </div>
                  <div className="absolute left-[70.85px] top-[41.24px] text-white text-[28.98px] font-medium">
                    {t.six_Month.heading}
                  </div>
                  <div className="absolute left-[70.19px] top-[85.30px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
                    {t.six_Month.plan_type}
                  </div>
                  <div className="absolute left-[70.19px] top-[198px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
                    {t.plan_connection}
                  </div>
               
                  <div className="absolute left-0 top-[430.35px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_one}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[365.56px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_two}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[559.64px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_three}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[688.92px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_four}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[818.20px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_five}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[947.49px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_six}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[494.85px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_seven}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[624.13px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_eight}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[753.42px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_nine}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[882.70px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_ten}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[1011.98px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_elevene}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[70.39px] top-[264.14px] w-[254.11px] h-[53.50px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white rounded-md" />
                    <div className="absolute w-[254.11px] h-[53.50px] flex justify-center items-center text-center text-[#30a079] text-lg font-semibold">
                      {t.button_text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>}
      </div>
      
      {/* Content Between Cards */}
      {isVisible && <motion.div
        className="w-full max-w-6xl text-center my-16 flex flex-col items-center justify-center"
        initial={{ scale: .5, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="mb-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            <span className="text-[#30A179]">Scandinavian </span>(Sweden, Norway, Denmark, Finland)
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-normal max-w-4xl mx-auto mb-12 text-center">
          Access Premium Scandinavian Content – The Best of Nordic Entertainment, Anytime, Anywhere
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {["1 Month Package", "3 Month Package", "6 Month Package" ,"1 Year Package"].map((item, index) => (
            <div key={index} className={`px-8 py-4 rounded-full text-white text-lg font-medium flex items-center justify-center 
              ${index === Price ? "bg-[#30A179] hover:text-white" : "bg-[#2d2d2d] hover:bg-[#30A179] hover:text-white"} 
              transition-all cursor-pointer border border-[#30A179]/30`} 
              onClick={() => handleConnection(index)}>
              {item}
            </div>
          ))}
        </div>
      </motion.div>}
      
      {/* Second Row - Duplicate Cards */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 mt-8">
        {/* Second Row - 1 Month Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <PriceCard t={t.one_Month} Price={Price + 1} />
        </motion.div>}
        
        {/* Second Row - 6 Month Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div
            className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <div className="w-[450px] 2xl:w-[450px]  max-sm:w-[350px] xl:w-[400px] relative overflow-hidden">
              <div className="transform sm:scale-100 scale-90 origin-top">
                <div className="relative w-full h-[1090px] rounded-[32.32px]">
                  <div className="absolute left-0 top-0 w-full h-[1079.97px] bg-[#30a079] rounded-[26px]" />
                  <div className="absolute left-0 top-[349.31px] w-full h-[0.87px] bg-[#aebdd6]" />
                  <div className="absolute left-[70.85px] top-[110.60px] text-center text-white text-[58px] font-semibold">
                    $ {(t.six_Month.plan_value * (Price + 1)).toString().slice(0, 6)}
                  </div>
                  <div className="absolute left-[70.85px] top-[41.24px] text-white text-[28.98px] font-medium">
                    {t.six_Month.heading}
                  </div>
                  <div className="absolute left-[70.19px] top-[85.30px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
                    {t.six_Month.plan_type}
                  </div>
                  <div className="absolute left-[70.19px] top-[198px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
                    {t.plan_connection}
                  </div>
               
                  <div className="absolute left-0 top-[430.35px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_one}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[365.56px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_two}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[559.64px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_three}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[688.92px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_four}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[818.20px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_five}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[947.49px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_six}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[494.85px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_seven}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[624.13px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_eight}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[753.42px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_nine}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[882.70px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_ten}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[1011.98px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_elevene}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[70.39px] top-[264.14px] w-[254.11px] h-[53.50px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white rounded-md" />
                    <div className="absolute w-[254.11px] h-[53.50px] flex justify-center items-center text-center text-[#30a079] text-lg font-semibold">
                      {t.button_text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>}
      </div>
      
      {/* Content Between Cards */}
      {isVisible && <motion.div
        className="w-full max-w-6xl text-center my-16 flex flex-col items-center justify-center"
        initial={{ scale: .5, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <div className="mb-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            <span className="text-[#30A179]">Arabic IPTV Package</span> (Middle East)
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-normal max-w-4xl mx-auto mb-12 text-center">
          Enjoy the Best of Arabic Entertainment – Tailored for the Middle Eastern Audience
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {["1 Month Package", "3 Month Package", "6 Month Package" ,"1 Year Package"].map((item, index) => (
            <div key={index} className={`px-8 py-4 rounded-full text-white text-lg font-medium flex items-center justify-center 
              ${index === Price ? "bg-[#30A179] hover:text-white" : "bg-[#2d2d2d] hover:bg-[#30A179] hover:text-white"} 
              transition-all cursor-pointer border border-[#30A179]/30`} 
              onClick={() => handleConnection(index)}>
              {item}
            </div>
          ))}
        </div>
      </motion.div>}
      
      {/* Third Row - Duplicate Cards */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 mt-8">
        {/* Third Row - 1 Month Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 1 }}
        >
          <PriceCard t={t.one_Month} Price={Price + 1} />
        </motion.div>}
        
        {/* Third Row - 6 Month Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 1 }}
        >
          <div
            className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
          >
            <div className="w-[450px] 2xl:w-[450px]  max-sm:w-[350px] xl:w-[400px] relative overflow-hidden">
              <div className="transform sm:scale-100 scale-90 origin-top">
                <div className="relative w-full h-[1090px] rounded-[32.32px]">
                  <div className="absolute left-0 top-0 w-full h-[1079.97px] bg-[#30a079] rounded-[26px]" />
                  <div className="absolute left-0 top-[349.31px] w-full h-[0.87px] bg-[#aebdd6]" />
                  <div className="absolute left-[70.85px] top-[110.60px] text-center text-white text-[58px] font-semibold">
                    $ {(t.six_Month.plan_value * (Price + 1)).toString().slice(0, 6)}
                  </div>
                  <div className="absolute left-[70.85px] top-[41.24px] text-white text-[28.98px] font-medium">
                    {t.six_Month.heading}
                  </div>
                  <div className="absolute left-[70.19px] top-[85.30px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
                    {t.six_Month.plan_type}
                  </div>
                  <div className="absolute left-[70.19px] top-[198px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
                    {t.plan_connection}
                  </div>
               
                  <div className="absolute left-0 top-[430.35px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_one}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[365.56px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_two}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[559.64px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_three}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[688.92px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_four}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[818.20px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_five}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[947.49px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_six}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[494.85px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_seven}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[624.13px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_eight}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[753.42px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_nine}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[882.70px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_ten}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[1011.98px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_elevene}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[70.39px] top-[264.14px] w-[254.11px] h-[53.50px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white rounded-md" />
                    <div className="absolute w-[254.11px] h-[53.50px] flex justify-center items-center text-center text-[#30a079] text-lg font-semibold">
                      {t.button_text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>}
      </div>
    </div>
  );
}

const PriceCard = ({ t, Price }) => {
  return (
    <div
      className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="w-[450px] 2xl:w-[450px] max-sm:w-[350px] xl:w-[400px] relative overflow-hidden">
        <div className="transform sm:scale-100 scale-90 origin-top">
          <div className="relative w-full h-[1090px] rounded-[32.32px]">
            <div className="absolute left-0 top-0 w-full h-[1079.97px] bg-[#2d2d2d] rounded-[26px]" />
            <div className="absolute left-0 top-[349.31px] w-full h-[0.87px] bg-[#aebdd6]" />
            <div className="absolute left-[70.85px] top-[110.60px] text-center text-[#30a079] text-[58px] font-semibold">
              $ {(t.plan_value * Price).toString().slice(0, 6)}
            </div>
            <div className="absolute left-[70.85px] top-[41.24px] text-white text-[28.98px] font-medium">
              {t.heading}
            </div>
            <div className="absolute left-[70.19px] top-[85.30px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
              {t.plan_type}
            </div>
            <div className="absolute left-[70.19px] top-[198px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
              {t.plan_connection}
            </div>

            <div className="absolute left-0 top-[430.35px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_one}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1.11px] top-[365.56px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_two}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-0 top-[559.64px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_three}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-0 top-[688.92px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_four}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-0 top-[818.20px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_five}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-0 top-[947.49px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_six}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1.11px] top-[494.85px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_seven}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1.11px] top-[624.13px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_eight}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1.11px] top-[753.42px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_nine}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1.11px] top-[882.70px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_ten}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1.11px] top-[1011.98px] w-full h-[64.65px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                  {t.plan_features.features_elevene}
                </div>
                <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[70.39px] top-[264.14px] w-[254.11px] h-[53.50px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white rounded-md" />
              <div className="absolute w-[254.11px] h-[53.50px] flex justify-center items-center text-center text-[#30a079] text-lg font-semibold">
                {t.button_text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}