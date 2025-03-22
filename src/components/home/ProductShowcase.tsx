// "use client";

// import { useState } from "react";
// import ProductCard from "@/components/home/ProductCard";
// import Button from "../ui/Button";
// import type { Product } from "@/types";

// // Mock data - in a real app, fetch this from your API
// const newArrivals: Product[] = [
//   {
//     id: "1",
//     name: "Amethyst Healing Crystal",
//     description: "A powerful stone for spiritual growth and protection.",
//     price: 49.99,
//     salePrice: 39.99,
//     stock: 25,
//     categoryId: "1",
//     category: { id: "1", name: "Crystals" },
//     images: [
//       {
//         id: "1",
//         productId: "1",
//         url: "/images/products/amethyst.jpg",
//         alt: "Amethyst Crystal",
//         isMain: true,
//       },
//     ],
//   },
//   {
//     id: "2",
//     name: "Rose Quartz Love Stone",
//     description: "Enhance love and harmony in your life with this gentle crystal.",
//     price: 29.99,
//     salePrice: 24.99,
//     stock: 40,
//     categoryId: "1",
//     category: { id: "1", name: "Crystals" },
//     images: [
//       {
//         id: "2",
//         productId: "2",
//         url: "/images/products/rose-quartz.jpg",
//         alt: "Rose Quartz Crystal",
//         isMain: true,
//       },
//     ],
//   },
// ];

// const bestSellers: Product[] = [
//   {
//     id: "3",
//     name: "Citrine Abundance Crystal",
//     description: "Attract wealth and prosperity with citrine energy.",
//     price: 39.99,
//     salePrice: 34.99,
//     stock: 30,
//     categoryId: "1",
//     category: { id: "1", name: "Crystals" },
//     images: [
//       {
//         id: "3",
//         productId: "3",
//         url: "/images/products/citrine.jpg",
//         alt: "Citrine Crystal",
//         isMain: true,
//       },
//     ],
//   },
//   {
//     id: "4",
//     name: "Clear Quartz Energy Amplifier",
//     description: "A master healer that amplifies energy and intentions.",
//     price: 19.99,
//     salePrice: 16.99,
//     stock: 50,
//     categoryId: "1",
//     category: { id: "1", name: "Crystals" },
//     images: [
//       {
//         id: "4",
//         productId: "4",
//         url: "/images/products/clear-quartz.jpg",
//         alt: "Clear Quartz Crystal",
//         isMain: true,
//       },
//     ],
//   },
// ];

// type Tab = "new-arrivals" | "best-sellers";

// export default function ProductsShowcase() {
//   const [activeTab, setActiveTab] = useState<Tab>("new-arrivals");

//   return (
//     <section className="section bg-white">
//       <div className="container">
//         <h2 className="section-title">Cosmo Crystals Collection</h2>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8 space-x-4 border-b">
//           <button
//             className={`pb-2 text-lg font-medium transition-colors border-b-2 px-4 ${
//               activeTab === "new-arrivals"
//                 ? "border-[#B73B45] text-[#B73B45]"
//                 : "border-transparent text-gray-600 hover:text-gray-900"
//             }`}
//             onClick={() => setActiveTab("new-arrivals")}
//           >
//             New Arrivals
//           </button>
//           <button
//             className={`pb-2 text-lg font-medium transition-colors border-b-2 px-4 ${
//               activeTab === "best-sellers"
//                 ? "border-[#B73B45] text-[#B73B45]"
//                 : "border-transparent text-gray-600 hover:text-gray-900"
//             }`}
//             onClick={() => setActiveTab("best-sellers")}
//           >
//             Best Sellers
//           </button>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {activeTab === "new-arrivals" &&
//             newArrivals.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}

//           {activeTab === "best-sellers" &&
//             bestSellers.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Button href="/shop" variant="primary">
//             View All Crystals
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
