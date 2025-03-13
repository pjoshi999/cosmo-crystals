"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import { Heart } from "lucide-react";

// Product type based on your Prisma schema
interface ProductImage {
  id: string;
  url: string;
  alt?: string;
  isMain: boolean;
}

interface ProductAttribute {
  name: string;
  value: string;
}

interface Product {
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
  category: {
    name: string;
    slug?: string;
  };
  images: ProductImage[];
  attributes: ProductAttribute[];
}

export default function ProductDetail() {
  // This would be replaced with actual API fetch in production
  const [product] = useState<Product>({
    id: "1",
    name: "Gold Crystal Ring Set",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 150,
    salePrice: 120,
    stock: 15,
    weight: 20,
    categoryId: "1",
    category: {
      name: "Rings",
      slug: "rings",
    },
    images: [
      {
        id: "1",
        url: "/assets/prod1.png",
        alt: "Gold Crystal Ring Set - Top View",
        isMain: true,
      },
      {
        id: "2",
        url: "/assets/prod2.png",
        alt: "Gold Crystal Ring Set - Side View",
        isMain: false,
      },
      {
        id: "3",
        url: "/assets/prod3.png",
        alt: "Gold Crystal Ring Set - Worn Example",
        isMain: false,
      },
      {
        id: "4",
        url: "/assets/prod1.png",
        alt: "Gold Crystal Ring Set - Detail View",
        isMain: false,
      },
    ],
    attributes: [
      { name: "Material", value: "Gold Plated" },
      { name: "Crystals", value: "Clear Quartz" },
      { name: "Energy", value: "Amplification" },
      { name: "Chakra", value: "Crown" },
    ],
  });

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Would connect to your cart functionality
    console.log(`Adding ${quantity} of ${product.name} to cart`);
  };

  const handleAddToWishList = () => {
    // Would connect to your wishlist functionality
    console.log(`Adding ${product.name} to wishlist`);
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Head>
        <title>{`${product.name} | Cosmo Crystals`}</title>
        <meta
          name="description"
          content={`${product.name} - ${product.description.substring(
            0,
            150
          )}...`}
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Product images */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-4"
          >
            {/* Thumbnail sidebar */}
            <div className="flex md:flex-col gap-3 order-2 md:order-1">
              {product.images.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`w-20 h-20 border rounded-xl overflow-hidden cursor-pointer ${
                    selectedImage === index
                      ? "border-[#B73B45] border-2"
                      : "border-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-white" />
                    <Image
                      src={product?.images[index]?.url}
                      alt={product?.images[index]?.alt || product?.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 order-1 md:order-2">
              <motion.div
                className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={selectedImage} // Force re-render on image change
              >
                {/* Using a div with background for demo - replace with actual Image component in production */}
                <div className="absolute inset-0 bg-white" />

                {/* This would be your actual image in production */}
                <Image
                  src={product?.images[selectedImage]?.url}
                  alt={product?.images[selectedImage]?.alt || product?.name}
                  fill
                  className="object-cover"
                />
                {/* <SideBySideMagnifier
                  imageSrc={product.images[selectedImage].url}
                  largeImageSrc={product.images[selectedImage].url}
                  alwaysInPlace={false}
                  fillGapTop={20}
                  fillGapRight={20}
                  fillGapBottom={20}
                  fillGapLeft={20}
                  className="rounded-lg object-cover"
                /> */}
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Product info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="flex flex-col"
          >
            <div className="mb-6">
              <p className="text-gray-500">Lorem ipsum</p>
              <h1 className="text-2xl font-medium text-gray-800 my-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-[#EA5C6F]">
                  ${product.salePrice}
                </span>
                {product.salePrice < product.price && (
                  <span className="text-gray-400 line-through">
                    ${product.price}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-500 mb-4">Lorem ipsum</p>

              <div className="grid grid-cols-4 gap-3 my-4">
                {product.attributes.map((attr, index) => (
                  <div
                    key={index}
                    className="border-[2.45px] border-[#D1D5DB] rounded-lg p-3 flex flex-col items-center justify-center text-center hover:border-[#B73B45] transition-colors"
                  >
                    <div className="w-8 h-8 mb-2">
                      {/* Icon based on attribute type - simplified for demo */}
                      <div className="w-full h-full bg-gray-200 rounded-full" />
                    </div>
                    <span className="text-sm font-medium">{attr.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex border border-gray-200 rounded-md">
                <button
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#B73B45]"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <div className="w-12 h-10 flex items-center justify-center border-x border-gray-200">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#B73B45]"
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                >
                  +
                </button>
              </div>

              <motion.button
                className="flex-1 bg-[#EA5C6F] text-white py-3 px-6 rounded-md font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
              >
                Buy Now
              </motion.button>

              <motion.button
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToWishList}
              >
                <Heart size={20} className="text-gray-500" />
              </motion.button>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-medium mb-4">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
