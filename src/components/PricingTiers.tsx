"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  priceDetail?: string;
}

const PricingTiers = ({ tiers = defaultTiers }: { tiers?: PricingTier[] }) => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-800/5" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            <span className="gradient-text">Pricing</span> Plans
          </h2>
          <p className="text-lg text-green-200/70 max-w-2xl mx-auto font-light leading-relaxed">
            Choose the plan that fits your needs. All plans include our core
            analysis features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full rounded-lg relative overflow-hidden ${tier.popular ? "gradient-card border-green-500/50 shadow-lg shadow-green-500/10" : "gradient-card"}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-6 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-sm border border-green-400/50">
                  Recommended
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-medium">
                  {tier.name}
                </CardTitle>
                <div className="mt-6">
                  <span className="text-3xl font-light">{tier.price}</span>
                  {tier.priceDetail && (
                    <span className="text-muted-foreground ml-2 font-light">
                      {tier.priceDetail}
                    </span>
                  )}
                </div>
                <CardDescription className="mt-4 font-light">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground shrink-0 mr-3" />
                      )}
                      <span
                        className={
                          feature.included ? "" : "text-muted-foreground"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full rounded-sm font-medium transition-all duration-200 ${tier.popular ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white border-green-400/30 hover:shadow-lg hover:shadow-green-500/25" : "border-green-500/30 text-green-300 hover:bg-green-900/20 hover:border-green-400/50"}`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom plan for your studio or agency?{" "}
            <a
              href="#contact"
              className="text-primary underline hover:text-primary/80"
            >
              Contact us
            </a>{" "}
            for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

const defaultTiers: PricingTier[] = [
  {
    name: "Free",
    price: "₹0",
    description: "Basic script analysis with limited insights",
    features: [
      { name: "Basic script analysis", included: true },
      { name: "What's Working insights", included: true },
      { name: "Limited feedback (500 words)", included: true },
      { name: "What Needs Work insights", included: false },
      { name: "Suggested Fixes", included: false },
      { name: "Character development analysis", included: false },
      { name: "Plot structure recommendations", included: false },
      { name: "Priority support", included: false },
    ],
    buttonText: "Get Started Free",
  },
  {
    name: "Creator",
    price: "₹499",
    priceDetail: "/month",
    description: "Complete script analysis for individual creators",
    features: [
      { name: "Complete script analysis", included: true },
      { name: "What's Working insights", included: true },
      { name: "Full feedback (no word limit)", included: true },
      { name: "What Needs Work insights", included: true },
      { name: "Suggested Fixes", included: true },
      { name: "Character development analysis", included: true },
      { name: "Plot structure recommendations", included: false },
      { name: "Priority support", included: false },
    ],
    buttonText: "Start Creator Plan",
    popular: true,
  },
  {
    name: "Studio+",
    price: "₹2,499",
    priceDetail: "/month",
    description: "Premium analysis for professional studios and teams",
    features: [
      { name: "Premium script analysis", included: true },
      { name: "What's Working insights", included: true },
      { name: "Full feedback (no word limit)", included: true },
      { name: "What Needs Work insights", included: true },
      { name: "Suggested Fixes", included: true },
      { name: "Character development analysis", included: true },
      { name: "Plot structure recommendations", included: true },
      { name: "Priority support", included: true },
    ],
    buttonText: "Start Studio+ Plan",
  },
];

export default PricingTiers;
