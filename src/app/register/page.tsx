"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Head from "next/head";
import { useAppStore } from "@/hooks/hooks";
import { signupService } from "@/lib/features/authSlice";
import { PendingCartAction } from "@/types";

export default function Register() {
  const router = useRouter();
  const store = useAppStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [pendingCartAction, setPendingCartAction] =
    useState<PendingCartAction | null>(null);

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const formVariants = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Check for pending cart actions
  useEffect(() => {
    const pendingAction = localStorage.getItem("cartPendingAction");
    if (pendingAction) {
      try {
        setPendingCartAction(JSON.parse(pendingAction));
      } catch (e) {
        console.error("Error parsing pending cart action", e);
        localStorage.removeItem("cartPendingAction");
      }
    }
  }, []);

  interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate first step
    if (!formData.name || !formData.email) {
      setError("Please provide your name and email");
      return;
    }
    setError("");
    setStep(2);
  };

  const prevStep = () => {
    setStep(1);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Validate passwords
    if (formData.password.length < 8) {
      setError("Password must be greater than 8 characters");
      return;
    }

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const resultAction = await store.dispatch(
        signupService({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      );

      if (signupService.fulfilled.match(resultAction)) {
        // Check if there was a pending cart action
        if (pendingCartAction) {
          // Log the pending action (you'd implement actual cart addition here)
          console.log(
            `Processing pending action: Adding ${pendingCartAction.quantity} of ${pendingCartAction.productName} to cart`
          );
        }
        router.push(`/`);
      }
    } catch {
      setError("Registration failed. Please try again.");
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
        <title>Create Account | Cosmo Crystals</title>
        <meta
          name="description"
          content="Join Cosmo Crystals for a healing crystal experience"
        />
      </Head>

      <div className="max-w-md w-full">
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-center text-3xl font-bold text-[#B73B45] mb-3">
              Create Account
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Become a part of the Cosmo Crystals community!
              {/* {pendingCartAction && (
                <span className="block mt-2 text-sm text-[#B73B45]">
                  Create an account to add {pendingCartAction.quantity}{" "}
                  {pendingCartAction.productName} to your cart
                </span>
              )} */}
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

          <div className="mb-8">
            {/* Step indicators removed for simplicity */}
          </div>

          {step === 1 && (
            <motion.form
              onSubmit={nextStep}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={formVariants}
              key="step1"
            >
              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all"
                    placeholder="Enter Full Name"
                  />
                </motion.div>

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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all"
                    placeholder="Enter Email Address"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#B73B45] text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B73B45]"
                  >
                    Continue
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              onSubmit={handleSubmit}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={formVariants}
              key="step2"
            >
              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all"
                    placeholder="••••••••"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all"
                    placeholder="••••••••"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="flex space-x-4">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-1/3 bg-gray-200 text-gray-800 py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Back
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-2/3 bg-[#B73B45] text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B73B45] disabled:opacity-70"
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
                        Creating Account...
                      </span>
                    ) : (
                      "Create Account"
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.form>
          )}

          <motion.div
            className="mt-8 text-center text-sm text-gray-600"
            variants={itemVariants}
          >
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#B73B45] hover:text-[#8A2A33] transition-colors"
            >
              Sign in
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
