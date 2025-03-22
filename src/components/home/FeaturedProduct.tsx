// "use client";
// import ProductCard from "@/components/home/ProductCard";
// import Button from "../ui/Button";
// import type { Product } from "@/types";

// // Featured Crystals Data
// const featuredProducts: Product[] = [
//   {
//     id: "1",
//     name: "Amethyst Healing Stone",
//     description: "A calming crystal that promotes tranquility and inner peace.",
//     price: 29.99,
//     salePrice: 24.99,
//     stock: 50,
//     categoryId: "1",
//     category: { id: "1", name: "Healing Crystals" },
//     images: [
//       {
//         id: "1",
//         productId: "1",
//         url: "/images/products/amethyst.jpg",
//         alt: "Amethyst Healing Stone",
//         isMain: true,
//       },
//     ],
//   },
//   {
//     id: "2",
//     name: "Rose Quartz Heart",
//     description: "A symbol of love and harmony, perfect for emotional healing.",
//     price: 19.99,
//     salePrice: 15.99,
//     stock: 30,
//     categoryId: "2",
//     category: { id: "2", name: "Zodiac Crystals" },
//     images: [
//       {
//         id: "2",
//         productId: "2",
//         url: "/images/products/rose-quartz.jpg",
//         alt: "Rose Quartz Heart",
//         isMain: true,
//       },
//     ],
//   },
//   {
//     id: "3",
//     name: "Citrine Prosperity Crystal",
//     description: "Attracts wealth, abundance, and positive energy.",
//     price: 39.99,
//     salePrice: 34.99,
//     stock: 25,
//     categoryId: "3",
//     category: { id: "3", name: "Energy Stones" },
//     images: [
//       {
//         id: "3",
//         productId: "3",
//         url: "/images/products/citrine.jpg",
//         alt: "Citrine Prosperity Crystal",
//         isMain: true,
//       },
//     ],
//   },
//   {
//     id: "4",
//     name: "Black Obsidian Protection Stone",
//     description: "A powerful shield against negative energy.",
//     price: 22.99,
//     salePrice: 18.99,
//     stock: 40,
//     categoryId: "4",
//     category: { id: "4", name: "Home & Decor" },
//     images: [
//       {
//         id: "4",
//         productId: "4",
//         url: "/images/products/obsidian.jpg",
//         alt: "Black Obsidian Protection Stone",
//         isMain: true,
//       },
//     ],
//   },
// ];

// export default function FeaturedProducts() {
//   return (
//     <section className="section bg-[#fefefe]">
//       <div className="container">
//         <h2 className="section-title text-center text-3xl font-bold text-[#B73B45]">
//           Featured Crystal Collection
//         </h2>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
//           {featuredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Button href="/shop" variant="primary">
//             Browse All Crystals
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
