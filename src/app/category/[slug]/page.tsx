"use client";

import { useState, Suspense, useEffect, use } from "react";
// import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, SlidersHorizontal } from "lucide-react";
import { useCategory } from "@/hooks/queries/useCategories";
import { useProducts } from "@/hooks/queries/useProducts";
import { Category } from "@/types";

// Types based on your Prisma schema
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice: number;
  stock: number;
  categoryId: string;
  subcategory?: string;
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

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  // const searchParams = useSearchParams();
  // const categorySlug = searchParams.get("slug") || "";

  const { data: categoryData, isLoading: categoryLoading } = useCategory();
  const { data: productData, isLoading: productLoading } = useProducts();

  console.log(categoryData, productData);

  // State for products and filters
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [filtersApplied, setFiltersApplied] = useState({
    priceRange: [0, 500],
    attributes: [] as string[],
    sort: "newest",
  });

  console.log(filtersApplied);

  // Sample categories data - in production you'd fetch these
  // const categories: Category[] = [
  //   {
  //     id: "1",
  //     name: "Healing",
  //     slug: "healing",
  //     description: "Crystals for healing and wellness",
  //   },
  //   {
  //     id: "2",
  //     name: "Protection",
  //     slug: "protection",
  //     description: "Crystals for protection and safety",
  //   },
  //   {
  //     id: "3",
  //     name: "Meditation",
  //     slug: "meditation",
  //     description: "Crystals for meditation and mindfulness",
  //   },
  //   {
  //     id: "4",
  //     name: "Rings",
  //     slug: "rings",
  //     description: "Crystal rings for everyday wear",
  //   },
  // ];

  // Sample products data - in production you'd fetch these based on category
  // const sampleProducts: Product[] = [
  //   {
  //     id: "1",
  //     name: "Rose Quartz Crystal",
  //     description: "A beautiful rose quartz crystal for love and healing",
  //     price: 45,
  //     salePrice: 39.99,
  //     stock: 10,
  //     categoryId: "1",
  //     images: [
  //       {
  //         id: "1",
  //         url: "/images/rose-quartz.jpg",
  //         alt: "Rose Quartz",
  //         isMain: true,
  //       },
  //     ],
  //     attributes: [
  //       { name: "Crystal Type", value: "Rose Quartz" },
  //       { name: "Chakra", value: "Heart" },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     name: "Amethyst Cluster",
  //     description: "Natural amethyst cluster for spiritual growth",
  //     price: 60,
  //     salePrice: 60,
  //     stock: 5,
  //     categoryId: "1",
  //     subcategory: "clusters",
  //     images: [
  //       {
  //         id: "2",
  //         url: "/images/amethyst.jpg",
  //         alt: "Amethyst Cluster",
  //         isMain: true,
  //       },
  //     ],
  //     attributes: [
  //       { name: "Crystal Type", value: "Amethyst" },
  //       { name: "Chakra", value: "Crown" },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     name: "Black Tourmaline",
  //     description: "Protective black tourmaline crystal",
  //     price: 35,
  //     salePrice: 29.99,
  //     stock: 15,
  //     categoryId: "2",
  //     images: [
  //       {
  //         id: "3",
  //         url: "/images/black-tourmaline.jpg",
  //         alt: "Black Tourmaline",
  //         isMain: true,
  //       },
  //     ],
  //     attributes: [
  //       { name: "Crystal Type", value: "Black Tourmaline" },
  //       { name: "Chakra", value: "Root" },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     name: "Clear Quartz Point",
  //     description: "Clear quartz point for energy amplification",
  //     price: 25,
  //     salePrice: 25,
  //     stock: 20,
  //     categoryId: "3",
  //     images: [
  //       {
  //         id: "4",
  //         url: "/images/clear-quartz.jpg",
  //         alt: "Clear Quartz Point",
  //         isMain: true,
  //       },
  //     ],
  //     attributes: [
  //       { name: "Crystal Type", value: "Clear Quartz" },
  //       { name: "Chakra", value: "All" },
  //     ],
  //   },
  // ];

  useEffect(() => {
    // In production, fetch products based on category from your API
    // setIsLoading(true);

    // Find the category based on slug
    const foundCategory = categoryData?.categories.find(
      (cat: Category) => cat.slug === slug.toLowerCase()
    );
    setCategory(foundCategory || null);

    // Filter products by category (simulating API response)
    const filteredProducts = foundCategory
      ? productData?.products.filter(
          (product: Product) => product?.categoryId === foundCategory?.id
        )
      : [];

    setProducts(filteredProducts);
  }, [slug, categoryData, productData]);

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

  // Function to handle applying filters
  const applyFilters = () => {
    // In production, you would refetch products with the new filters
    // For now, we'll just close the filter panel
    setFilterOpen(false);
  };

  if (categoryLoading || productLoading) {
    return "Loading..";
  }

  return (
    <Suspense fallback="Loading...">
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
                Home
              </Link>
              {category ? (
                <span className="text-[#B73B45] font-medium">
                  {category.name}
                </span>
              ) : (
                <span className="text-[#B73B45] font-medium">All Crystals</span>
              )}
              <span className="text-[#B73B45] font-medium">All Crystals</span>
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

              <div className="flex items-center gap-2">
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
              </div>
            </motion.div>

            {/* Filter Sidebar - Mobile Overlay */}
            {filterOpen && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
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
                    min="0"
                    max="500"
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
                    <span>${filtersApplied.priceRange[0]}</span>
                    <span>${filtersApplied.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Crystal Types */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-3">Crystal Type</h3>
                <div className="space-y-2">
                  {[
                    "Rose Quartz",
                    "Amethyst",
                    "Clear Quartz",
                    "Black Tourmaline",
                    "Selenite",
                  ].map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`type-${type}`}
                        className="h-4 w-4 rounded border-gray-300 text-[#B73B45] focus:ring-[#B73B45]"
                      />
                      <label
                        htmlFor={`type-${type}`}
                        className="ml-2 text-sm text-gray-600"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chakras */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-3">Chakra</h3>
                <div className="space-y-2">
                  {[
                    "Root",
                    "Sacral",
                    "Solar Plexus",
                    "Heart",
                    "Throat",
                    "Third Eye",
                    "Crown",
                    "All",
                  ].map((chakra) => (
                    <div key={chakra} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`chakra-${chakra}`}
                        className="h-4 w-4 rounded border-gray-300 text-[#B73B45] focus:ring-[#B73B45]"
                      />
                      <label
                        htmlFor={`chakra-${chakra}`}
                        className="ml-2 text-sm text-gray-600"
                      >
                        {chakra}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply Filters Button - Mobile only */}
              <div className="mt-8 lg:hidden">
                <button
                  onClick={applyFilters}
                  className="w-full bg-[#B73B45] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#8A2A33] transition-colors"
                >
                  Apply Filters
                </button>
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
                  <span className="font-medium">
                    {productData?.products?.length}
                  </span>{" "}
                  products
                </p>

                <div className="flex items-center gap-2">
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
                </div>
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
                                {/* This would be your actual image component in production */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-24 h-24 rounded-full bg-[#D6A0A8] opacity-70"></div>
                                </div>
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
                                    ${product?.salePrice?.toFixed(2)}
                                  </span>
                                  {product.salePrice < product.price && (
                                    <span className="ml-2 text-sm text-gray-400 line-through">
                                      ${product?.price?.toFixed(2)}
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
