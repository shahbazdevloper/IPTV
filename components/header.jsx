"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Supports } from "@/components/Supports";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function Header() {
  const [openSupport, setOpenSupport] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].header;
  const pathname = usePathname();

  const navigation = [
    { name: t.Home, href: "/" },
    { name: t.Free_Trial, href: "/free-trial" },
    { name: t.Pricing, href: "/pricing" },
    { name: t.Channels, href: "/Channels" },
    { name: t.Guides, href: "/guides" },
    { name: t.Reseller, href: "/reseller" },
    { name: t.Blog, href: "/blog" },
    { name: "language", href: "" },
  ];

  useEffect(() => {
    if (!isOpen) {
      setOpenSupport(false);
      setOpenLanguage(false);
    }
  }, [isOpen]);

  return (
    <header className="fixed xl:top-5 w-full flex justify-center z-50">
      <div className="w-full xl:w-[1400px] 2xl:w-[1800px] py-2 bg-[#131313] xl:bg-white/10 backdrop-blur-sm shadow-md xl:rounded-full px-2">
        <div className="mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Streaming device showing sports Logo"
              width={180}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:flex items-center 2xl:gap-8"
            aria-label="Main navigation"
          >
            {navigation.map((item, index) =>
              item.name === "language" ? (
                <LanguageSwitcher
                  key={index}
                  Language={openLanguage}
                  openLanguage={setOpenLanguage}
                  openSupport={setOpenSupport}
                />
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-[#2EAE8C] hover:text-white"
                      : "text-white"
                  } mr-4 transition cursor-pointer text-[15px] font-medium text-center hover:bg-[#239579] rounded-full px-6 py-2`}
                >
                  {item.name}
                </Link>
              )
            )}
            <Supports
              Support={openSupport}
              openSupport={setOpenSupport}
              openLanguage={setOpenLanguage}
            />
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="text-white w-12"
              onClick={() => setIsOpen(true)}
            >
              <div className="w-12 h-11 bg-[#1a1a1a4b] border-[#26262649] border-4 rounded-md flex justify-center items-center">
                <Image src="/Icon.png" alt="Menu" width={28} height={28} />
              </div>
            </Button>
          </div>

          {/* Desktop CTA */}
          <Link href="https://jivo.chat/p36Je0zF3T" target="_blank">
            <Button className="hidden w-auto px-5 xl:inline-flex button text-white rounded-full text-md font-medium">
              {t.button_text}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="xl:hidden">
        <div
          className={`absolute w-full h-screen top-0 left-0 text-white transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Background Overlay */}
          <div className="bg-black/40 w-full h-full backdrop-blur-sm absolute top-0 left-0" />

          {/* Sidebar Menu */}
          <div className="relative bg-[#0E0E0E] w-4/5 h-full p-6 flex flex-col gap-6">
            {/* Close Button */}
            <button
              aria-label="Close menu"
              className="self-end text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.png"
                alt="Streaming device showing sports Logo"
                width={180}
                height={60}
              />
            </Link>

            {/* Links */}
            {navigation.map((item, index) =>
              item.name === "language" ? (
                <LanguageSwitcher
                  key={index}
                  Language={openLanguage}
                  openLanguage={setOpenLanguage}
                  openSupport={setOpenSupport}
                />
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    pathname === item.href ? "text-[#2EAE8C]" : "text-white"
                  } transition py-2`}
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Support */}
            <Supports
              Support={openSupport}
              openSupport={setOpenSupport}
              openLanguage={setOpenLanguage}
            />

            {/* CTA */}
            <div className="mt-6">
              <Button
                className="w-36 rounded-full button text-white"
                onClick={() => setIsOpen(false)}
              >
                {t.button_text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
