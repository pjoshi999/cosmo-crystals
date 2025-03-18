"use client";

import { use, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import { Heart } from "lucide-react";
import { useProduct } from "@/hooks/queries/useProducts";

// Product type based on your Prisma schema
interface ProductImage {
  id: string;
  url: string;
  alt?: string;
  isMain: boolean;
}

// interface ProductAttribute {
//   name: string;
//   value: string;
// }

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   salePrice: number;
//   stock: number;
//   weight?: number;
//   length?: number;
//   width?: number;
//   height?: number;
//   categoryId: string;
//   subcategory?: string;
//   category: {
//     name: string;
//     slug?: string;
//   };
//   images: ProductImage[];
//   attributes: ProductAttribute[];
// }

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { data: product, isLoading: productLoading } = useProduct(slug);

  console.log(product);

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

  if (productLoading) return <div>Loading...</div>;

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
              {productLoading
                ? "Loading.."
                : product.images.map((image: ProductImage, index: number) => (
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
