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
  headline = "Professional Script Analysis",
  subheadline = "Get expert feedback on your scripts with AI-powered insights and human expertise.",
  ctaText = "Analyze Your Script",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center text-foreground overflow-hidden film-grain">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-green-900/10 to-green-800/20" />
        <div className="abstract-shape -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-500/20 to-green-600/10 blur-3xl" />
        <div className="abstract-shape -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-green-400/10 blur-3xl" />
        <div className="abstract-shape top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400/10 to-transparent blur-2xl" />
        <div className="abstract-shape bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-green-500/15 to-transparent blur-2xl" />

        {/* Film strip elements */}
        <div className="absolute top-0 left-10 w-2 h-full bg-gradient-to-b from-green-500/20 to-transparent opacity-30" />
        <div className="absolute top-0 right-10 w-2 h-full bg-gradient-to-b from-green-500/20 to-transparent opacity-30" />

        {/* Abstract geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-green-500/20 rotate-45 opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-green-400/30 rotate-12 opacity-25" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight">
              <span className="font-normal">
                {headline.split(" ").slice(0, 2).join(" ")}
              </span>
              <br />
              <span className="gradient-text font-light">
                {headline.split(" ").slice(2).join(" ")}
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-base font-medium rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 border border-green-400/30"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </motion.div>

          {/* Minimal decorative element */}
          <motion.div
            className="mt-20 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
