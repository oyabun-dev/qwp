import React from 'react';
import Section from './ui/Section';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Card from './ui/Card';

const DSPreview = () => {
  return (
    <div className="bg-[var(--bg-core)] min-h-screen pb-20">
      
      {/* Typrography Section */}
      <Section className="border-b border-[var(--border-light)]">
        <Badge className="mb-6">Typography</Badge>
        <div className="space-y-8">
            <div>
                <h1 className="type-display mb-4">Beyond Limits</h1>
                <p className="type-label text-[var(--text-tertiary)]">Display XL</p>
            </div>
            <div>
                <h2 className="type-h1 mb-2">Growth Hacking</h2>
                <p className="type-label text-[var(--text-tertiary)]">Heading H1</p>
            </div>
            <div>
                <h3 className="type-h2 mb-2">Our Strategy</h3>
                <p className="type-label text-[var(--text-tertiary)]">Heading H2</p>
            </div>
            <div>
                <p className="type-body text-[var(--text-secondary)]">
                    Our team specializes in optimizing your website and landing pages 
                    to convert visitors into customers. We believe in data-driven 
                    growth and scalable architectures.
                </p>
                <p className="type-label text-[var(--text-tertiary)] mt-2">Body Text</p>
            </div>
        </div>
      </Section>

      {/* Buttons Section */}
      <Section className="border-b border-[var(--border-light)]">
        <Badge className="mb-6">Buttons</Badge>
        <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
            <Button variant="ghost">View Analysis</Button>
        </div>
      </Section>

      {/* Cards Section */}
      <Section>
        <Badge className="mb-6">Cards (Bento Grid)</Badge>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
            
            {/* Main Feature Card */}
            <Card variant="black" className="md:col-span-2 relative group p-10 flex flex-col justify-between">
                <div>
                   <Badge className="bg-white/10 text-white border-white/20 mb-4">Feature</Badge>
                   <h3 className="type-h1 text-white mb-4">Automatic Growth</h3>
                   <p className="text-gray-400 max-w-md">
                        Deploy your strategy instantly with our AI-powered engine. 
                        Scales automatically as your traffic grows.
                   </p>
                </div>
                <Button variant="primary" className="bg-white text-black self-start mt-8 hover:bg-gray-200">
                    Try Now
                </Button>
            </Card>

            <div className="grid grid-rows-2 gap-6">
                <Card variant="white" className="flex flex-col justify-center items-center text-center">
                    <span className="type-display text-4xl mb-2">98%</span>
                    <p className="text-[var(--text-secondary)]">Satisfaction Rate</p>
                </Card>
                
                <Card variant="glass" className="relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 transition-opacity group-hover:opacity-100" />
                     <div className="relative z-10">
                        <h4 className="type-h2">Glass</h4>
                        <p className="text-sm mt-2 text-gray-500">Backdrop blur effect</p>
                     </div>
                </Card>
            </div>

        </div>
      </Section>

    </div>
  );
};

export default DSPreview;
