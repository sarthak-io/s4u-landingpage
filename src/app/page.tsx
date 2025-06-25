import React from "react";
import HeroSection from "@/components/HeroSection";
import ScriptAnalysisTool from "@/components/ScriptAnalysisTool";
import ValueProposition from "@/components/ValueProposition";
import PricingTiers from "@/components/PricingTiers";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Users, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground">
      {/* Navigation */}
      <nav className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium tracking-tight">S4U Inc.</div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-sm font-light hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm font-light hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-sm font-light hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-sm font-light hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Script Analysis Tool */}
      <section id="services" className="w-full py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Try Our Analysis Tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Experience professional script analysis with our AI-powered tool.
          </p>
        </div>
        <ScriptAnalysisTool />
      </section>

      {/* Value Proposition */}
      <section className="w-full py-20 px-6 bg-muted/30">
        <ValueProposition />
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Client Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-card p-8 rounded-sm border border-border">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="John D."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">John D.</h4>
                <p className="text-sm text-muted-foreground font-light">
                  Indie Filmmaker
                </p>
              </div>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed">
              "The analysis provided insights I hadn't considered. It helped
              refine my dialogue and strengthen character development."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-card p-8 rounded-sm border border-border">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="Sarah M."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Sarah M.</h4>
                <p className="text-sm text-muted-foreground font-light">
                  Content Creator
                </p>
              </div>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed">
              "Fast turnaround with professional quality feedback. The
              combination of AI and human expertise is excellent."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-card p-8 rounded-sm border border-border">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Raj"
                  alt="Raj P."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Raj P.</h4>
                <p className="text-sm text-muted-foreground font-light">
                  Agency Director
                </p>
              </div>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed">
              "Significant improvement in client satisfaction. The detailed
              analysis helps us deliver better results."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="w-full py-20 px-6 bg-muted/30">
        <PricingTiers />
      </section>

      {/* About Us */}
      <section id="about" className="w-full py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              About S4U Inc.
            </h2>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              We provide professional script analysis services combining
              industry expertise with advanced AI technology. Our mission is to
              help storytellers refine their craft through actionable feedback.
            </p>
            <p className="text-muted-foreground mb-8 font-light leading-relaxed">
              Our team of experienced script readers and AI specialists work
              together to deliver comprehensive analysis that helps writers
              improve their storytelling.
            </p>
            <Button className="bg-primary hover:bg-primary/90 rounded-sm font-medium">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="h-24 w-24 rounded-sm overflow-hidden mx-auto mb-4 bg-muted">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team1"
                  alt="Team Member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-medium mb-1">Script Analysis</h4>
              <p className="text-sm text-muted-foreground font-light">
                Expert Readers
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="h-24 w-24 rounded-sm overflow-hidden mx-auto mb-4 bg-muted">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team2"
                  alt="Team Member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-medium mb-1">AI Technology</h4>
              <p className="text-sm text-muted-foreground font-light">
                Development Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
            Join writers and filmmakers who trust S4U Inc. for professional
            script analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-sm px-8 py-3">
              Start Analysis
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-muted font-medium rounded-sm px-8 py-3"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-medium mb-4 tracking-tight">
                S4U Inc.
              </h3>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                Professional script analysis services combining industry
                expertise with AI technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-foreground font-light transition-colors"
                  >
                    Script Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-foreground font-light transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground font-light transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@s4u.inc"
                    className="text-muted-foreground hover:text-foreground font-light transition-colors"
                  >
                    hello@s4u.inc
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground font-light">
                    Professional Services
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0 font-light">
              &copy; 2024 S4U Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
