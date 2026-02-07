"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/hooks/queries/useCart";
import GoogleTranslate from "../GoogleTranslate";

interface HeaderProps {
  options?: boolean;
}

const Header: React.FC<HeaderProps> = ({ options = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { data, isLoading } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Hamburger button animation variants
  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (i: number) => {
      const variants = [
        { rotate: 45, y: 6 },
        { opacity: 0 },
        { rotate: -45, y: -6 },
      ];
      return variants[i];
    },
  };

  return (
    <header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#B73B45] text-2xl font-bold"
        >
          <Image
            src="/assets/logo.png"
            alt="Cosmo Crystals"
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </motion.a>

        {options && (
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-[#B73B45] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/category"
              className="text-gray-800 hover:text-[#B73B45] transition-colors"
            >
              Category
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#B73B45] transition-colors"
            >
              About
            </Link>
          </nav>
        )}

        {options && (
          <div className="flex items-center space-x-4">
            {/* Desktop Google Translate - hidden on mobile */}
            <div className="flex">
              <GoogleTranslate id="google_translate_element_header" />
            </div>

            <Link
              href="/cart"
              className="p-2 hover:text-[#B73B45] transition-colors relative"
            >
              <motion.div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>

                {Array.isArray(data) && data.length > 0 && !isLoading && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex items-center justify-center"
                  >
                    <div className="bg-[#B73B45] text-white text-xs font-medium rounded-full h-4 w-4 min-w-4 flex items-center justify-center shadow-sm">
                      {data.length > 99 ? "99+" : data.length}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </Link>

            <div className="md:hidden">
              <motion.button
                className="relative z-50 w-10 h-10 flex flex-col justify-center items-center"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className={`w-6 h-0.5 ${
                      isMobileMenuOpen ? "bg-white" : "bg-gray-800"
                    } my-0.5 block rounded-full origin-center`}
                    custom={i}
                    variants={lineVariants}
                    initial="closed"
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </motion.button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {options && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 md:hidden flex flex-col z-40"
            style={{
              background:
                "linear-gradient(135deg, rgba(183, 59, 69, 0.95) 0%, rgba(183, 59, 69, 0.8) 100%)",
              boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <motion.div
                className="absolute rounded-full bg-white opacity-10 w-64 h-64"
                style={{ top: "10%", left: "-10%" }}
                animate={{
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute rounded-full bg-white opacity-10 w-96 h-96"
                style={{ bottom: "-15%", right: "-10%" }}
                animate={{
                  x: [0, -30, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="flex flex-col items-center justify-center h-full relative z-10">
              <motion.nav
                className="flex flex-col items-center space-y-8 py-8"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {[
                  { href: "/", label: "Home" },
                  { href: "/category", label: "Category" },
                  { href: "/about", label: "About" },
                ].map(({ href, label }, i) => (
                  <motion.div
                    key={label}
                    custom={i}
                    variants={menuItemVariants}
                  >
                    <Link
                      href={href}
                      className="text-2xl font-medium text-white hover:text-white/80 transition-all py-2 relative group"
                      onClick={toggleMobileMenu}
                    >
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Google Translate */}
                <motion.div
                  variants={menuItemVariants}
                  custom={3}
                  className="pt-4"
                >
                  <GoogleTranslate id="google_translate_element_mobile" />
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
