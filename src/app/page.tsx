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
    <main className="flex min-h-screen flex-col items-center text-foreground relative overflow-hidden">
      {/* Navigation */}
      <nav className="w-full border-b border-green-500/20 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-green-900/10" />
        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium tracking-tight gradient-text">
              S4U Inc.
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-sm font-light hover:text-green-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm font-light hover:text-green-400 transition-colors"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-sm font-light hover:text-green-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-sm font-light hover:text-green-400 transition-colors"
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
      <section
        id="services"
        className="w-full py-20 px-6 max-w-6xl mx-auto relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 to-transparent" />
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Try Our <span className="gradient-text">Analysis Tool</span>
          </h2>
          <p className="text-lg text-green-200/70 max-w-2xl mx-auto font-light leading-relaxed">
            Experience professional script analysis with our AI-powered tool.
          </p>
        </div>
        <div className="relative z-10">
          <ScriptAnalysisTool />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="w-full py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-800/5" />
        <ValueProposition />
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 px-6 max-w-6xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-900/5 to-transparent" />
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="gradient-card p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border border-green-500/30">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="John D."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-green-100">John D.</h4>
                  <p className="text-sm text-green-300/70 font-light">
                    Indie Filmmaker
                  </p>
                </div>
              </div>
              <p className="text-green-200/80 font-light leading-relaxed">
                "The analysis provided insights I hadn't considered. It helped
                refine my dialogue and strengthen character development."
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="gradient-card p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border border-green-500/30">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Sarah M."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-green-100">Sarah M.</h4>
                  <p className="text-sm text-green-300/70 font-light">
                    Content Creator
                  </p>
                </div>
              </div>
              <p className="text-green-200/80 font-light leading-relaxed">
                "Fast turnaround with professional quality feedback. The
                combination of AI and human expertise is excellent."
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="gradient-card p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border border-green-500/30">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Raj"
                    alt="Raj P."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-green-100">Raj P.</h4>
                  <p className="text-sm text-green-300/70 font-light">
                    Agency Director
                  </p>
                </div>
              </div>
              <p className="text-green-200/80 font-light leading-relaxed">
                "Significant improvement in client satisfaction. The detailed
                analysis helps us deliver better results."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="w-full py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-800/5" />
        <PricingTiers />
      </section>

      {/* About Us */}
      <section
        id="about"
        className="w-full py-20 px-6 max-w-6xl mx-auto relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-900/5 to-transparent" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              About <span className="gradient-text">S4U Inc.</span>
            </h2>
            <p className="text-green-200/70 mb-6 font-light leading-relaxed">
              We provide professional script analysis services combining
              industry expertise with advanced AI technology. Our mission is to
              help storytellers refine their craft through actionable feedback.
            </p>
            <p className="text-green-200/70 mb-8 font-light leading-relaxed">
              Our team of experienced script readers and AI specialists work
              together to deliver comprehensive analysis that helps writers
              improve their storytelling.
            </p>
            <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-sm font-medium border border-green-400/30 hover:shadow-lg hover:shadow-green-500/25">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="h-24 w-24 rounded-lg overflow-hidden mx-auto mb-4 gradient-card border border-green-500/30">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team1"
                  alt="Team Member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-medium mb-1 text-green-100">
                Script Analysis
              </h4>
              <p className="text-sm text-green-300/70 font-light">
                Expert Readers
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="h-24 w-24 rounded-lg overflow-hidden mx-auto mb-4 gradient-card border border-green-500/30">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team2"
                  alt="Team Member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-medium mb-1 text-green-100">AI Technology</h4>
              <p className="text-sm text-green-300/70 font-light">
                Development Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-green-800/10 to-green-900/20" />
        <div className="absolute inset-0 film-grain" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-lg text-green-200/70 mb-8 font-light leading-relaxed">
            Join writers and filmmakers who trust S4U Inc. for professional
            script analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium rounded-sm px-8 py-3 border border-green-400/30 hover:shadow-lg hover:shadow-green-500/25">
              Start Analysis
            </Button>
            <Button
              variant="outline"
              className="border-green-500/30 text-green-300 hover:bg-green-900/20 hover:border-green-400/50 font-medium rounded-sm px-8 py-3"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="w-full py-16 px-6 border-t border-green-500/20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-medium mb-4 tracking-tight gradient-text">
                S4U Inc.
              </h3>
              <p className="text-green-200/70 mb-6 font-light leading-relaxed">
                Professional script analysis services combining industry
                expertise with AI technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-4 text-green-100">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-green-200/70 hover:text-green-300 font-light transition-colors"
                  >
                    Script Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-green-200/70 hover:text-green-300 font-light transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-green-200/70 hover:text-green-300 font-light transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4 text-green-100">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@s4u.inc"
                    className="text-green-200/70 hover:text-green-300 font-light transition-colors"
                  >
                    hello@s4u.inc
                  </a>
                </li>
                <li>
                  <span className="text-green-200/70 font-light">
                    Professional Services
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200/60 text-sm mb-4 md:mb-0 font-light">
              &copy; 2024 S4U Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-green-200/60 hover:text-green-300 text-sm font-light transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-green-200/60 hover:text-green-300 text-sm font-light transition-colors"
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
