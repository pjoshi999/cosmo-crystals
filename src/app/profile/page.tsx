"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

// Define types based on your Prisma schema
interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "CUSTOMER";
  createdAt: Date;
}

interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
  phone: string;
}

interface Order {
  id: string;
  totalAmount: number;
  status:
    | "PENDING"
    | "PROCESSING"
    | "SHIPPED"
    | "DELIVERED"
    | "CANCELLED"
    | "RETURNED"
    | "REFUNDED";
  createdAt: Date;
  items: OrderItem[];
}

interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  total: number;
  productName: string;
}

export default function ProfilePage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
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

  // State hooks
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoaded, setIsLoaded] = useState(false);

  // Mock data - this would come from API in a real app
  const [user] = useState<User>({
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "CUSTOMER",
    createdAt: new Date("2023-15-09"),
  });

  const [addresses] = useState<Address[]>([
    {
      id: "1",
      street: "123 Crystal Lane",
      city: "Serenity",
      state: "CA",
      postalCode: "94123",
      country: "United States",
      isDefault: true,
      phone: "555-123-4567",
    },
    {
      id: "2",
      street: "45 Harmony Road",
      city: "Blissful",
      state: "OR",
      postalCode: "97401",
      country: "United States",
      isDefault: false,
      phone: "555-987-6543",
    },
  ]);

  const [orders] = useState<Order[]>([
    {
      id: "ord_12345",
      totalAmount: 148.0,
      status: "DELIVERED",
      createdAt: new Date("2025-02-15"),
      items: [
        {
          id: "item_1",
          productId: "prod_1",
          quantity: 1,
          price: 68.0,
          total: 68.0,
          productName: "Amethyst Tower",
        },
        {
          id: "item_2",
          productId: "prod_3",
          quantity: 1,
          price: 42.0,
          total: 42.0,
          productName: "Rose Quartz Cluster",
        },
        {
          id: "item_3",
          productId: "prod_4",
          quantity: 1,
          price: 38.0,
          total: 38.0,
          productName: "Selenite Wand",
        },
      ],
    },
    {
      id: "ord_12346",
      totalAmount: 55.0,
      status: "PROCESSING",
      createdAt: new Date("2025-03-08"),
      items: [
        {
          id: "item_4",
          productId: "prod_2",
          quantity: 1,
          price: 55.0,
          total: 55.0,
          productName: "Clear Quartz Point",
        },
      ],
    },
  ]);

  const [wishlistItems] = useState([
    {
      id: "1",
      name: "Black Tourmaline Bracelet",
      properties: "Root Chakra • Protection",
      price: 45.0,
    },
    {
      id: "2",
      name: "Citrine Cluster",
      properties: "Solar Plexus • Abundance",
      price: 78.0,
    },
    {
      id: "3",
      name: "Labradorite Palm Stone",
      properties: "Third Eye • Intuition",
      price: 32.0,
    },
  ]);

  // Simulate data loading
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DELIVERED":
        return "bg-green-100 text-green-800";
      case "PROCESSING":
        return "bg-blue-100 text-blue-800";
      case "SHIPPED":
        return "bg-purple-100 text-purple-800";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-[#F7F3F4] min-h-screen">
      {/* Profile Header */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
        className="bg-[#B73B45] text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={slideUp}
            className="flex items-center space-x-4"
          >
            <div className="w-16 h-16 rounded-full bg-[#F0E6E8] flex items-center justify-center">
              <span className="text-[#B73B45] text-2xl font-bold">
                {user.name.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
              <p className="text-white/80">{user.email}</p>
            </div>
          </motion.div>

          <motion.div
            variants={staggeredContainer}
            className="mt-8 flex space-x-1"
          >
            <motion.button
              variants={slideUp}
              whileHover={{ y: -3 }}
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === "overview"
                  ? "bg-white text-[#B73B45]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Overview
            </motion.button>
            <motion.button
              variants={slideUp}
              whileHover={{ y: -3 }}
              onClick={() => setActiveTab("orders")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === "orders"
                  ? "bg-white text-[#B73B45]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Orders
            </motion.button>
            <motion.button
              variants={slideUp}
              whileHover={{ y: -3 }}
              onClick={() => setActiveTab("addresses")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === "addresses"
                  ? "bg-white text-[#B73B45]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Addresses
            </motion.button>
            <motion.button
              variants={slideUp}
              whileHover={{ y: -3 }}
              onClick={() => setActiveTab("wishlist")}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === "wishlist"
                  ? "bg-white text-[#B73B45]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Wishlist
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Area */}
      <motion.section
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
        className="max-w-7xl mx-auto px-6 py-8"
      >
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={slideUp}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Account Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-gray-800">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="text-gray-800">
                    {user.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-4 py-2 bg-[#F0E6E8] text-[#B73B45] rounded-lg font-medium hover:bg-[#E0C9CD] transition-colors"
              >
                Edit Profile
              </motion.button>
            </motion.div>

            <motion.div
              variants={slideUp}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Recent Orders
              </h2>
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.slice(0, 2).map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-100 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">
                            Order #{order.id.substring(4)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {order.createdAt.toLocaleDateString()}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {order.items.length}{" "}
                          {order.items.length === 1 ? "item" : "items"} • $
                          {order.totalAmount.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No orders yet</p>
              )}
              {orders.length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab("orders")}
                  className="mt-4 px-4 py-2 text-[#B73B45] font-medium rounded-lg hover:bg-[#F0E6E8] transition-colors"
                >
                  View All Orders
                </motion.button>
              )}
            </motion.div>

            <motion.div
              variants={slideUp}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Crystal Recommendations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#F0E6E8]">
                  <div className="w-12 h-12 mb-2 rounded-lg bg-[#D6A0A8] flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#B73B45] rounded-full"></div>
                  </div>
                  <h3 className="font-medium">Rhodonite</h3>
                  <p className="text-sm text-gray-600">
                    Heart Chakra • Emotional Healing
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#F0E6E8]">
                  <div className="w-12 h-12 mb-2 rounded-lg bg-[#E0C9CD] flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#8A2A33] rounded-full"></div>
                  </div>
                  <h3 className="font-medium">Moonstone</h3>
                  <p className="text-sm text-gray-600">
                    Crown Chakra • Intuition
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#F0E6E8]">
                  <div className="w-12 h-12 mb-2 rounded-lg bg-[#C65A64] flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#8A2A33] rounded-full"></div>
                  </div>
                  <h3 className="font-medium">Carnelian</h3>
                  <p className="text-sm text-gray-600">
                    Sacral Chakra • Creativity
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h2
              variants={slideUp}
              className="text-2xl font-bold text-gray-900"
            >
              Your Orders
            </motion.h2>

            {orders.length > 0 ? (
              <motion.div variants={staggeredContainer} className="space-y-6">
                {orders.map((order) => (
                  <motion.div
                    key={order.id}
                    variants={slideUp}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <div>
                          <p className="font-bold text-lg">
                            Order #{order.id.substring(4)}
                          </p>
                          <p className="text-gray-500">
                            {order.createdAt.toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                          <p className="font-bold">
                            ${order.totalAmount.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-4 space-y-4">
                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center py-2"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[#F0E6E8] flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-[#D6A0A8]"></div>
                            </div>
                            <div>
                              <p className="font-medium">{item.productName}</p>
                              <p className="text-sm text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <p className="font-medium">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 border border-[#B73B45] text-[#B73B45] rounded-lg font-medium hover:bg-[#F0E6E8] transition-colors"
                      >
                        Track Order
                      </motion.button>
                      {order.status === "DELIVERED" && (
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 bg-[#B73B45] text-white rounded-lg font-medium hover:bg-[#8A2A33] transition-colors"
                        >
                          Write Review
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                variants={slideUp}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F0E6E8] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#D6A0A8]"></div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  No orders yet
                </h3>
                <p className="text-gray-500 mt-2">
                  Start exploring our crystal collection
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 px-6 py-2 bg-[#B73B45] text-white rounded-lg font-medium hover:bg-[#8A2A33] transition-colors"
                >
                  Shop Now
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Addresses Tab */}
        {activeTab === "addresses" && (
          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <motion.h2
                variants={slideUp}
                className="text-2xl font-bold text-gray-900"
              >
                Your Addresses
              </motion.h2>
              <motion.button
                variants={slideUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-[#B73B45] text-white rounded-lg font-medium hover:bg-[#8A2A33] transition-colors"
              >
                Add New Address
              </motion.button>
            </div>

            <motion.div
              variants={staggeredContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {addresses.map((address) => (
                <motion.div
                  key={address.id}
                  variants={slideUp}
                  className="bg-white rounded-xl shadow-md p-6 relative"
                >
                  {address.isDefault && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-[#D6A0A8] text-[#8A2A33] text-xs font-medium rounded-full">
                      Default
                    </span>
                  )}
                  <h3 className="font-bold text-lg">{address.street}</h3>
                  <p className="text-gray-600 mt-1">
                    {address.city}, {address.state} {address.postalCode}
                  </p>
                  <p className="text-gray-600">{address.country}</p>
                  <p className="text-gray-600 mt-2">{address.phone}</p>

                  <div className="mt-4 flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                    >
                      Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                    >
                      Delete
                    </motion.button>
                    {!address.isDefault && (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-3 py-1.5 border border-[#B73B45] text-[#B73B45] rounded-lg text-sm hover:bg-[#F0E6E8] transition-colors"
                      >
                        Set as Default
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Wishlist Tab */}
        {activeTab === "wishlist" && (
          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h2
              variants={slideUp}
              className="text-2xl font-bold text-gray-900"
            >
              Your Wishlist
            </motion.h2>

            {wishlistItems.length > 0 ? (
              <motion.div
                variants={staggeredContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {wishlistItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={slideUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="h-48 bg-[#F0E6E8] relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-lg bg-[#D6A0A8] opacity-60"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.properties}</p>
                      <p className="text-[#B73B45] font-bold mt-3">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="mt-4 flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 px-4 py-2 bg-[#B73B45] text-white rounded-lg font-medium hover:bg-[#8A2A33] transition-colors"
                        >
                          Add to Cart
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Remove
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                variants={slideUp}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F0E6E8] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#D6A0A8]"></div>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Your wishlist is empty
                </h3>
                <p className="text-gray-500 mt-2">
                  Save your favorite crystals for later
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 px-6 py-2 bg-[#B73B45] text-white rounded-lg font-medium hover:bg-[#8A2A33] transition-colors"
                >
                  Explore Products
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.section>

      {/* Crystal Energy Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F0E6E8] rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#D6A0A8] opacity-40"></div>
            <div className="absolute bottom-5 right-20 w-16 h-16 rounded-full bg-[#B73B45] opacity-20"></div>
            <div className="relative z-10 md:max-w-xl">
              <h3 className="text-2xl font-bold text-[#B73B45]">
                Enhance your crystal journey
              </h3>
              <p className="text-gray-600 mt-2">
                Your crystal collection is carefully curated to balance your
                energy and enhance your spiritual path.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-[#B73B45] text-white rounded-full font-medium shadow-md hover:bg-[#8A2A33] transition-colors"
              >
                DISCOVER YOUR CRYSTAL
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
