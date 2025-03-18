"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import { useAppStore } from "@/hooks/hooks";
import { forgotPasswordService } from "@/lib/features/authSlice";

export default function ForgotPassword() {
  const store = useAppStore();
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsLoading(true);

    try {
      const resultAction = await store.dispatch(
        forgotPasswordService({
          email: email,
        })
      );

      if (forgotPasswordService.fulfilled.match(resultAction)) {
        setSuccess(true);
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-[90vh] bg-[#F7F3F4] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Head>
        <title>Forgot Password | Cosmo Crystals</title>
        <meta name="description" content="Reset your Cosmo Crystals password" />
      </Head>

      <div className="max-w-md w-full">
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-center text-3xl font-bold text-[#B73B45] mb-6">
              Forgot Password
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Enter your email and we&apos;ll send you a link to reset your
              password
            </p>
          </motion.div>

          {error && (
            <motion.div
              className="bg-red-50 text-red-600 p-4 rounded-lg mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Check your email
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;ve sent a password reset link to {email}
              </p>
              <Link
                href="/login"
                className="inline-block text-[#B73B45] hover:text-[#8A2A33] font-medium transition-colors"
              >
                Return to login
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#B73B45] text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B73B45] disabled:opacity-70"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Reset Link"
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          )}

          {!success && (
            <motion.div
              className="mt-8 text-center text-sm text-gray-600"
              variants={itemVariants}
            >
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-[#B73B45] hover:text-[#8A2A33] transition-colors"
              >
                Sign in
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
