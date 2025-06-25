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
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-neon-950/20" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
              <span className="text-primary font-light">
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-medium rounded-sm transition-all duration-200 hover:shadow-lg"
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
