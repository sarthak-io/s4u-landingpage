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
    <div className="text-center">
      <div className="mb-6 inline-flex p-3 rounded-sm bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-4 tracking-tight">{title}</h3>
      <p className="text-muted-foreground font-light leading-relaxed">
        {description}
      </p>
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
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Combining industry expertise with cutting-edge technology to deliver
            actionable script feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
