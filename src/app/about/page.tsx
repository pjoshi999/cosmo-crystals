"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggeredContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Team members data
  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "Eleanor Jade",
  //     role: "Founder & Crystal Expert",
  //     bio: "Eleanor's journey with crystals began 15 years ago during her travels through the Himalayan mountains. Her deep connection to earth's minerals has guided our vision.",
  //     color: "bg-[#D6A0A8]",
  //   },
  //   {
  //     id: 2,
  //     name: "Marcus Rivera",
  //     role: "Spiritual Guide",
  //     bio: "With over a decade of experience in meditation practices, Marcus ensures every crystal we source is aligned with its highest spiritual purpose.",
  //     color: "bg-[#B73B45]",
  //   },
  //   {
  //     id: 3,
  //     name: "Sophia Chen",
  //     role: "Sustainability Director",
  //     bio: "Sophia's background in environmental science ensures our sourcing practices honor both the earth and the communities from which our crystals originate.",
  //     color: "bg-[#8A2A33]",
  //   },
  //   {
  //     id: 4,
  //     name: "Terrence Moon",
  //     role: "Educational Content Creator",
  //     bio: "A published author on crystal healing, Terrence develops our rich educational resources to help you make the most of your crystal journey.",
  //     color: "bg-[#E0C9CD]",
  //   },
  // ];

  // Values data
  const values = [
    {
      id: 1,
      title: "Ethical Sourcing",
      description:
        "We work directly with miners and small communities to ensure fair compensation and sustainable practices.",
      icon: "✨",
    },
    {
      id: 2,
      title: "Authenticity",
      description:
        "Every crystal in our collection is verified for authenticity and energy by our team of experts.",
      icon: "🔍",
    },
    {
      id: 3,
      title: "Spiritual Integrity",
      description:
        "We honor the sacred nature of crystals through mindful handling and energy clearing practices.",
      icon: "🧘",
    },
    {
      id: 4,
      title: "Education",
      description:
        "We believe in empowering our community with knowledge to deepen their connection with crystals.",
      icon: "📚",
    },
  ];

  return (
    <div className="bg-[#F7F3F4]">
      <Head>
        <title>About Us | Cosmo Crystals</title>
        <meta
          name="description"
          content="Learn about our journey, values, and the expert team behind Cosmo Crystals"
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-[#F0E6E8] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.h1
                variants={slideUp}
                className="text-4xl md:text-5xl font-bold text-[#B73B45] leading-tight mb-6"
              >
                Our Crystalline Journey
              </motion.h1>
              <motion.p variants={slideUp} className="text-lg text-gray-600">
                Discover the passion, expertise, and values that make Cosmo
                Crystals a sanctuary for spiritual seekers and crystal
                enthusiasts.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                <p className="text-gray-600">
                  Founded in 2025, Cosmo Crystals began as a small collection of
                  personally sourced crystals from Eleanor&apos;s travels across
                  the globe. What started as a passion project quickly blossomed
                  into a mission to provide ethically sourced crystals with
                  verified energetic properties.
                </p>
                <p className="text-gray-600">
                  Our team travels to mines and works directly with local
                  communities to select each crystal by hand. We believe in the
                  power of connection—both to the earth and to each other—and
                  our business practices reflect this core value.
                </p>
                <p className="text-gray-600">
                  Today, we&apos;re proud to serve a global community of
                  spiritual seekers, healers, and collectors who share our
                  reverence for these ancient gifts from the earth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-80 md:h-96 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#E0C9CD] rounded-2xl">
                  <Image
                    src={
                      "https://res.cloudinary.com/djdiqfkxx/image/upload/v1742599569/fwapl4pggjxvhvxxa7gz.png"
                    }
                    alt=""
                    fill
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-[#B73B45] opacity-40 transform rotate-12"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/4 rounded-full bg-[#8A2A33] opacity-30"></div>
                  <div className="absolute top-1/2 left-1/2 w-1/4 h-1/3 rounded-full bg-[#D6A0A8] opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-10 text-center"
            >
              Our Values
            </motion.h2>

            <motion.div
              variants={staggeredContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value.id}
                  variants={slideUp}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-[#F0E6E8] rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#B73B45] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Meet Our Team */}
        {/* <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-10 text-center"
            >
              Meet Our Team
            </motion.h2>

            <motion.div
              variants={staggeredContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={slideUp}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <div className={`h-48 ${member.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-[#B73B45] font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* Join Our Mission */}
        <section className="bg-[#B73B45] py-16 md:py-24 text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Join Our Mission
              </h2>
              <p className="text-white/90">
                Together, we can create a more conscious and connected world
                through the ancient wisdom of crystals.
              </p>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-white text-[#B73B45] text-sm font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <Link href="/category">EXPLORE OUR COLLECTION</Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
