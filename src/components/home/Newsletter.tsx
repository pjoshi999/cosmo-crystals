"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      // Handle form submission
      if (email && email.includes("@")) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    }, 800);
  };

  return (
    <section className="py-16 bg-[#B73B45] md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Join Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Subscribe to get special offers, free giveaways, and updates on new
            arrivals.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-md mx-auto mt-8 sm:flex-row sm:gap-0 gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 text-gray-900 border-0 rounded-l-md rounded-r-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-white text-[#B73B45] hover:bg-gray-100 rounded-l-md rounded-r-md sm:rounded-l-none"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-white">
              Thanks for subscribing! We&apos;ll be in touch soon.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-white">
              Please enter a valid email address.
            </p>
          )}

          <p className="mt-6 text-sm text-white/80">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
}
