"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/queries/useCart";
import { Product } from "@/types";
import {
  removeFromCartService,
  updateCartService,
} from "@/lib/features/cartSlice";
import { toast } from "sonner";
import { useAppStore } from "@/hooks/hooks";
import Image from "next/image";
import debounce from "@/utils/debounce";

// Define cart item types
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
}

export default function Cart() {
  const store = useAppStore();
  const { data, isLoading } = useCart();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (data) {
      setCartItems(data);
    }
  }, [data]);

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

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Calculate totals
  const subtotal = cartItems?.reduce(
    (sum: number, item: CartItem) =>
      sum + item?.product?.price * item?.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 99;
  const total = subtotal + shipping;

  // Update quantity function
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.productId === id ? { ...item, quantity: newQuantity } : item
      )
    );
    debouncedUpdateAPI(id, newQuantity);
  };

  const debouncedUpdateAPI = useMemo(
    () =>
      debounce((productId: string, newQuantity: number) => {
        store.dispatch(
          updateCartService({
            productId: productId,
            quantity: newQuantity,
          })
        );
      }, 1000),
    [store]
  );

  // Remove item function
  const removeItem = async (id: string) => {
    const resultAction = await store.dispatch(
      removeFromCartService({
        productId: id,
      })
    );

    if (removeFromCartService.fulfilled.match(resultAction)) {
      toast.success("Item removed from cart");
    }
  };

  if (isLoading)
    return (
      <div className="min-h-[80vh] bg-[#F7F3F4] flex items-center justify-center">
        <Image src="/assets/logo4.png" alt="" width={150} height={150} />
      </div>
    );

  return (
    <div className="bg-[#F7F3F4]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8"
        >
          Your Cart
        </motion.h1>

        {data?.length === 0 ? (
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-md p-6 sm:p-10 text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Discover our collection of ethically sourced crystals to begin
              your spiritual journey.
            </p>
            <motion.a
              href="/category"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#B73B45] text-white px-6 sm:px-8 py-3 rounded-full font-medium tracking-wide shadow-md hover:shadow-lg transition-all inline-flex items-center"
            >
              Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggeredContainer}
              className="md:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-5 sm:p-6">
                  {/* Empty cart state */}
                  {!cartItems?.length && (
                    <div className="py-12 text-center">
                      <ShoppingCart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-500">Your cart is empty</p>
                      <button className="mt-4 px-6 py-2 bg-[#B73B45] text-white rounded-full hover:bg-[#9c323a] transition-colors">
                        Continue Shopping
                      </button>
                    </div>
                  )}

                  {/* Cart items */}
                  <div className="space-y-6">
                    {cartItems?.map((item: CartItem) => (
                      <motion.div
                        key={item.id}
                        variants={slideUp}
                        className="lg:p-2 p-0 divide-y divide-gray-100 rounded-xl"
                      >
                        <div className="flex items-start gap-4">
                          <Link
                            href={`/product/${item?.product?.id}`}
                            className="w-24 h-24 sm:w-40 sm:h-40 bg-[#F0E6E8] rounded-lg flex-shrink-0 relative overflow-hidden"
                          >
                            <Image
                              src={
                                item?.product?.images
                                  .map((img) =>
                                    img.isMain ? img.url : undefined
                                  )
                                  .filter((url) => url !== undefined)[0] ||
                                item?.product?.images[0]?.url
                              }
                              alt={item?.product?.name || "Product Image"}
                              fill
                              className="object-cover"
                            />
                          </Link>

                          {/* Product details */}
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <Link
                                href={`/product/${item?.product?.id}`}
                                className="font-medium text-gray-900 text-base sm:text-lg line-clamp-2"
                              >
                                {item?.product?.name}
                              </Link>

                              {/* Remove button */}
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeItem(item?.product?.id)}
                                className="text-gray-400 hover:text-[#B73B45] p-1"
                                aria-label="Remove item"
                              >
                                <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                              </motion.button>
                            </div>

                            {/* Price information with better hierarchy */}
                            <div className="mt-2 mb-4">
                              <div className="flex lg:flex-row flex-col items-baseline gap-2">
                                <div className="flex items-baseline gap-2">
                                  <p className="text-[#B73B45] font-bold text-lg">
                                    ₹{item?.product?.salePrice?.toFixed(2)}
                                  </p>
                                  <span className="text-gray-400 line-through text-sm">
                                    ₹{item?.product?.price}
                                  </span>
                                </div>
                                {/* Discount percentage */}
                                {item?.product?.price &&
                                  item?.product?.salePrice && (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                      {Math.round(
                                        (1 -
                                          item.product.salePrice /
                                            item.product.price) *
                                          100
                                      )}
                                      % off
                                    </span>
                                  )}
                              </div>
                            </div>

                            {/* Quantity controls */}
                            <div className="flex items-center justify-between">
                              <div className="inline-flex items-center border border-gray-200 rounded-full px-2 py-1">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  disabled={item.quantity <= 1}
                                  onClick={() =>
                                    updateQuantity(
                                      item.productId,
                                      item.quantity - 1
                                    )
                                  }
                                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                    item.quantity <= 1
                                      ? "opacity-50 cursor-not-allowed"
                                      : ""
                                  }`}
                                >
                                  <Minus className="h-4 w-4 text-gray-500" />
                                </motion.button>

                                <span className="w-10 text-center font-medium">
                                  {item?.quantity}
                                </span>

                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() =>
                                    updateQuantity(
                                      item?.productId,
                                      item?.quantity + 1
                                    )
                                  }
                                  className="w-8 h-8 flex items-center justify-center rounded-full"
                                >
                                  <Plus className="h-4 w-4 text-gray-500" />
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </div>
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
              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 sticky top-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm sm:text-base">
                      Subtotal
                    </span>
                    <span className="font-medium text-sm sm:text-base">
                      ₹{subtotal?.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm sm:text-base">
                      Shipping
                    </span>
                    <span className="font-medium text-sm sm:text-base">
                      {shipping === 0 ? "Free" : `₹${shipping?.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-3 sm:pt-4 flex justify-between">
                    <span className="font-bold text-gray-900 text-sm sm:text-base">
                      Total
                    </span>
                    <span className="font-bold text-[#B73B45] text-sm sm:text-base">
                      ₹{total?.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 flex flex-col gap-2">
                  <Link href="/checkout" className="w-full">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      disabled={cartItems?.length === 0}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-[#B73B45] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      Proceed to Checkout
                    </motion.button>
                  </Link>

                  <Link href="/category" className="w-full">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-transparent text-gray-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all text-sm sm:text-base"
                    >
                      Continue Shopping
                    </motion.button>
                  </Link>
                </div>

                {subtotal < 100 && (
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#F0E6E8] rounded-xl text-xs sm:text-sm">
                    <p className="text-[#8A2A33]">
                      Add ₹{(100 - subtotal)?.toFixed(2)} more to qualify for
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
