"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function PrivacyContent() {
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

              {/* Heading */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <p className="text-lg lg:text-xl leading-relaxed">
                  Express IPTV is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our IPTV services. By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">1. Information We Collect</h3>
                <p className="text-lg lg:text-xl leading-relaxed">We collect the following types of information:</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>Personal Information:</strong> When you register for our services or subscribe to our offerings, we collect personal information such as your name, email address, phone number, billing address, and payment details.</li>
                  <li><strong>Usage Data:</strong> We collect data on how you use our services, including but not limited to browsing patterns, IP address, device information, and interaction with our website and content.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track your activity on our website. This helps us improve user experience, analyze trends, and understand your preferences.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">2. How We Use Your Information</h3>
                <p className="text-lg lg:text-xl leading-relaxed">We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>Providing Services:</strong> To deliver and maintain our IPTV services, process payments, and manage subscriptions.</li>
                  <li><strong>Communication:</strong> To send you updates, promotional content, and information related to your account or service usage.</li>
                  <li><strong>Improving User Experience:</strong> To personalize content and enhance your experience on our website and through our services.</li>
                  <li><strong>Security and Fraud Prevention:</strong> To detect and prevent unauthorized access, fraud, or misuse of our services.</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, or legal obligations.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">3. Data Sharing and Disclosure</h3>
                <p className="text-lg lg:text-xl leading-relaxed">We do not sell, rent, or share your personal information with third parties for their marketing purposes. However, we may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist in running our business, such as payment processors, customer support, or hosting services. These third parties are obligated to protect your information and use it only for the purpose of providing their services.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to a valid request by public authorities (e.g., a court or government agency).</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the new owner, subject to this privacy policy.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">4. Data Security</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  We employ reasonable and industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">5. Your Data Protection Rights</h3>
                <p className="text-lg lg:text-xl leading-relaxed">Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-lg lg:text-xl leading-relaxed space-y-4">
                  <li><strong>Access:</strong> You have the right to request access to the personal data we hold about you.</li>
                  <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete data.</li>
                  <li><strong>Deletion:</strong> You can request the deletion of your personal data, subject to certain exceptions.</li>
                  <li><strong>Opt-out of Marketing:</strong> You may opt-out of receiving marketing communications from us by following the instructions in our emails or by contacting us directly.</li>
                  <li><strong>Data Portability:</strong> In certain circumstances, you may request a copy of your data in a portable format.</li>
                </ul>
                <p className="text-lg lg:text-xl leading-relaxed">
                  If you wish to exercise any of these rights, please contact us at the contact details provided at the end of this policy.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">6. Cookies and Tracking Technologies</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  We use cookies to enhance your experience while using our website. Cookies are small text files stored on your device that help us recognize you and personalize content. You can choose to disable cookies through your browser settings, but this may impact your ability to use certain features of our website.
                  <br /><br />
                  For more information on how we use cookies, please refer to our Cookie Policy.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">7. Links to Third-Party Websites</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Our website may contain links to third-party websites or services. These sites are not under our control and are not covered by this Privacy Policy. We encourage you to review the privacy policies of these third-party websites before providing them with any personal information.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-6 border-b border-gray-700 pb-12">
                <h3 className="text-2xl lg:text-3xl font-semibold">8. Changes to This Privacy Policy</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-semibold">9. Contact Us</h3>
                <p className="text-lg lg:text-xl leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                  <br /><br />
                  <strong>Email:</strong> <a href="mailto:expresstv@hushmail.me" className="text-[#30a179]">expresstv@hushmail.me</a>
                </p>
              </div>

            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
