import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, FastForward, Rewind, Play, Pause } from 'lucide-react';

const BentoGrid = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = document.getElementById('bg-audio');
      if (audio && audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Play prevented by browser policies, wait for next interaction
        });
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };

    // Listen for either a click or a scroll to auto-play background vibe
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, []);

  const handleMessage = (e) => {
    e.preventDefault();
    if(message.trim()) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setMessage('');
    }
  };

  const wallpapers = [
    '/wall1.webp', '/wall2.webp', '/wall3.webp', '/wall4.webp', '/wall5.webp', '/wall6.webp', '/wall7.webp'
  ];

  const tools = [
    { src: '/kali_logo.webp', invert: false },
    { src: '/burpsuite_logo.webp', invert: false },
    { src: '/nmap.webp', invert: true },
    { src: '/metasploit.webp', invert: false },
    { src: '/wireshark.webp', invert: false },
    { src: '/nessus_logo.webp', invert: false },
    { src: '/zap_logo.webp', invert: true },
    { src: '/python_logo.webp', invert: false },
    { src: '/aws_logo.webp', invert: false },
    { src: '/virtualbox_logo.webp', invert: false },
    { src: '/github_logo.webp', invert: true }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] gap-6 w-full">
      
      {/* 1. Wallpaper Gallery (5 cols, 2 rows) */}
      <div className="md:col-span-5 md:row-span-2 relative overflow-hidden rounded-2xl bg-bg-secondary border border-[#00b4d826] group">
        <div className="absolute inset-0 flex flex-nowrap w-max animate-marquee gap-2 p-2 pt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500 hover:[animation-play-state:paused]">
          {[...wallpapers, ...wallpapers].map((src, i) => (
            <img key={i} src={src} alt="Cyber Wallpaper" className="h-[180px] w-auto max-w-xs object-cover rounded shadow-lg border border-[#39D353]/20" />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* 2. Intro Card (7 cols, 2 rows) */}
      <div className="md:col-span-7 md:row-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-[#00b4d826] p-8 flex flex-col justify-between group cursor-default">
        <div>
          <h2 className="font-syne font-bold text-3xl md:text-5xl text-text-primary mb-4 drop-shadow-md">
            Hi, I'm Subroto
          </h2>
          <p className="font-satoshi text-text-secondary text-base md:text-lg leading-relaxed max-w-[90%]">
            I'm a Security Analyst specializing in penetration testing,
            AI security research, and cryptographic systems. Currently
            breaking things (ethically) at DataCrata in Dhaka.<br/><br/>
            <span className="text-accent-cyan font-bold">International Scholar & Researcher </span>
          </p>
        </div>
        
        {/* Interaction Form Context */}
        <form onSubmit={handleMessage} className="relative mt-4 w-full md:w-2/3 h-12 flex items-center bg-[#0D1117] border border-[#00b4d840] rounded-lg overflow-hidden focus-within:border-accent-cyan transition-colors">
          <input 
            type="text" 
            placeholder="Drop a message or a vulnerability report..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent border-none outline-none px-4 text-text-primary font-mono text-[13px] md:text-sm placeholder-text-muted/60"
          />
          <button type="submit" className="h-full px-6 bg-accent-cyan text-[#080b0f] font-mono font-bold text-sm hover:bg-[#58A6FF] transition-colors">
            SEND
          </button>

          {/* Success slide-in */}
          <div className={`absolute top-0 left-0 w-full h-full bg-accent-green flex items-center justify-center font-mono text-[#000] font-bold text-sm transition-transform duration-300 ${sent ? 'translate-y-0' : 'translate-y-full'}`}>
            Payload Delivered.
          </div>
        </form>
      </div>

      {/* 3. Tools Marquee (6 cols, 1 row) */}
      <div className="md:col-span-6 md:row-span-1 relative overflow-hidden rounded-2xl bg-bg-secondary border border-[#00b4d826] flex items-center group">
        <div className="flex whitespace-nowrap animate-marquee w-max items-center gap-12 pr-12">
           {[...tools, ...tools, ...tools].map((tool, i) => (
             <img key={i} src={tool.src} alt="Tool logo" className={`h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 ${tool.invert ? 'filter invert brightness-0 group-hover:filter-none' : ''}`} />
           ))}
        </div>
      </div>

      {/* 4. Profile Picture (2 cols, 2 rows) */}
      <div className="min-h-[250px] md:min-h-0 md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl bg-bg-secondary border border-[#00b4d826] group h-full">
        <img src="/mine_pic.webp" alt="Subroto Roy profile" className="w-full h-full object-center object-cover transition-transform duration-500 scale-105 group-hover:scale-100" />
      </div>

      {/* 5. Video Card (4 cols, 2 rows) */}
      <div className="md:col-span-4 md:row-span-2 relative overflow-hidden rounded-2xl bg-black border border-[#00b4d826] group">
        <video 
          src="/carchase.mp4" 
          autoPlay 
          loop 
          muted={isMuted} 
          playsInline 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
        ></video>
        <button 
          onClick={() => setIsMuted(!isMuted)} 
          className="absolute bottom-4 right-4 bg-bg-primary/80 backdrop-blur border border-[#00b4d840] p-2 rounded-full text-text-primary hover:text-accent-cyan transition-colors z-20"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      {/* 6. Music Player (6 cols, 1 row) */}
      <div className="md:col-span-6 md:row-span-1 relative overflow-hidden rounded-2xl bg-[#0D1117] border border-[#00b4d826] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
         <div className="flex w-full sm:w-auto items-center gap-4">
            <div className="relative w-16 md:w-20 h-16 md:h-20 flex-shrink-0 rounded-lg overflow-hidden border border-[#00b4d826] shadow-[0_0_15px_rgba(0,180,216,0.1)] group">
              <img src="/songpic.webp" alt="Ghost Protocol Art" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
            <div>
               <h3 className="font-syne font-bold text-base md:text-lg text-text-primary">Ghost Protocol</h3>
               <p className="font-satoshi text-text-muted text-xs md:text-sm">Dark Cyberpunk Lo-Fi</p>
            </div>
         </div>
         <audio id="bg-audio" src="/NEFFEX_-_Best_of_Me_(mp3.pm).mp3" loop className="hidden" />
         
         <div className="flex items-center gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <button className="text-text-muted hover:text-text-primary transition-colors"><Rewind size={20}/></button>
            <button onClick={() => {
                const audio = document.getElementById('bg-audio');
                if(audio.paused) { audio.play(); setIsPlaying(true); }
                else { audio.pause(); setIsPlaying(false); }
            }} className="w-12 h-12 rounded-full bg-accent-cyan flex items-center justify-center text-[#080b0f] hover:scale-105 transition-transform">{isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}</button>
            <button className="text-text-muted hover:text-text-primary transition-colors"><FastForward size={20}/></button>
         </div>
      </div>

    </div>
  );
};

export default BentoGrid;
