import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[100dvh] bg-bg-primary overflow-hidden -mt-[60px]">
      {/* Background Video (Replaces Leo Carter photo with your requested video) */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        src="/hero-video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover filter saturate-125 opacity-40 brightness-[0.7] md:opacity-50"
      />
      
      {/* Side gradients to frame the center tightly */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bg-primary/90 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bg-primary/90 to-transparent pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-0"></div>

      {/* CONTENT OVERLAYS */}
      <div className="relative z-10 w-full h-full max-w-[1800px] mx-auto flex flex-col justify-between pt-[100px] pb-6 px-4 md:px-12">
        
        {/* Left Sidebar 'PORTFOLIO' */}
        <div className="hidden sm:block absolute top-[45%] left-4 md:left-10 w-6 h-32">
          <span className="text-text-secondary/70 text-[10px] md:text-xs font-satoshi font-bold tracking-[0.4em] uppercase -rotate-90 origin-top-left absolute block top-full left-0 whitespace-nowrap z-0">
            Portfolio
          </span>
        </div>

        {/* Right Sidebar Socials */}
        <div className="hidden sm:flex absolute top-[40%] right-4 md:right-10 flex-col gap-6 text-[10px] md:text-xs font-satoshi font-bold text-text-secondary/70 uppercase">
          <a href="https://www.instagram.com/su_bro31/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">IG</a>
          <a href="#" className="hover:text-accent-cyan transition-colors">X</a>
          <a href="#" className="hover:text-accent-cyan transition-colors">YT</a>
          <a href="https://www.facebook.com/su.bro.125317/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">FB</a>
          <a href="https://linkedin.com/in/subrotoroy" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">IN</a>
          <a href="#" className="hover:text-accent-cyan transition-colors">TT</a>
        </div>

        {/* Filler to push text to bottom */}
        <div className="flex-1"></div>

        {/* BOTTOM HUGE TYPOGRAPHY */}
        <div className="w-full flex pb-6 md:pb-0 z-20">
           <div className="w-full max-w-[1400px] flex flex-col items-start justify-end pr-0 sm:pr-8 md:-mb-2 lg:-mb-6 md:mx-auto">
              <p className="font-satoshi text-text-primary text-xl sm:text-2xl md:text-3xl ml-1 sm:ml-2 md:ml-3 mb-2 tracking-[0.02em] opacity-90">
                Security Analyst & Researcher
              </p>
              
              <h1 className="font-satoshi font-black text-text-primary leading-[0.8] tracking-tighter uppercase text-[20vw] sm:text-[14vw] md:text-[12vw] xl:text-[11vw] select-none text-left w-full break-words sm:whitespace-nowrap -ml-1 sm:-ml-2 mix-blend-screen drop-shadow-2xl">
                SUBROTO ROY
              </h1>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
