import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Code } from "lucide-react";

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueItem = ({ icon, title, description = "" }: ValueItemProps) => {
  return (
    <div className="text-center gradient-card p-6 rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-transparent" />
      <div className="relative z-10">
        <div className="mb-6 inline-flex p-3 rounded-sm bg-gradient-to-br from-green-500/20 to-green-600/10 text-green-400 border border-green-500/30">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-4 tracking-tight text-green-100">
          {title}
        </h3>
        <p className="text-green-200/80 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const ValueProposition = () => {
  const values = [
    {
      icon: <Sparkles size={20} />,
      title: "Expert Analysis",
      description:
        "Professional script readers and industry experts provide detailed feedback on structure, character development, and narrative flow.",
    },
    {
      icon: <Zap size={20} />,
      title: "Fast Turnaround",
      description:
        "Get comprehensive script analysis within 24-48 hours, helping you iterate quickly and meet tight deadlines.",
    },
    {
      icon: <Code size={20} />,
      title: "AI-Enhanced Insights",
      description:
        "Advanced AI technology identifies patterns and provides data-driven insights to complement human expertise.",
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-green-800/10" />
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Our <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-lg text-green-200/70 max-w-2xl mx-auto font-light leading-relaxed">
            Combining industry expertise with cutting-edge technology to deliver
            actionable script feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueItem
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
