"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function TermsContent() {
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
                <h2 className="text-3xl lg:text-4xl font-bold">Terms and Conditions</h2>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Welcome to Express IPTV! These Terms and Conditions outline the rules and regulations for using our website and services. By accessing or using our services, you agree to comply with these terms. If you disagree with any part of these terms, please refrain from using our services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">1. Acceptance of Terms</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  By accessing and using the services provided by Express IPTV, you agree to comply with these Terms and Conditions. If you do not agree with these terms, please do not use our website or services.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">2. Account Registration</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  To access certain features of our services, you may need to register for an account. By registering, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account details, including your username and password, and for all activities that occur under your account.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">3. Subscription and Billing</h3>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><b>Pricing:</b> Our subscription plans are detailed on the website, and by subscribing to our service, you agree to pay the stated fees.</li>
                  <li><b>Payment:</b> All payments for our services must be made in accordance with the payment methods provided on the website.</li>
                  <li><b>Refund Policy:</b> Subscriptions are non-refundable unless stated otherwise. Refunds are subject to our discretion and the specific circumstances of your request.</li>
                  <li><b>Automatic Renewal:</b> Your subscription will automatically renew unless you cancel it before the next billing cycle. You can cancel your subscription through your account settings.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">4. User Conduct</h3>
                <p className="text-lg lg:text-xl leading-relaxed">When using our services, you agree to not engage in any of the following:</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-2">
                  <li>Violating any laws or regulations.</li>
                  <li>Distributing harmful content, including viruses or malware.</li>
                  <li>Attempting to disrupt or damage the functionality of the services.</li>
                  <li>Accessing content that is restricted or intended for other users.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">5. Intellectual Property</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  All content provided by Express IPTV, including logos, images, videos, software, and other materials, is protected by intellectual property laws and remains the property of Express IPTV or its licensors. You may not use, copy, or modify any of our content without our express permission.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">6. Privacy</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Your use of our services is also governed by our Privacy Policy, which can be found [here]. By using our services, you consent to the collection and use of your personal information as described in the Privacy Policy.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">7. Termination</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time for violation of these Terms and Conditions, non-payment, or any other reason we deem necessary. Upon termination, all access to our services will be immediately revoked.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">8. Limitation of Liability</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  To the maximum extent permitted by law, Express IPTV is not liable for any indirect, incidental, special, or consequential damages resulting from your use of our services. Our total liability shall not exceed the total amount paid by you for the subscription during the six months preceding the event that caused the damage.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">9. Indemnification</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  You agree to indemnify and hold harmless Express IPTV, its affiliates, employees, and agents from any claims, losses, damages, and expenses arising out of your violation of these Terms and Conditions or your use of our services.
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">10. Amendments</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. Your continued use of the services after such changes will constitute acceptance of the updated terms.
                </p>
              </div>

              {/* Section 11 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">11. Governing Law</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  These Terms and Conditions are governed by the laws of the jurisdiction in which Express IPTV operates, without regard to its conflict of law principles. Any disputes related to these terms shall be resolved in the appropriate courts in that jurisdiction.
                </p>
              </div>

              {/* Section 12 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">12. Dispute Resolution</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  In the event of any dispute, the parties agree to first attempt to resolve the issue through mediation or other amicable means. If the dispute cannot be resolved, it will be settled in the courts of the jurisdiction specified above.
                </p>
              </div>

              {/* Section 13 */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold">13. Contact Information</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  If you have any questions or concerns regarding these Terms and Conditions, please contact us:
                  <br />
                  Email: <a href="mailto:expresstv@hushmail.me" className="text-[#30a179]">expresstv@hushmail.me</a>
                </p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
