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
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Choose the plan that fits your needs. All plans include our core
            analysis features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full border rounded-sm ${tier.popular ? "border-primary relative" : "border-border"}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground rounded-sm">
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
                  className={`w-full rounded-sm font-medium ${tier.popular ? "bg-primary hover:bg-primary/90" : ""}`}
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
