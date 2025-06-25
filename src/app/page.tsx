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
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Script Analysis Tool */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience Our AI Script Analysis
        </h2>
        <ScriptAnalysisTool />
      </section>

      {/* Value Proposition */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <ValueProposition />
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="John D."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">John D.</h4>
                <p className="text-sm text-zinc-400">Indie Filmmaker</p>
              </div>
            </div>
            <p className="text-zinc-300">
              "The script analysis tool gave me insights I never would have
              considered. It helped me refine my dialogue and strengthen my
              character arcs."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="Sarah M."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Sarah M.</h4>
                <p className="text-sm text-zinc-400">YouTube Creator</p>
              </div>
            </div>
            <p className="text-zinc-300">
              "I've been able to produce content twice as fast with the help of
              this tool. The AI suggestions are spot-on and the human feedback
              adds that extra layer of quality."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-zinc-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Raj"
                  alt="Raj P."
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Raj P.</h4>
                <p className="text-sm text-zinc-400">Ad Agency Director</p>
              </div>
            </div>
            <p className="text-zinc-300">
              "Our agency has seen a 40% increase in client satisfaction since
              we started using this service. The turnaround time is incredible."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your Plan
          </h2>
          <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
            Select the perfect plan for your scriptwriting needs. Upgrade or
            downgrade anytime.
          </p>
          <PricingTiers />
        </div>
      </section>

      {/* About Us */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-zinc-300 mb-6">
              We're on a mission to democratize access to professional-grade
              story feedback. Based in Gurgaon, our team combines deep expertise
              in storytelling with cutting-edge AI technology.
            </p>
            <p className="text-zinc-300 mb-6">
              Our unique approach blends human creativity with AI efficiency,
              giving you the best of both worlds. We understand the challenges
              storytellers face and have built a solution that addresses them
              head-on.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eshan"
                  alt="Eshan Parekh"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-semibold">Eshan Parekh</h4>
              <p className="text-sm text-zinc-400">Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sankalp"
                  alt="Sankalp Chaturvedi"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-semibold">Sankalp Chaturvedi</h4>
              <p className="text-sm text-zinc-400">Filmmaker, Founding Team</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarthak"
                  alt="Sarthak Chaturvedi"
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="font-semibold">Sarthak Chaturvedi</h4>
              <p className="text-sm text-zinc-400">
                AI Product Owner, Founding Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Scripts?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of storytellers who are elevating their craft with
            our AI-powered script analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg py-6 px-8">
              Try Free Analysis
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 md:px-8 lg:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">ScriptSense AI</h3>
              <p className="text-zinc-400 mb-6">
                An AI-augmented scriptwriting agency helping storytellers refine
                ideas and elevate screenplays.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-zinc-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    For Hobbyists
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    For YouTube Creators
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    For Ad Agencies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white">
                    For OTT Studios
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-zinc-800 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm mb-4 md:mb-0">
              &copy; 2023 ScriptSense AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-500 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-500 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-zinc-500 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
