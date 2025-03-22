"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/hooks/queries/useCart";
import Cookies from "js-cookie";

interface HeaderProps {
  options?: boolean;
}

const Header: React.FC<HeaderProps> = ({ options = true }) => {
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data, isLoading } = useCart();

  console.log(data);

  // Check if user is logged in - assuming that if cart data is available, user is logged in
  const isLoggedIn = Cookies.get("accessToken");

  // const toggleSearch = () => {
  //   setIsSearchOpen(!isSearchOpen);
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {}, [data]);

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
            <Link
              href="/profile"
              className="p-2 hover:text-[#B73B45] transition-colors"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </motion.div>
            </Link>

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

                {isLoggedIn && data?.length > 0 && !isLoading && (
                  <motion.div className="absolute -top-1 -right-1 flex items-center justify-center">
                    <div className="bg-[#B73B45] text-white text-xs font-medium rounded-full h-4 w-4 min-w-4 flex items-center justify-center shadow-sm">
                      {data?.length > 99 ? "99+" : data?.length || 0}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </Link>

            <button className="md:hidden p-2" onClick={toggleMobileMenu}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </motion.div>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {options && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 px-2"
          >
            <motion.nav
              className="flex flex-col space-y-4 bg-white rounded-lg shadow-md p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-gray-800 hover:text-[#B73B45] transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/category"
                className="text-gray-800 hover:text-[#B73B45] transition-colors py-2 border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Category
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-[#B73B45] transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
