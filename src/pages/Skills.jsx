import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Skills = () => {
  return (
    <>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[100px] min-h-screen px-4 md:px-8 max-w-[1000px] mx-auto pb-16"
    >
      <h1 className="font-syne font-bold text-4xl md:text-5xl text-accent-cyan mb-12 border-b border-[#00b4d840] pb-4">Skills & Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
           <h2 className="font-syne font-semibold text-2xl text-text-primary mb-6">Security Domains</h2>
           <ul className="space-y-4 font-satoshi text-text-secondary">
             <li className="flex items-start gap-3"><span className="text-accent-cyan mt-1 text-sm">▸</span> Web Application Pentesting (SQL Injection, XSS, Prompt Injection)</li>
             <li className="flex items-start gap-3"><span className="text-accent-cyan mt-1 text-sm">▸</span> Network Security & Packet Analysis</li>
             <li className="flex items-start gap-3"><span className="text-accent-cyan mt-1 text-sm">▸</span> Cryptography & Encryption (SHA-512, hybrid auth systems)</li>
             <li className="flex items-start gap-3"><span className="text-accent-cyan mt-1 text-sm">▸</span> AI Agent Security Testing</li>
             <li className="flex items-start gap-3"><span className="text-accent-cyan mt-1 text-sm">▸</span> Digital Forensics</li>
           </ul>
        </div>
        
        <div>
           <h2 className="font-syne font-semibold text-2xl text-text-primary mb-6">Technical Arsenal</h2>
           <div className="mb-6">
              <h3 className="font-satoshi font-bold text-accent-blue mb-2 uppercase text-sm tracking-wider">Penetration Testing Tools</h3>
              <p className="font-mono text-sm text-text-muted bg-bg-secondary p-4 rounded-lg border border-[#00b4d826]">
                Nmap, Nessus, Metasploit, Burp Suite, Wireshark, Nikto, OWASP ZAP
              </p>
           </div>
           <div>
              <h3 className="font-satoshi font-bold text-accent-blue mb-2 uppercase text-sm tracking-wider">Operating Systems</h3>
              <p className="font-mono text-sm text-text-muted bg-bg-secondary p-4 rounded-lg border border-[#00b4d826]">
                Kali Linux, Mint, Parrot OS, Ubuntu, Windows Server, VirtualBox, VMWare
              </p>
           </div>
        </div>
      </div>

      <div className="mt-8">
         <h2 className="font-syne font-semibold text-2xl text-text-primary mb-8 border-b border-[#00b4d840] pb-4">Experience Timeline</h2>
         
         <div className="relative border-l border-[#00b4d840] pl-8 space-y-12 ml-4">
            
            <div className="relative">
               <div className="absolute -left-[39px] top-1.5 w-[14px] h-[14px] rounded-full bg-accent-cyan box-border shadow-[0_0_10px_rgba(0,180,216,0.5)]"></div>
               <h3 className="font-syne font-bold text-xl text-text-primary">Security Analyst <span className="text-accent-blue font-normal text-lg">— DataCrata, Dhaka</span></h3>
               <p className="font-mono text-xs text-text-muted mb-4 mt-1">Oct 2025 – Present</p>
               <ul className="space-y-2 font-satoshi text-text-secondary text-sm md:text-base list-disc list-inside">
                 <li>Penetration testing on AI agents</li>
                 <li>Identifying prompt injection, SQL injection, XSS vulnerabilities</li>
                 <li>Reporting findings and strengthening system security</li>
               </ul>
            </div>

            <div className="relative">
               <div className="absolute -left-[39px] top-1.5 w-[14px] h-[14px] rounded-full bg-text-muted box-border"></div>
               <h3 className="font-syne font-bold text-xl text-text-primary">Cybersecurity Intern <span className="text-accent-blue font-normal text-lg">— Prodigy Info Tech, Ahmedabad</span></h3>
               <p className="font-mono text-xs text-text-muted mb-4 mt-1">May 2024</p>
               <ul className="space-y-2 font-satoshi text-text-secondary text-sm md:text-base list-disc list-inside">
                 <li>Developed security prototypes using cryptography & encryption</li>
                 <li>Conducted ethical keystroke and network packet analysis</li>
               </ul>
            </div>

         </div>
      </div>

    </motion.div>
    <Footer />
    </>
  );
};

export default Skills;
