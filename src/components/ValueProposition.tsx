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
    <Card className="bg-background border-border hover:shadow-md transition-all duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const ValueProposition = () => {
  const values = [
    {
      icon: <Sparkles size={24} />,
      title: "Human-first, AI-assisted",
      description:
        "Our expert team works alongside cutting-edge AI to deliver the perfect balance of creativity and technical precision.",
    },
    {
      icon: <Zap size={24} />,
      title: "Studio-quality feedback at lightning speed",
      description:
        "Get professional-level script analysis in minutes instead of weeks, without sacrificing quality or depth.",
    },
    {
      icon: <Code size={24} />,
      title: "Built by filmmakers, powered by engineers",
      description:
        "Our team combines decades of industry experience with advanced AI technology to understand what makes stories work.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine human expertise with AI innovation to transform your
            scripts and ideas into compelling stories.
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
