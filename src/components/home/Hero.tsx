"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCategory } from "@/hooks/queries/useCategories";
import { Category } from "@/types";
import Link from "next/link";

const featuredCards = [
  {
    id: 1,
    title: "Radiant Ruby",
    subtitle: "A stone of passion, strength, and love.",
    image: "/assets/prod1.png",
    color: "bg-red-100",
  },
  {
    id: 2,
    title: "Timeless Gems",
    subtitle: "Gemstones bring balance, protection, and energy.",
    image: "/assets/prod4.png",
    color: "bg-green-100",
  },
  {
    id: 3,
    title: "Zodiac & Stones",
    subtitle: "Find the perfect gemstone for your sign.",
    image: "/assets/prod3.png",
    color: "bg-purple-100",
  },
  {
    id: 4,
    title: "Crystal Magic",
    subtitle: "Harness the power of crystals for healing.",
    image: "/assets/prod2.png",
    color: "bg-blue-100",
  },
  {
    id: 5,
    title: "Chakra Healing",
    subtitle: "Balance your energy with chakra crystals.",
    image: "/assets/prod5.png",
    color: "bg-green-100",
  },
];

export default function Hero() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const { data: categoryData, isLoading: categoryLoading } = useCategory({
    limit: 4,
  });

  return (
    <div className="lg:bg-[#F0E6E8] lg:hidden block">
      <main className="container mx-auto py-8">
        {/* Featured Cards Section */}
        <div className="relative mb-12">
          <div
            ref={featuredRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 pb-4"
          >
            {featuredCards.map((card) => (
              <motion.div
                key={card.id}
                className="snap-center flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.id * 0.1 }}
              >
                <div
                  className={`rounded-2xl overflow-hidden shadow-lg h-64 relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div className="relative h-full w-full border border-black overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transform transition duration-700"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.subtitle}</p>
                    <div className="flex">
                      <Link
                        href="/category"
                        className="mt-3 px-4 py-2 bg-white text-black rounded-full flex items-center text-sm font-medium transition-all hover:bg-gray-200"
                      >
                        Explore
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12 lg:hidden block">
          <div className="relative">
            <div
              ref={categoriesRef}
              className="flex overflow-x-auto no-scrollbar gap-3 pb-2"
            >
              <section className="container mx-auto px-2 pt-0">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Shop By Category
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-8 gap-5">
                  {categoryLoading
                    ? ""
                    : categoryData?.categories?.map(
                        (category: Category, index: number) => (
                          <motion.a
                            key={index}
                            href={`/category/${category.slug}`}
                            className="flex items-center justify-center cursor-pointer w-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                          >
                            <div className="border-2 border-[#D1D5DB] w-full h-auto py-3 rounded-xl flex flex-col justify-center items-center gap-3">
                              <span className="text-xs md:text-sm text-gray-700 font-medium capitalize">
                                {category.name}
                              </span>
                              <Image
                                src={"/assets/category1.png"}
                                alt={category.name}
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-4 mb-2 shadow-sm">
                        <category.icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                      </div>
                      <span className="text-xs md:text-sm text-gray-700 font-medium">
                        {category.label}
                      </span> */}
                          </motion.a>
                        )
                      )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
