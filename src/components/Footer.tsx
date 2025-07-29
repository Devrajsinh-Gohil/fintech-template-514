import React from 'react';
import Logo from './Logo';
const Footer = () => {
  return <footer className="w-full px-6 md:px-12 border-t border-border bg-card py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 max-w-md">
            <Logo />
            <p className="text-muted-foreground">
              AI-powered daily progress reporting for construction teams. Voice automation meets BOQ accuracy.
            </p>
          </div>
          
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground flex items-center gap-2">
                📞 +91 9898544529
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                ✉️ info@xaneur.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-muted-foreground text-sm gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© 2025 AI-DPR. All rights reserved.</span>
            <span>Powered by Xaneur</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;