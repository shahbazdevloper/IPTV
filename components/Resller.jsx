"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaqResller } from "@/components/FAQ/FaqResller";
import { PriceReseller } from "@/components/Pricing/PriceReseller";
import Image from "next/image";

export function Resller() {
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
            <motion.div
              className="w-full p-6 rounded-xl"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Introduction */}
              <h2 className="text-left text-white text-2xl lg:text-4xl lg:leading-[4.5rem] font-semibold mb-6">
                Become an Express TV Reseller
              </h2>
              <p className="text-left text-white text-lg lg:text-xl mb-6">
                Unlock the door to recurring revenue by joining the Express TV Reseller program. With skyrocketing demand for high-quality live television and on-demand video, there’s never been a better time to turn your network into a profit engine.
              </p>

              {/* Why Resell Express TV */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Why Resell Express TV?</h3>
                <p className="text-white text-lg lg:text-xl mb-4">
                  The IPTV market is experiencing massive growth as more people continue to cut the cord and move away from traditional cable. Millions are searching for affordable, high-quality streaming alternatives, and Express TV is built to meet that demand with top-tier performance and reliability. As a reseller, you can tap into this booming market with a service users genuinely need.
                </p>
                <p className="text-white text-lg lg:text-xl mb-4">
                  One of the biggest advantages of becoming an Express TV reseller is the potential for consistent, subscription-based income. When viewers are satisfied with their experience, they’re likely to renew month after month. This creates a steady stream of recurring revenue and increases your customer lifetime value as your base of loyal users grows.
                </p>
                <p className="text-white text-lg lg:text-xl mb-4">
                  Express TV also offers global reach. Whether your audience is in the US, UK, Canada, Europe, or beyond, you can provide them with access to over 18,000 live channels and 40,000+ movies and series. No matter where your customers are, Express TV delivers a complete entertainment solution they can rely on.
                </p>
              </div>

<PriceReseller />



              {/* Key Reseller Features Table */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Key Reseller Features</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-white text-lg lg:text-xl border-collapse">
                    <thead>
                      <tr className="bg-[#30a179]/50">
                        <th className="p-4">Feature</th>
                        <th className="p-4">Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#30a179]/30">
                        <td className="p-4">Comprehensive Control Panel</td>
                        <td className="p-4">Easily create, extend, suspend, and monitor all subscriber lines.</td>
                      </tr>
                      <tr className="border-b border-[#30a179]/30">
                        <td className="p-4">Unlimited Free Trials</td>
                        <td className="p-4">Offer 24-hour trials to entice prospects and close sales faster.</td>
                      </tr>
                      <tr className="border-b border-[#30a179]/30">
                        <td className="p-4">4K / FHD / HD / SD Streams</td>
                        <td className="p-4">Deliver crystal-clear, buffer-free viewing on any device.</td>
                      </tr>
                      <tr className="border-b border-[#30a179]/30">
                        <td className="p-4">Vast Content Library</td>
                        <td className="p-4">Live TV, movies, series, sports & PPV—everything in one place.</td>
                      </tr>
                      <tr className="border-b border-[#30a179]/30">
                        <td className="p-4">Non-Expiring Credits</td>
                        <td className="p-4">Purchase once and allocate anytime—perfect for flexible growth.</td>
                      </tr>
                      <tr className="border-b border-[#30a179]/30">
                        <td className="p-4">24/7 Technical Support</td>
                        <td className="p-4">Always-on expert help for you and your customers.</td>
                      </tr>
                      <tr>
                        <td className="p-4">No IP Lock</td>
                        <td className="p-4">View from anywhere—no geo-restrictions.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>



              {/* Frequently Asked Questions */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
   <FaqResller />
              
              </div>

              {/* Ready to Earn Section */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Ready to Earn with Express TV?</h3>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2">
                  <li><strong>Try it Free:</strong> Order your no-risk trial and experience the service firsthand.</li>
                  <li><strong>Pick Your Bundle:</strong> Start as low as $180 in credits.</li>
                  <li><strong>Launch & Scale:</strong> With best-in-class support and margins, success is just a click away!</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <motion.button
                    className="bg-[#30a179] px-8 py-3 text-white rounded-full text-md 2xl:text-xl font-medium flex items-center justify-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Link href="#">Order A Free Trial</Link>
                  </motion.button>
                  <motion.button
                    className="bg-[#30a179] px-8 py-3 text-white rounded-full text-md 2xl:text-xl font-medium flex items-center justify-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link href="#">Become a Reseller</Link>
                  </motion.button>
                </div>
              </div>

              {/* Complete Guide to IPTV Reseller Panel */}
              <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Complete Guide to Our IPTV Reseller Panel</h3>
                <p className="text-white text-lg lg:text-xl mb-4">
                  This step-by-step tutorial covers everything you need to know about using our IPTV reseller panel—from A to Z. Whether you're just starting out or looking to sharpen your skills, this guide walks you through the entire process. If you have any questions along the way, feel free to reach out to us via live chat for support.
                </p>
                <p className="text-white text-lg lg:text-xl mb-4">
                  Becoming an IPTV reseller can be a profitable venture. The more effort you put in, the greater the potential earnings. If you're new to the business, the management panel might seem a bit overwhelming at first—but don’t worry. It’s designed to be user-friendly, and this walkthrough will help you understand how to use it effectively from day one.
                </p>

                <Image
                                    src="/main-dashboard.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-12 rounded-lg shadow-md "
                                  />


                <p className="text-white text-lg lg:text-xl mb-4">
                  The reseller dashboard is organized into three main sections, similar to most standard control panels:
                </p>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2 mb-4">
                  <li><strong>Top Monitoring and Information Bar</strong> – Displays key stats and real-time updates.</li>
                  <li><strong>Central Panel Area</strong> – The main workspace where detailed account and client information is shown.</li>
                  <li><strong>Left-Side Navigation Menu</strong> – Provides quick access to all features and tools within the reseller panel.</li>
                </ul>

                {/* Top Information and Monitoring Section */}
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">Top Information and Monitoring Section</h4>

                            <Image
                                    src="/header-panel.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />

                <p className="text-white text-lg lg:text-xl mb-4">
                  This section gives you a quick overview of essential real-time statistics on your reseller account. It includes:
                </p>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2 mb-4">
                  <li><strong>Online Users</strong> – Shows the current number of users actively streaming.</li>
                  <li><strong>Sales Today</strong> – Displays how many subscriptions or credits you've sold within the current day.</li>
                  <li><strong>Sales This Month</strong> – Tracks your total sales made throughout the ongoing month.</li>
                  <li><strong>Active Subscriptions</strong> – Indicates how many active subscriptions are currently running under your account.</li>
                </ul>

                {/* Middle Information Section */}
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">Middle Information Section</h4>
                 <Image
                                    src="/Dashboard.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2 mb-4">
                  <li><strong>Expiring in 1 Week:</strong> Shows accounts expiring soon. Use search and dropdown to filter.</li>
                  <li><strong>Expired:</strong> Lists expired accounts with ID, Username, Date. Search and paginate available.</li>
                  <li><strong>Client Portals/Apps:</strong> Copy portal links (e.g., Mag Portal) with the "Copy" button.</li>
                  <li><strong>Top 10 Channels Now:</strong> Displays the top 10 most-watched channels.</li>
                </ul>

                {/* Left Access Column */}
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">Left Access Column</h4>

                <Image
                                    src="Left-Access-Column.png"
                                    width={400}
                                    height={400}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-8 rounded-lg shadow-md "
                                  />
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2 mb-4 ">
                  <li><strong>Dashboard:</strong> View system-wide data and key metrics. Get a quick overview of performance and activity.</li>
                  <li><strong>Connections:</strong> Manage and monitor all active connections. Ensure seamless integration and data flow across devices.</li>
                                  <Image
                                    src="connections.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />


                  <li><strong>Connection Map:</strong> Visual representation of all active connections. Easily track the status and health of each connection.</li>

                <Image
                                    src="coneections-map.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />

                  <li><strong>Users:</strong> Manage user accounts and permissions. Create, edit, and delete user profiles as needed.</li>
                </ul>

                {/* User Management */}
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">User Management</h4>
                
                <p className="text-white text-lg lg:text-xl mb-4">
                  It displays a list of user accounts with the following details:
                </p>

                 <Image
                                    src="users.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2 mb-4">
                  <li><strong>ID:</strong> Unique identifier for each user.</li>
                  <li><strong>Username:</strong> The username of the user.</li>
                  <li><strong>Password:</strong> The password associated with the account.</li>
                  <li><strong>Expire Date:</strong> The date when the user's access expires.</li>
                  <li><strong>Notes:</strong> Additional notes or information related to the user account.</li>
                  <li><strong>Speed:</strong> A field indicating the speed (left blank in this case).</li>
                  <li><strong>Con (Connections):</strong> Shows the number of active connections the user has.</li>
                  <li><strong>Watching:</strong> A field that may show the number of ongoing activities or sessions the user is involved in.</li>
                  <li><strong>IP:</strong> The user's IP address (not displayed in the image).</li>
                  <li><strong>Owner:</strong> The person or entity owning the user account.</li>
                </ul>
                <p className="text-white text-lg lg:text-xl mb-4">
                  In the actions column, there are several options such as editing the user, exporting data, and more. You can manage the users by clicking the corresponding icons. You can also Add User, Add Trial User, or Remove Expired Lines using the available buttons. Additionally, there are filters and a search bar to help you sort and find specific users quickly.
                </p>


                 <Image
                                    src="Country-list-ans-sleect-package.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />

                {/* Account Creation Settings */}
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">Account Creation Settings</h4>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2 mb-4">
                  <li><strong>Create Line Type:</strong> Select the account type: Line (standard), Mag (MAG device), or Xtremetv (XtreamTV device).</li>
                  <li><strong>Country:</strong> Choose the countries you want to include or exclude from the selection.</li>
                  <li><strong>Package:</strong> Select from available durations: 1, 3, 6, or 12 months for the subscription.</li>
                  <li><strong>Max Allowed Connections:</strong> Specify the number of simultaneous connections allowed (e.g., 1).</li>
                  <li><strong>Expire Date:</strong> Set the account's expiration date and time.</li>
                  <li><strong>Price:</strong> Enter the price for the selected package.</li>
                  <li><strong>Credits Left:</strong> Shows the remaining credits available for the account.</li>
                </ul>

                {/* Manage Devices and Logs */}
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">Manage Devices and Logs</h4>
                <ul className="list-disc list-inside text-white text-lg lg:text-xl space-y-2 mb-4">
                  <li><strong>Manage MAG Devices:</strong> Oversee and configure MAG devices. Ensure smooth operation and device management.</li>
<Image
                                    src="mag.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />


                  <li><strong>Manage Enigma Devices:</strong> Administer Enigma devices. Monitor their health and update configurations.</li>

                  <Image
                                    src="Enigma.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />
                  <li><strong>Logs:</strong> Access detailed records of system activities. Track every action taken within the platform.</li>

                  <Image
                                    src="activity-logs.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />
                  <li><strong>Activity Log:</strong> Review all user and system activities. Identify any irregular actions or issues.</li>
                  <li><strong>Credits Log:</strong> View all credit-related activities. Monitor deposits, usage, and adjustments.</li>
                  <li><strong>Deposit:</strong> Manage and track deposit transactions. Ensure accurate fund tracking and processing.</li>
                </ul>
              </div>
              
                  <Image
                                    src="payments.png"
                                    width={1200}
                                    height={800}
                                    alt="Screenshot of the Express TV Free Trial page"
                                    className="my-10 rounded-lg shadow-md "
                                  />

              {/* Final CTA */}
              <motion.button
                className="bg-[#30a179] px-8 py-3 text-white rounded-full text-md 2xl:text-xl font-medium flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="#">Become a Reseller</Link>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}