"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function DmcaContent() {
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
    <div className="relative w-full h-auto min-h-[550px] bg-black" ref={divRef}>
      {isVisible && (
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-white py-16 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="xl:max-w-[1100px] 2xl:max-w-[1200px] w-full px-6">
            <motion.div
              className="w-full p-8 lg:p-12 rounded-2xl bg-gradient-to-b from-[#111] to-[#1a1a1a] shadow-lg space-y-16"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >

              {/* Intro */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <p className="text-lg lg:text-xl leading-relaxed">
                  Welcome to Express IPTV. We respect the intellectual property rights of others, just as we expect others to respect ours. In accordance with the Digital Millennium Copyright Act (DMCA), Title 17, United States Code, Section 512(c), a copyright owner or their authorized agent may submit a takedown request to us via our DMCA Agent as described below.
                  <br /><br />
                  As an internet service provider, Express IPTV may claim protection under the DMCA’s “safe harbor” provisions. To submit a valid takedown notice in good faith, please include the following details:
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">1. Takedown Notice Requirements</h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>Signature: A physical or electronic signature of the copyright holder or an authorized representative.</li>
                  <li>Work Identification: Description of the copyrighted work allegedly infringed.</li>
                  <li>Infringing Material: Precise identification of the infringing material to be removed, including the URL where it appears.</li>
                  <li>Contact Information: Your name, address, email, and telephone number (fax, if available).</li>
                  <li>Good-Faith Statement: A declaration that you believe in good faith that the use is unauthorized by the copyright owner, agent, or law.</li>
                  <li>Accuracy Statement: Confirmation under penalty of perjury that your notice is accurate and that you are authorized to act on behalf of the copyright owner.</li>
                </ul>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Note: Under 17 U.S.C. §512(f), there are civil penalties for knowingly submitting false claims, including potential liability for damages and attorney’s fees.
                  <br /><br />
                  Submit all takedown requests via our Contact Page. Email delivery is strongly recommended for timely processing.
                  <br /><br />
                  Please be aware that we may share the details of your notice, including your identity, with the alleged infringer. By submitting a DMCA notice, you agree to this disclosure.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">2. Counter-Notice – Restoring Removed Material</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  If you received a takedown notice and believe the removal was a mistake or misidentification, you may submit a counter-notice under 17 U.S.C. §512(g)(3). Your counter-notice must contain:
                </p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li>Signature: Your physical or electronic signature.</li>
                  <li>Material Description: Details of the removed content and its original location (URL).</li>
                  <li>Good-Faith Statement: Under penalty of perjury, confirmation that the removal was mistaken or misidentified.</li>
                  <li>Contact Info & Jurisdiction Consent: Your name, address, phone number, consent to U.S. federal court jurisdiction (or any appropriate jurisdiction if outside the U.S.), and acceptance of service from the original complainant.</li>
                </ul>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Submission Method: Please send your counter-notice via our Contact Page. Email is preferred for faster resolution.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">3. Repeat Infringement Policy</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Express IPTV takes copyright infringement seriously. In line with DMCA requirements, we track all notices and take steps to identify repeat offenders. Accounts associated with repeated violations may be terminated without notice.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold">4. Policy Updates</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  We reserve the right to revise this DMCA Policy at any time, for any reason. We encourage you to revisit this page periodically for updates.
                </p>
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-12">
                <motion.button
                  className="bg-[#30a179] px-12 py-5 text-white rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:bg-[#278a66] transition-all"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link href="/contact">Submit a DMCA Request</Link>
                </motion.button>
              </div>

            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
