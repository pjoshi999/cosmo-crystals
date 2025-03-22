import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
// import FeaturedProducts from "@/components/home/FeaturedProduct";
// import ProductsShowcase from "@/components/home/ProductShowcase";
// import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonial";
import Newsletter from "@/components/home/Newsletter";
import OrderTracker from "@/components/home/OrderTracker";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <OrderTracker />
      <Categories />
      {/* <FeaturedProducts /> */}
      <div className="py-12">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-8 p-8 bg-gray-200 rounded-lg shadow-md md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-[#B73B45] md:text-3xl">
                Cosmic Crystals Sale ✨
              </h2>
              <p className="mb-6">
                Unlock **up to 50% off** on our most mesmerizing crystal
                collections. Limited-time offer—your cosmic transformation
                awaits!
              </p>
              <a
                href="/sale"
                className="inline-flex items-center px-6 py-3 font-medium text-white transition-transform rounded-md bg-[#B73B45] hover:bg-[#9c2731] hover:scale-105"
              >
                Explore the Sale 🚀
              </a>
            </div>
            <div className="order-first overflow-hidden rounded-lg aspect-[4/3] bg-white md:order-last">
              {/* Add an image of your featured crystal collection here */}
            </div>
          </div>
        </div>
      </div>

      {/* <ProductsShowcase /> */}
      <Testimonials />
      <Newsletter />
    </>
  );
}
