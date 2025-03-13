import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

// Mock data - in a real app, fetch this from your API
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophia Reynolds",
    avatar: "/images/testimonials/avatar1.jpg",
    text: "The crystals from Cosmo Crystals are absolutely stunning! The energy they bring into my space is truly magical.",
    rating: 5,
  },
  {
    id: "2",
    name: "Daniel Carter",
    avatar: "/images/testimonials/avatar2.jpg",
    text: "Amazing quality and fast delivery! My amethyst cluster exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    id: "3",
    name: "Lily Anderson",
    avatar: "/images/testimonials/avatar3.jpg",
    text: "The best place for authentic and ethically sourced crystals. Each piece feels unique and special!",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 text-gray-600">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full bg-gray-200">
                  {/* In production, use real customer avatars */}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
