"use client";

import { useState, Suspense, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, SlidersHorizontal } from "lucide-react";
import { useCategory } from "@/hooks/queries/useCategories";
import { useProducts } from "@/hooks/queries/useProducts";
import { Category, SubCategory } from "@/types";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice: number;
  stock: number;
  categoryId: string;
  subCategory?: SubCategory;
  images: {
    id: string;
    url: string;
    alt?: string;
    isMain: boolean;
  }[];
  attributes: {
    name: string;
    value: string;
  }[];
}

// interface Category {
//   id: string;
//   name: string;
//   slug?: string;
//   description?: string;
//   image?: string;
// }

export default function CategoryPage() {
  const { data: categoryData, isLoading: categoryLoading } = useCategory();
  const { data: productData, isLoading: productLoading } = useProducts();

  // State for products and filters
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [filtersApplied, setFiltersApplied] = useState({
    priceRange: [500, 2000],
    attributes: [] as string[],
    sort: "newest",
  });

  console.log(filtersApplied);

  useEffect(() => {
    const foundCategory = categoryData?.categories.find(
      (cat: Category) => cat.slug === ""
    );
    setCategory(foundCategory || null);

    const filteredProducts = foundCategory
      ? productData?.products.filter(
          (product: Product) => product?.categoryId === foundCategory?.id
        )
      : productData?.products;

    const filteredByPrice = filteredProducts?.filter(
      (product: Product) =>
        product.salePrice >= filtersApplied.priceRange[0] &&
        product.salePrice <= filtersApplied.priceRange[1]
    );

    // console.log("filteredByPrice", filteredByPrice);

    const filteredByAttributes = filteredByPrice?.filter((product: Product) => {
      return filtersApplied.attributes.some((attr) => {
        // console.log(attr, product.subCategory?.name);
        return product.subCategory?.name === attr;
      });
    });

    console.log("filteredByAttributes", filteredByAttributes);

    if (filtersApplied.attributes.length > 0) {
      setProducts(filteredByAttributes);
    } else {
      setProducts(filteredByPrice);
    }
  }, [categoryData, productData, filtersApplied]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleCheckHandler = (value: string) => {
    if (filtersApplied.attributes.includes(value)) {
      setFiltersApplied({
        ...filtersApplied,
        attributes: filtersApplied.attributes.filter((attr) => attr !== value), // Remove the value from the array
      });
    } else {
      setFiltersApplied({
        ...filtersApplied,
        attributes: [...filtersApplied.attributes, value],
      });
    }
  };

  if (categoryLoading || productLoading) {
    return <div className="min-h-[80vh] bg-[#F7F3F4]">Loading..</div>;
  }

  return (
    <Suspense fallback="Loading..">
      <div className="bg-[#F7F3F4] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-[#B73B45]">
                Home /
              </Link>
              {category ? (
                <span className="text-[#B73B45] font-medium capitalize">
                  &nbsp;{category?.name?.replaceAll("-", " ")}
                </span>
              ) : (
                <span className="text-[#B73B45] font-medium">
                  &nbsp;All Crystals
                </span>
              )}
            </div>
          </motion.div>

          {/* Category Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">All Crystals</h1>
            {/* {category?.description && ( */}
            <p className="mt-2 text-gray-600">description</p>
            {/* )} */}
          </motion.div>

          {/* Filter and Grid Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filter Sidebar - Mobile Toggle */}
            <motion.div
              className="lg:hidden flex justify-between items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm"
              >
                <SlidersHorizontal size={18} />
                <span>Filters</span>
              </button>

              {/* <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  className="bg-white px-3 py-2 rounded-lg shadow-sm text-sm"
                  value={filtersApplied.sort}
                  onChange={(e) =>
                    setFiltersApplied({
                      ...filtersApplied,
                      sort: e.target.value,
                    })
                  }
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div> */}
            </motion.div>

            {/* Filter Sidebar - Mobile Overlay */}
            {filterOpen && (
              <motion.div
                className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setFilterOpen(false)}
              />
            )}

            {/* Filter Sidebar */}
            <motion.div
              className={`
              ${filterOpen ? "fixed inset-y-0 left-0 z-50" : "hidden"} 
              lg:relative lg:block lg:z-auto w-72 bg-white p-6 rounded-lg shadow-lg lg:shadow-md
            `}
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: filterOpen || window.innerWidth >= 1024 ? 0 : -100,
                opacity: filterOpen || window.innerWidth >= 1024 ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-lg font-medium">Filters</h2>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="500"
                    max="2000"
                    value={filtersApplied.priceRange[1]}
                    onChange={(e) =>
                      setFiltersApplied({
                        ...filtersApplied,
                        priceRange: [
                          filtersApplied.priceRange[0],
                          parseInt(e.target.value),
                        ],
                      })
                    }
                    className="w-full accent-[#B73B45]"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>₹{filtersApplied.priceRange[0]}</span>
                    <span>₹{filtersApplied.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Crystal Types */}
              <div className="mb-6">
                {categoryData?.categories?.map(
                  (category: Category, index: number) => (
                    <div
                      className={`${index !== 0 && "pt-5"}`}
                      key={category?.id}
                    >
                      <h3 className="text-md font-medium mb-3 capitalize">
                        {category?.name?.replaceAll("-", " ")}
                      </h3>
                      <div className="space-y-2">
                        {category?.subCategory.map((sub: SubCategory) => (
                          <div key={sub?.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`type-${sub?.name}`}
                              className="h-4 w-4 rounded border-gray-300 text-[#B73B45] focus:ring-[#B73B45]"
                              checked={filtersApplied.attributes.includes(
                                sub?.name
                              )}
                              onChange={() => handleCheckHandler(sub?.name)}
                            />
                            <label
                              htmlFor={`type-${sub?.name}`}
                              className="ml-2 text-sm text-gray-600 capitalize"
                            >
                              {sub?.name?.replaceAll("-", " ")}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Sort - Desktop */}
              <motion.div
                className="hidden lg:flex justify-between items-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-medium">{products?.length}</span>{" "}
                  products
                </p>
              </motion.div>

              {/* Loading State */}
              {productLoading ? (
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {[1, 2, 3, 4, 5, 6].map((placeholder) => (
                    <motion.div
                      key={placeholder}
                      variants={itemFadeIn}
                      className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                      <div className="h-48 md:h-56 lg:h-64 bg-gray-200 animate-pulse" />
                      <div className="p-4">
                        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-3/4" />
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                        <div className="h-6 bg-gray-200 rounded animate-pulse mt-4 w-1/3" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <>
                  {/* Empty State */}
                  {products?.length === 0 ? (
                    <motion.div
                      className="bg-white rounded-xl p-8 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        No products found
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Try adjusting your filters or browse our other
                        categories
                      </p>
                      <Link
                        href="/"
                        className="inline-block bg-[#B73B45] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#8A2A33]"
                      >
                        Explore All Products
                      </Link>
                    </motion.div>
                  ) : (
                    /* Product Grid */
                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {products &&
                        products.map((product: Product) => (
                          <motion.div
                            key={product?.id}
                            variants={itemFadeIn}
                            whileHover={{
                              y: -8,
                              transition: { duration: 0.2 },
                            }}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                          >
                            <Link
                              href={`/product/${product?.id}`}
                              className="block"
                            >
                              <div className="relative h-48 md:h-56 lg:h-64 bg-[#F0E6E8]">
                                {product.images.length > 0 ? (
                                  product.images[0].url && (
                                    <Image
                                      src={
                                        product.images
                                          .map((img) =>
                                            img.isMain ? img.url : undefined
                                          )
                                          .filter(
                                            (url) => url !== undefined
                                          )[0] || product.images[0].url
                                      }
                                      alt="Product Image"
                                      fill
                                      className="object-cover"
                                    />
                                  )
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-[#D6A0A8] opacity-70"></div>
                                  </div>
                                )}
                              </div>

                              <div className="p-4">
                                <h3 className="font-medium text-gray-900">
                                  {product?.name}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                  {
                                    product?.attributes.find(
                                      (attr) => attr?.name === "Crystal Type"
                                    )?.value
                                  }
                                </p>
                                <div className="mt-3 flex items-center">
                                  <span className="text-lg font-bold text-[#B73B45]">
                                    ₹{product?.salePrice?.toFixed(2)}
                                  </span>
                                  {product.salePrice < product.price && (
                                    <span className="ml-2 text-sm text-gray-400 line-through">
                                      ₹{product?.price?.toFixed(2)}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
