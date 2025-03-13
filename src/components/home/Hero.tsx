"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GemIcon, PinIcon, BracesIcon, DiamondIcon } from "lucide-react";

const featuredCards = [
  {
    id: 1,
    title: "Ruby Collection",
    subtitle: "Precious gemstones",
    image: "/assets/prod1.png",
    color: "bg-red-100",
  },
  {
    id: 2,
    title: "Chat With Our AI",
    subtitle: "To Understand your problems",
    image: "/assets/prod2.png",
    color: "bg-green-100",
  },
  {
    id: 3,
    title: "Amethyst Dreams",
    subtitle: "Precious gemstones",
    image: "/assets/prod3.png",
    color: "bg-purple-100",
  },
  {
    id: 4,
    title: "Diamond Collection",
    subtitle: "Premium selection",
    image: "/assets/prod1.png",
    color: "bg-blue-100",
  },
  {
    id: 5,
    title: "Emerald Treasures",
    subtitle: "Rare and exquisite",
    image: "/assets/prod2.png",
    color: "bg-green-100",
  },
];

const categories = [
  { icon: GemIcon, label: "Gems" },
  { icon: PinIcon, label: "Rings" },
  { icon: DiamondIcon, label: "Necklace" },
  { icon: BracesIcon, label: "Bracelets" },
  { icon: BracesIcon, label: "Bracelets" },
  { icon: BracesIcon, label: "Bracelets" },
  { icon: BracesIcon, label: "Bracelets" },
  { icon: BracesIcon, label: "Bracelets" },
];

export default function Home() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
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
                    <button className="mt-3 px-4 py-2 bg-white text-black rounded-full flex items-center text-sm font-medium transition-all hover:bg-gray-200">
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
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <div className="relative">
            <div
              ref={categoriesRef}
              className="flex overflow-x-auto no-scrollbar gap-3 pb-2"
            >
              <section className="container mx-auto px-4 py-12">
                <motion.h2
                  className="text-2xl font-bold mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Shop By Category
                </motion.h2>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-4 mb-2 shadow-sm">
                        <category.icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                      </div>
                      <span className="text-xs md:text-sm text-gray-700 font-medium">
                        {category.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
