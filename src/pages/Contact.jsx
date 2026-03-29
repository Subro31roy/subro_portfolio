import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Footer from '../components/Footer';
const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  return (
    <>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[100px] min-h-screen px-4 md:px-8 max-w-[1000px] mx-auto pb-16"
    >
      <h1 className="font-syne font-bold text-4xl md:text-5xl text-accent-cyan mb-12 border-b border-[#00b4d840] pb-4">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Direct Contact Links */}
        <div className="space-y-8">
           <h2 className="font-syne font-semibold text-2xl text-text-primary mb-6">Get in touch</h2>
           
           <div className="space-y-6">
              <a href="mailto:subrotoroy1031@gmail.com" className="flex items-center gap-4 text-text-secondary hover:text-accent-cyan transition-colors">
                 <div className="w-12 h-12 bg-bg-secondary rounded-full flex items-center justify-center border border-[#00b4d826]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none"
                      stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M2 7l10 7 10-7"/>
                    </svg>
                 </div>
                 <span className="font-mono text-base">subrotoroy1031@gmail.com</span>
              </a>
              <a href="tel:+8801705508201" className="flex items-center gap-4 text-text-secondary hover:text-accent-cyan transition-colors">
                 <div className="w-12 h-12 bg-bg-secondary rounded-full flex items-center justify-center border border-[#00b4d826]"><Phone size={20} /></div>
                 <span className="font-mono text-base">(+880) 1705508201</span>
              </a>
              <a href="https://linkedin.com/in/subrotoroy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-accent-cyan transition-colors">
                 <div className="w-12 h-12 bg-bg-secondary rounded-full flex items-center justify-center border border-[#00b4d826]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="#0A66C2">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                 </div>
                 <span className="font-mono text-base">linkedin.com/in/subrotoroy</span>
              </a>
              <a href="https://www.instagram.com/su_bro31/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-secondary hover:text-accent-cyan transition-colors">
                 <div className="w-12 h-12 bg-bg-secondary rounded-full flex items-center justify-center border border-[#00b4d826]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                      <defs>
                        <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433"/>
                          <stop offset="25%" stopColor="#e6683c"/>
                          <stop offset="50%" stopColor="#dc2743"/>
                          <stop offset="75%" stopColor="#cc2366"/>
                          <stop offset="100%" stopColor="#bc1888"/>
                        </linearGradient>
                      </defs>
                      <path fill="url(#ig)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                 </div>
                 <span className="font-mono text-base">@su_bro31</span>
              </a>
           </div>
        </div>

        {/* Form */}
        <div>
           <form onSubmit={handleSubmit} className="bg-bg-secondary border border-[#00b4d826] p-8 rounded-2xl space-y-6 relative overflow-hidden group focus-within:border-accent-cyan transition-colors">
              <div>
                 <label className="block font-satoshi text-sm text-accent-cyan font-bold uppercase tracking-wider mb-2">Name</label>
                 <input required type="text" className="w-full bg-[#0D1117] border border-[#00b4d840] rounded p-3 text-text-primary outline-none focus:border-accent-cyan font-mono" placeholder="Target Name" />
              </div>
              <div>
                 <label className="block font-satoshi text-sm text-accent-cyan font-bold uppercase tracking-wider mb-2">Email</label>
                 <input required type="email" className="w-full bg-[#0D1117] border border-[#00b4d840] rounded p-3 text-text-primary outline-none focus:border-accent-cyan font-mono" placeholder="protocol@domain.com" />
              </div>
              <div>
                 <label className="block font-satoshi text-sm text-accent-cyan font-bold uppercase tracking-wider mb-2">Message</label>
                 <textarea required rows={4} className="w-full bg-[#0D1117] border border-[#00b4d840] rounded p-3 text-text-primary outline-none focus:border-accent-cyan font-mono resize-none" placeholder="Enter payload..." />
              </div>
              <button type="submit" className="w-full bg-accent-cyan text-[#080b0f] font-mono font-bold text-base py-3 rounded hover:bg-[#58A6FF] transition-colors">
                SEND PAYLOAD
              </button>

              {/* Success slide-in */}
              <div className={`absolute top-0 left-0 w-full h-full bg-accent-green flex flex-col items-center justify-center font-mono text-[#000] transition-transform duration-300 z-10 ${sent ? 'translate-y-0' : 'translate-y-full'}`}>
                 <span className="font-bold text-2xl mb-2">Payload Delivered.</span>
                 <span className="text-sm">Connection Terminated.</span>
              </div>
           </form>
        </div>
      </div>

    </motion.div>
    <Footer />
    </>
  );
};

export default Contact;
