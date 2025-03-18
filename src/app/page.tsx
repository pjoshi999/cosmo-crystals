"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useCategory } from "@/hooks/queries/useCategories";
import { useProducts } from "@/hooks/queries/useProducts";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "CUSTOMER";
};
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice: number;
  stock: number;
  weight?: number;
  length?: number;
  width?: number;
  height?: number;
  categoryId: string;
  subcategory?: string;
  images: ProductImage[];
  attributes: ProductAttribute[];
  reviews?: Review[];
}

export type ProductImage = {
  url: string;
  alt?: string;
  isMain: boolean;
};

export type ProductAttribute = {
  name: string;
  value: string;
};

export type Category = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  image?: string;
};

export type Review = {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment?: string;
  user?: User;
};

export default function Home() {
  const { data: categoryData, isLoading: categoryLoading } = useCategory({
    limit: 4,
  });
  const { data: productData, isLoading: productLoading } = useProducts({
    limit: 8,
  });
  console.log(productData, categoryData);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggeredContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Sample data for categories
  // const categories: Category[] = [
  //   {
  //     id: 1,
  //     name: "Healing",
  //     description: "Restore balance and promote wellness",
  //     image: "/images/healing.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Meditation",
  //     description: "Deepen your spiritual practice",
  //     image: "/images/meditation.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Protection",
  //     description: "Shield your energy and space",
  //     image: "/images/protection.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Abundance",
  //     description: "Attract prosperity and fulfillment",
  //     image: "/images/abundance.jpg",
  //   },
  // ];

  // Sample data for products
  // const products: Product[] = [
  //   {
  //     id: 1,
  //     name: "Rose Quartz Cluster",
  //     properties: "Heart Chakra • Love",
  //     price: 42,
  //     image: "/images/rose-quartz.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Amethyst Tower",
  //     properties: "Crown Chakra • Spiritual Growth",
  //     price: 68,
  //     image: "/images/amethyst.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Clear Quartz Point",
  //     properties: "All Chakras • Energy Amplifier",
  //     price: 55,
  //     image: "/images/clear-quartz.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Selenite Wand",
  //     properties: "Third Eye • Clarity",
  //     price: 38,
  //     image: "/images/selenite.jpg",
  //   },
  // ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "The amethyst from Cosmo Crystals has completely transformed my meditation practice. The energy is incredibly pure.",
      name: "Sarah J.",
      color: "bg-[#D6A0A8]",
    },
    {
      id: 2,
      text: "I've been collecting crystals for years, and the quality from Cosmo Crystals is unmatched. Their customer service is exceptional.",
      name: "Michael T.",
      color: "bg-[#B73B45]",
    },
    {
      id: 3,
      text: "The crystal finder quiz led me to exactly what I needed at this point in my life. Truly life-changing experience.",
      name: "Emma R.",
      color: "bg-[#E0C9CD]",
    },
  ];

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-[#F7F3F4] min-h-screen">
        <Head>
          <title>Cosmo Crystals | Spiritual Healing Crystals</title>
          <meta
            name="description"
            content="Ethically sourced crystals for spiritual awakening and healing"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {/* Hero Section */}
          <section className="bg-[#F0E6E8] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                className="space-y-6"
              >
                <motion.h2
                  variants={slideUp}
                  className="text-4xl md:text-5xl font-bold text-[#B73B45] leading-tight"
                >
                  Discover the cosmic energy within
                </motion.h2>
                <motion.p variants={slideUp} className="text-lg text-gray-600">
                  Ethically sourced crystals for spiritual awakening
                </motion.p>
                <motion.button
                  variants={slideUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#B73B45] text-white px-8 py-3 rounded-full font-medium tracking-wide shadow-md hover:shadow-lg transition-all"
                >
                  EXPLORE
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#E0C9CD] rounded-2xl">
                  <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 bg-[#B73B45] opacity-80 transform -rotate-12"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 rounded-full bg-[#8A2A33] opacity-60"></div>
                  <div className="absolute top-1/2 left-1/6 w-1/6 h-1/3 rounded-full bg-[#D6A0A8] opacity-70 transform -translate-y-1/2"></div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Categories */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 mb-10"
              >
                Shop by intention
              </motion.h2>

              <motion.div
                variants={staggeredContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {categoryLoading
                  ? "Loading.."
                  : categoryData.categories.map((category: Category) => (
                      <motion.a
                        href="/category"
                        key={category.id}
                        variants={slideUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                      >
                        <div className={`h-48 bg-[#C65A64]`}></div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900">
                            {category.name}
                          </h3>
                          <p className="text-gray-600 mt-2">
                            {category.description}
                          </p>
                        </div>
                      </motion.a>
                    ))}
              </motion.div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 mb-10"
              >
                Bestselling crystals
              </motion.h2>

              <motion.div
                variants={staggeredContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {productLoading
                  ? "Loading.."
                  : productData.products.map((product: Product) => (
                      <motion.a
                        href={`/product/${product.id}`}
                        key={product.id}
                        variants={slideUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        className="bg-white rounded-2xl shadow-md overflow-hidden"
                      >
                        <div className="h-64 bg-[#F0E6E8] relative">
                          {/* Crystal shape placeholder based on product id */}
                          {/* {product.id === 1 && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#B73B45] opacity-30"></div>
                          )}
                          {product.id === 2 && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-36 rotate-45 bg-[#8A2A33] opacity-40"></div>
                          )}
                          {product.id === 3 && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#D6A0A8] opacity-50"></div>
                          )}
                          {product.id === 4 && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-[#C65A64] opacity-40"></div>
                          )} */}
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {product.description.length > 50
                              ? product.description.slice(0, 50)
                              : product.description}
                          </p>
                          <div className="flex items-center gap-3 mt-3">
                            <span className="text-[#B73B45] font-bold">
                              ${product.salePrice}
                            </span>
                            {product.salePrice < product.price && (
                              <span className="text-gray-400 line-through">
                                ${product.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.a>
                    ))}
              </motion.div>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-[#B73B45] py-16 md:py-24 text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-3 space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Unlock the ancient wisdom
                </h2>
                <p className="text-white/90">
                  Explore our comprehensive crystal guides and tutorials
                  <br />
                  to enhance your spiritual journey
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full border border-white text-sm font-medium"
                  >
                    CRYSTAL GUIDE
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full border border-white text-sm font-medium"
                  >
                    CHAKRA SYSTEM
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full border border-white text-sm font-medium"
                  >
                    MEDITATION
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-2 h-64 md:h-auto rounded-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[#F0E6E8] rounded-2xl">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#8A2A33] opacity-60"></div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900 mb-10"
              >
                What our community says
              </motion.h2>

              <motion.div
                variants={staggeredContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {testimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    variants={slideUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl shadow-md p-6"
                  >
                    <p className="text-gray-600 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full ${testimonial.color}`}
                      ></div>
                      <span className="ml-3 font-bold text-gray-900">
                        {testimonial.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#F0E6E8] rounded-2xl p-8 md:p-10"
              >
                <div className="md:flex md:items-center md:justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-[#B73B45]">
                      Join our cosmic community
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Subscribe for celestial updates and exclusive offers
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#B73B45] focus:border-transparent"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#B73B45] text-white px-6 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all"
                    >
                      SUBSCRIBE
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
