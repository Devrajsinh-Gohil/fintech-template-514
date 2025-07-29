import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";
const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const features = [{
    title: "Voice Automation",
    description: "Convert spoken reports into structured DPR entries automatically using advanced AI.",
    expandedDescription: "Our advanced speech recognition technology captures field reports in natural language and automatically structures them into standardized DPR formats. Works in noisy construction environments with multiple languages and technical terminology recognition.",
    icon: <Layers size={24} className="text-cosmic-accent" />
  }, {
    title: "BOQ Mapping",
    description: "Automatically map progress entries to Bill of Quantities for accurate tracking.",
    expandedDescription: "Intelligent mapping system that connects daily progress reports directly to your project's BOQ. Ensures accurate quantity tracking, cost allocation, and progress measurement against planned milestones with real-time validation.",
    icon: <Grid3x3 size={24} className="text-cosmic-accent" />
  }, {
    title: "On-Site AI Assistant",
    description: "Smart AI companion that understands construction workflows and terminology.",
    expandedDescription: "Field-tested AI assistant trained on construction industry standards. Understands project phases, trade-specific terminology, and workflow patterns. Provides intelligent suggestions and catches potential errors before submission.",
    icon: <LayoutDashboard size={24} className="text-cosmic-accent" />
  }, {
    title: "Compliance Reporting",
    description: "Generate compliance-ready reports that meet industry standards automatically.",
    expandedDescription: "Automated generation of reports compliant with local building codes, safety regulations, and project standards. Includes audit trails, digital signatures, and integration with regulatory submission systems.",
    icon: <ListCheck size={24} className="text-cosmic-accent" />
  }, {
    title: "Multi-language Support",
    description: "Support for multiple languages and regional construction terminology.",
    expandedDescription: "Comprehensive language support for diverse construction teams. Recognizes technical terms, measurements, and industry jargon across different languages. Seamless switching between languages within the same project.",
    icon: <Star size={24} className="text-cosmic-accent" />
  }, {
    title: "ERP Integration",
    description: "Seamless integration with existing ERP and project management systems.",
    expandedDescription: "Connect with popular construction ERP systems, project management tools, and accounting software. Real-time data synchronization, automated reporting workflows, and bidirectional data exchange for complete project visibility.",
    icon: <BookOpen size={24} className="text-cosmic-accent" />
  }];
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  return <section id="features" className="w-full py-12 px-6 md:px-[64px] md:py-[120px]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Everything your construction team needs
          </h2>
          <p className="text-cosmic-muted text-lg">
            Comprehensive AI-powered solutions to streamline daily progress reporting and ensure project accuracy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Collapsible key={index} open={openFeature === index} onOpenChange={() => toggleFeature(index)} className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}>
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${openFeature === index ? 'rotate-180' : ''}`} />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>)}
        </div>
      </div>
    </section>;
};
export default Features;