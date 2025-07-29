import React from 'react';

const DemoSection = () => {
  // YouTube video ID (the part after 'v=' in the URL)
  const youtubeVideoId = 'ctY2LntoQ38';
  
  return (
    <section className="w-full py-16 px-6 bg-background md:py-[100px] md:px-[64px]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            See AI Reporting in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for real-world construction teams. Watch this 2-minute demo to understand how it works in the field.
          </p>
        </div>
        
        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-lg max-w-3xl mx-auto">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
              title="AI Reporting Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="pt-4 text-sm text-muted-foreground">
          Available for <a href="#demo-video" className="text-primary hover:underline">Windows</a> and <a href="#demo-video" className="text-primary hover:underline">Mac</a> • No setup required
        </div>
      </div>
    </section>
  );
};

export default DemoSection;