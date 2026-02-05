"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "서비스", href: "#service" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "가격", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0.5">
            <span className="text-xl md:text-2xl font-black text-background">
              라인업
            </span>
            <span className="text-xl md:text-2xl font-black text-primary">
              애드
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-background/60 hover:text-background font-medium transition-colors duration-200 rounded-full hover:bg-black/5"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-background text-white px-6 py-2.5 rounded-full font-bold hover:bg-background/90 transition-all duration-200"
            >
              문의하기
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-background rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/5"
        >
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-background/70 hover:text-background hover:bg-black/5 py-3 px-4 rounded-xl transition-all font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-background text-white px-6 py-3.5 rounded-full font-bold text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              문의하기
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
