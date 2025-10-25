"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Head from "next/head";
import { useAppStore } from "@/hooks/hooks";
import { signupService } from "@/lib/features/authSlice";
import { PendingCartAction } from "@/types";
import { addToCartService } from "@/lib/features/cartSlice";
import { toast } from "sonner";
import { GoogleLogin, GoogleOAuthProvider, type CredentialResponse } from "@react-oauth/google";
import Cookies from "js-cookie";

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
        // Handle pending cart action
        if (pendingCartAction) {
          const cartResult = await store.dispatch(
            addToCartService({
              productId: pendingCartAction?.productId,
              quantity: pendingCartAction?.quantity,
            })
          );

          if (addToCartService.fulfilled.match(cartResult)) {
            toast.success("Product added to cart successfully!");
          }
          localStorage.removeItem("cartPendingAction");
        }

        toast.success("Account created successfully!");
        router.push("/");
      }
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: credentialResponse.credential }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Google signup failed");
        return;
      }

      // Store tokens
      Cookies.set("accessToken", data.accessToken, {
        expires: 30,
        secure: true,
      });
      Cookies.set("refreshToken", data.refreshToken, {
        expires: 30,
        secure: true,
      });
      // localStorage.setItem("user", JSON.stringify(data.user));

      // Handle pending cart action
      if (pendingCartAction) {
        const cartResult = await store.dispatch(
          addToCartService({
            productId: pendingCartAction?.productId,
            quantity: pendingCartAction?.quantity,
          })
        );

        if (addToCartService.fulfilled.match(cartResult)) {
          toast.success("Product added to cart successfully!");
        }
        localStorage.removeItem("cartPendingAction");
      }

      toast.success("Account created successfully!");
      router.push("/");
    } catch (err) {
      console.error("Google signup error:", err);
      setError("Google signup failed. Please try again.");
    }
  };

  const handleGoogleError = () => {
    setError("Google signup failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
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

            {/* Google Signup Section - Only show on step 1 */}
            {step === 1 && (
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex justify-center">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                  />
                </div>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or sign up with email
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

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

                  <motion.div
                    variants={itemVariants}
                    className="flex space-x-4"
                  >
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
    </GoogleOAuthProvider>
  );
}
