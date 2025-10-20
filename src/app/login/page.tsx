"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Head from "next/head";
import { loginService } from "@/lib/features/authSlice";
import { useAppStore } from "@/hooks/hooks";
import { PendingCartAction } from "@/types";
import { addToCartService } from "@/lib/features/cartSlice";
import { toast } from "sonner";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const store = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const [pendingCartAction, setPendingCartAction] =
    useState<PendingCartAction | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const resultAction = await store.dispatch(
        loginService({ email, password })
      );

      if (loginService.fulfilled.match(resultAction)) {
        // Check if there was a pending cart action
        if (pendingCartAction) {
          const resultAction = await store.dispatch(
            addToCartService({
              productId: pendingCartAction?.productId,
              quantity: pendingCartAction?.quantity,
            })
          );

          if (addToCartService.fulfilled.match(resultAction)) {
            toast.success("Product added to cart successfully!");
          }
          router.push(`/`);
        } else {
          router.push(`/`);
        }

        localStorage.removeItem("cartPendingAction");
      }
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    setError("");
    setIsGoogleLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: credentialResponse.credential }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Google login failed");
        setIsGoogleLoading(false);
        return;
      }

      // Store tokens
      Cookies.set("accessToken", data.accessToken, { expires: 30, secure: true });
      Cookies.set("refreshToken", data.refreshToken, { expires: 30, secure: true });
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

      toast.success("Logged in successfully!");
      router.push("/");
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google login failed. Please try again.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError("Google login failed. Please try again.");
    setIsGoogleLoading(false);
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
          <title>Login | Cosmo Crystals</title>
          <meta
            name="description"
            content="Sign In to your Cosmo Crystals account"
          />
        </Head>

        <div className="max-w-md w-full">
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-center text-3xl font-bold text-[#B73B45] mb-6">
                Sign In
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Welcome back to Cosmo Crystals
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

            {/* Google Login Section */}
            <motion.div variants={itemVariants} className="mb-8">
              <div
                className={`flex justify-center ${
                  isGoogleLoading ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants} className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with email
                </span>
              </div>
            </motion.div>

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
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-[#B73B45] hover:text-[#8A2A33] transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none transition-all"
                    placeholder="••••••••"
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
                        Signing in...
                      </span>
                    ) : (
                      "Sign in"
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>

            <motion.div
              className="mt-8 text-center text-sm text-gray-600"
              variants={itemVariants}
            >
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-[#B73B45] hover:text-[#8A2A33] transition-colors"
              >
                Sign up today!
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </GoogleOAuthProvider>
  );
}
