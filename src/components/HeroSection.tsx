"use client";

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function HeroSection({
  headline = "Write Smarter. Create Brighter.",
  subheadline = "An AI-augmented scriptwriting agency helping storytellers refine ideas and elevate screenplays.",
  ctaText = "Try Free Script Analysis",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black to-purple-900/20 opacity-90" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDMwaDMwVjBoLTMwdjMwek0wIDYwaDMwVjMwaC0zMHYzMHpNMzAgNjBoMzBWMzBoLTMwdjMweiIgZmlsbD0iIzIyMiIvPjwvZz48L3N2Zz4=')] opacity-5" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-green-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-green-500 hover:from-purple-700 hover:to-green-600 text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </motion.div>

          {/* AI-themed decorative element */}
          <motion.div
            className="mt-16 relative h-12 w-full max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <div className="absolute flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-green-400"
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
