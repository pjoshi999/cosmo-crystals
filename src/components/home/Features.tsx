import { Gem, ShieldCheck, RotateCcw, Sparkles } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Gem,
    title: "Premium Crystals",
    description: "Handpicked, high-vibration crystals for your journey.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    description: "100% genuine crystals, ethically sourced.",
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "Hassle-Free Returns",
    description: "Easy 30-day return policy for a worry-free experience.",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Positive Energy",
    description: "Infused with pure energy for balance & well-being.",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-[#B73B45]">
                <feature.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
