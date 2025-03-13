import Link from "next/link";

// Crystal Categories Data
const categories = [
  {
    id: "1",
    name: "Healing Crystals",
    slug: "healing-crystals",
    description: "Harness the power of crystals for mind, body & spirit.",
    image: "/images/categories/healing-crystals.jpg",
  },
  {
    id: "2",
    name: "Zodiac Crystals",
    slug: "zodiac-crystals",
    description: "Find the perfect crystal for your zodiac sign.",
    image: "/images/categories/zodiac-crystals.jpg",
  },
  {
    id: "3",
    name: "Energy Stones",
    slug: "energy-stones",
    description: "Boost positivity & spiritual energy with handpicked gems.",
    image: "/images/categories/energy-stones.jpg",
  },
  {
    id: "4",
    name: "Home & Decor",
    slug: "home-decor",
    description: "Enhance your space with high-vibration crystal decor.",
    image: "/images/categories/home-decor.jpg",
  },
];

export default function Categories() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title text-center text-3xl font-bold text-[#B73B45]">
          Explore Our Crystal Collections
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="relative overflow-hidden transition-transform duration-300 bg-gray-100 rounded-lg group hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5]">
                {/* Image Placeholder (replace with actual images) */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80" />

                {/* Category Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-200">
                    {category.description}
                  </p>
                  <span className="inline-block px-4 py-2 mt-4 text-sm transition-colors bg-white rounded-full text-[#B73B45] group-hover:bg-[#B73B45] group-hover:text-white">
                    View Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
