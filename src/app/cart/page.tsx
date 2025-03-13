"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, Trash2 } from "lucide-react";

// Define cart item types
interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
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

  // Sample cart items data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      productId: "product1",
      name: "Rose Quartz Cluster",
      price: 42,
      quantity: 1,
      image: "/images/rose-quartz.jpg",
    },
    {
      id: "2",
      productId: "product2",
      name: "Amethyst Tower",
      price: 68,
      quantity: 2,
      image: "/images/amethyst.jpg",
    },
    {
      id: "3",
      productId: "product3",
      name: "Clear Quartz Point",
      price: 55,
      quantity: 1,
      image: "/images/clear-quartz.jpg",
    },
  ]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 8.95;
  const total = subtotal + shipping;

  // Update quantity function
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item function
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-[#F7F3F4] min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        >
          Your Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-md p-10 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Discover our collection of ethically sourced crystals to begin
              your spiritual journey.
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#B73B45] text-white px-8 py-3 rounded-full font-medium tracking-wide shadow-md hover:shadow-lg transition-all inline-flex items-center"
              >
                Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggeredContainer}
              className="md:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Items ({cartItems.length})
                  </h2>

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={slideUp}
                        className="flex items-center space-x-4 pb-6 border-b border-gray-100"
                      >
                        {/* Product image placeholder */}
                        <div className="w-20 h-20 bg-[#F0E6E8] rounded-lg flex-shrink-0 relative">
                          <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#D6A0A8] opacity-60"></div>
                        </div>

                        {/* Product info */}
                        <div className="flex-grow">
                          <h3 className="font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-[#B73B45] font-bold mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200"
                          >
                            <Minus className="h-4 w-4 text-gray-500" />
                          </motion.button>

                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200"
                          >
                            <Plus className="h-4 w-4 text-gray-500" />
                          </motion.button>
                        </div>

                        {/* Remove button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                          className="ml-2 text-gray-400 hover:text-[#B73B45]"
                        >
                          <Trash2 className="h-5 w-5" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex justify-between">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-[#B73B45]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 flex flex-col gap-0">
                  <Link href="/checkout">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-[#B73B45] text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      Proceed to Checkout
                    </motion.button>
                  </Link>

                  <Link href="/products">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-transparent text-gray-600 px-6 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all"
                    >
                      Continue Shopping
                    </motion.button>
                  </Link>
                </div>

                {subtotal < 100 && (
                  <div className="mt-6 p-4 bg-[#F0E6E8] rounded-xl text-sm">
                    <p className="text-[#8A2A33]">
                      Add ${(100 - subtotal).toFixed(2)} more to qualify for
                      free shipping!
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
