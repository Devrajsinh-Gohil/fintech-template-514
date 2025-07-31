import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import heroImage from '@/assets/ai-dpr-hero.jpg';
import { useAuth } from '@/contexts/AuthContext';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { user, signInWithGoogle } = useAuth();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = (platform: 'windows' | 'mac') => {
    const downloadLinks = {
      windows: 'https://github.com/Devrajsinh-Gohil/fintech-template-514/raw/refs/heads/main/public/downloads/AI-DPR-Windows.zip?download=',
      mac: 'https://github.com/Devrajsinh-Gohil/fintech-template-514/raw/refs/heads/main/public/downloads/AI-DPR-Mac.zip?download='
    };
    
    // Open the direct download link in a new tab
    window.open(downloadLinks[platform], '_blank');
  };
  
  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex justify-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                AI-Powered DPR Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-balance text-foreground">
              Voice-powered Daily Progress Reporting for Construction Teams
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              AI-DPR enables on-site engineers to fill daily progress reports using just their voice. All entries are automatically mapped to BOQ, ensuring accuracy and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => handleDownload('windows')}
                className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px] flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download for Windows
              </Button>
              <Button 
                onClick={() => handleDownload('mac')}
                variant="outline" 
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px] flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download for Mac
              </Button>
            </div>
            
            <div className="pt-4 text-sm text-muted-foreground">
              Window and macOS supported • No setup required
            </div>
          </div>
          
          {/* Right Content - AI Assistant Visual */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
              <img 
                src={heroImage} 
                alt="AI-DPR Assistant Interface" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
export default HeroSection;
