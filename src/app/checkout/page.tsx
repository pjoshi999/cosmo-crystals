"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define types
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Address {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface PaymentMethod {
  id: string;
  name: string;
  last4?: string;
  icon: string;
}

export default function Checkout() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggeredContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Sample cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Rose Quartz Cluster",
      price: 42,
      quantity: 1,
      image: "/images/rose-quartz.jpg",
    },
    {
      id: 3,
      name: "Clear Quartz Point",
      price: 55,
      quantity: 2,
      image: "/images/clear-quartz.jpg",
    },
  ]);

  // Form states
  const [address, setAddress] = useState<Address>({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
    phone: "",
  });

  const [step, setStep] = useState(1); // 1: Info, 2: Shipping, 3: Payment, 4: Review
  const [isLoaded, setIsLoaded] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [selectedPayment, setSelectedPayment] = useState("card1");

  // Payment methods
  const paymentMethods: PaymentMethod[] = [
    { id: "card1", name: "Visa", last4: "4242", icon: "visa" },
    { id: "card2", name: "Mastercard", last4: "8888", icon: "mastercard" },
    { id: "paypal", name: "PayPal", icon: "paypal" },
  ];

  // Calculate order summary
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = shippingMethod === "express" ? 12.99 : 5.99;
  const tax = subtotal * 0.085;
  const total = subtotal + shipping + tax;

  // Handle form changes
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the order here
    // For now, we'll just move to the next step
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Final submission would go here
      alert("Thank you for your order!");
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-[#F7F3F4] min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-[#B73B45] hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Checkout</h1>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-10"
        >
          <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
            {["Information", "Shipping", "Payment", "Review"].map(
              (label, index) => (
                <div
                  key={label}
                  className="flex flex-col items-center relative"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step > index
                        ? "bg-[#B73B45] text-white"
                        : step === index + 1
                        ? "bg-[#B73B45] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 ${
                      step >= index + 1
                        ? "text-[#B73B45] font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {label}
                  </span>
                  {index < 3 && (
                    <div
                      className={`absolute h-0.5 w-24 top-4 left-8 -z-10 ${
                        step > index ? "bg-[#B73B45]" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              )
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column - Form */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={slideUp}
            className="md:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggeredContainer}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Contact Information
                    </h2>
                    <motion.div
                      variants={slideUp}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={address.firstName}
                          onChange={handleAddressChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={address.lastName}
                          onChange={handleAddressChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={slideUp}>
                      <label
                        htmlFor="address1"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address1"
                        name="address1"
                        required
                        value={address.address1}
                        onChange={handleAddressChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                      />
                    </motion.div>

                    <motion.div variants={slideUp}>
                      <label
                        htmlFor="address2"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Apartment, suite, etc. (optional)
                      </label>
                      <input
                        type="text"
                        id="address2"
                        name="address2"
                        value={address.address2}
                        onChange={handleAddressChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                      />
                    </motion.div>

                    <motion.div
                      variants={slideUp}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={address.city}
                          onChange={handleAddressChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          required
                          value={address.state}
                          onChange={handleAddressChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideUp}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div>
                        <label
                          htmlFor="postalCode"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          required
                          value={address.postalCode}
                          onChange={handleAddressChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={address.phone}
                          onChange={handleAddressChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#B73B45] focus:border-[#B73B45] focus:outline-none"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggeredContainer}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Shipping Method
                    </h2>
                    <motion.div variants={slideUp} className="space-y-4">
                      <div
                        className={`border ${
                          shippingMethod === "standard"
                            ? "border-[#B73B45] bg-[#F0E6E8]"
                            : "border-gray-200"
                        } rounded-lg p-4 cursor-pointer transition-all`}
                        onClick={() => setShippingMethod("standard")}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="standard"
                            name="shippingMethod"
                            checked={shippingMethod === "standard"}
                            onChange={() => setShippingMethod("standard")}
                            className="h-4 w-4 text-[#B73B45] focus:ring-[#B73B45]"
                          />
                          <label
                            htmlFor="standard"
                            className="ml-3 flex justify-between w-full"
                          >
                            <div>
                              <span className="block text-sm font-medium text-gray-900">
                                Standard Shipping
                              </span>
                              <span className="block text-sm text-gray-500">
                                3-5 business days
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                              $5.99
                            </span>
                          </label>
                        </div>
                      </div>

                      <div
                        className={`border ${
                          shippingMethod === "express"
                            ? "border-[#B73B45] bg-[#F0E6E8]"
                            : "border-gray-200"
                        } rounded-lg p-4 cursor-pointer transition-all`}
                        onClick={() => setShippingMethod("express")}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="express"
                            name="shippingMethod"
                            checked={shippingMethod === "express"}
                            onChange={() => setShippingMethod("express")}
                            className="h-4 w-4 text-[#B73B45] focus:ring-[#B73B45]"
                          />
                          <label
                            htmlFor="express"
                            className="ml-3 flex justify-between w-full"
                          >
                            <div>
                              <span className="block text-sm font-medium text-gray-900">
                                Express Shipping
                              </span>
                              <span className="block text-sm text-gray-500">
                                1-2 business days
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                              $12.99
                            </span>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggeredContainer}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Payment Method
                    </h2>
                    <motion.div variants={slideUp} className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`border ${
                            selectedPayment === method.id
                              ? "border-[#B73B45] bg-[#F0E6E8]"
                              : "border-gray-200"
                          } rounded-lg p-4 cursor-pointer transition-all`}
                          onClick={() => setSelectedPayment(method.id)}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id={method.id}
                              name="paymentMethod"
                              checked={selectedPayment === method.id}
                              onChange={() => setSelectedPayment(method.id)}
                              className="h-4 w-4 text-[#B73B45] focus:ring-[#B73B45]"
                            />
                            <label
                              htmlFor={method.id}
                              className="ml-3 flex items-center"
                            >
                              <span className="block text-sm font-medium text-gray-900">
                                {method.name}
                                {method.last4 && ` ending in ${method.last4}`}
                              </span>
                            </label>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggeredContainer}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Order Review
                    </h2>
                    <motion.div variants={slideUp}>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Shipping Address
                      </h3>
                      <p className="text-gray-700">
                        {address.firstName} {address.lastName}
                        <br />
                        {address.address1}
                        {address.address2 && <>, {address.address2}</>}
                        <br />
                        {address.city}, {address.state} {address.postalCode}
                        <br />
                        {address.country}
                        <br />
                        {address.phone}
                      </p>
                    </motion.div>

                    <motion.div variants={slideUp}>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Shipping Method
                      </h3>
                      <p className="text-gray-700">
                        {shippingMethod === "express"
                          ? "Express Shipping (1-2 business days)"
                          : "Standard Shipping (3-5 business days)"}
                      </p>
                    </motion.div>

                    <motion.div variants={slideUp}>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Payment Method
                      </h3>
                      <p className="text-gray-700">
                        {
                          paymentMethods.find(
                            (method) => method.id === selectedPayment
                          )?.name
                        }
                        {selectedPayment.startsWith("card") &&
                          " ending in ****"}
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                <div className="mt-8 flex items-center justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="text-[#B73B45] font-medium"
                    >
                      Back
                    </button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-[#B73B45] text-white px-8 py-3 rounded-full font-medium tracking-wide shadow-md hover:shadow-lg transition-all"
                  >
                    {step < 4 ? "Continue" : "Place Order"}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right column - Order summary */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={slideUp}
          >
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-[#F0E6E8] rounded-lg flex-shrink-0 flex items-center justify-center">
                      {/* Placeholder for product image */}
                      <div
                        className={`w-10 h-10 rounded-full bg-[${
                          item.id === 1 ? "#D6A0A8" : "#8A2A33"
                        }] opacity-70`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className="text-sm font-medium">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tax</span>
                  <span className="text-sm font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between">
                  <span className="text-base font-medium text-gray-900">
                    Total
                  </span>
                  <span className="text-base font-bold text-[#B73B45]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
