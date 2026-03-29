import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Certificates = () => {
  const certs = [
    { name: "Google — Foundations of Cybersecurity", date: "Jun 2023, Coursera" },
    { name: "Google — Analyze Data to Answer Questions", date: "Jul 2023, Coursera" },
    { name: "AWS — Security Fundamentals Second Edition", date: "Feb 2025" },
    { name: "RED TEAM LEADERS — Certified Cybersecurity Educator Professional (CCEP)", date: "Jan 2026" },
  ];

  return (
    <>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[100px] min-h-screen px-4 md:px-8 max-w-[1000px] mx-auto pb-16"
    >
      <h1 className="font-syne font-bold text-4xl md:text-5xl text-accent-cyan mb-12 border-b border-[#00b4d840] pb-4">Certificates & Awards</h1>
      
      <div className="mb-16">
         <h2 className="font-syne font-semibold text-2xl text-text-primary mb-6">Certifications</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certs.map((c, i) => (
              <div key={i} className="bg-bg-secondary border border-[#00b4d826] p-6 rounded-xl hover:border-accent-cyan transition-colors">
                 <h3 className="font-satoshi font-bold text-text-primary text-lg mb-2">{c.name}</h3>
                 <p className="font-mono text-sm text-text-muted">{c.date}</p>
              </div>
            ))}
         </div>
      </div>

      <div>
         <h2 className="font-syne font-semibold text-2xl text-text-primary mb-6">Honors & Awards</h2>
         <div className="space-y-6">
            <div className="bg-bg-secondary border border-accent-orange/40 p-6 rounded-xl border-l-4 border-l-accent-orange">
               <h3 className="font-syne font-bold text-xl text-text-primary mb-2">ICCR International Scholar</h3>
               <p className="font-mono text-sm text-text-muted mb-2">Indian Council for Cultural Relations — Aug 2022</p>
               <p className="font-satoshi text-text-secondary text-base">Awarded to pursue BSc Cybersecurity at Gujarat University.</p>
            </div>
            
            <div className="bg-bg-secondary border border-accent-blue/40 p-6 rounded-xl border-l-4 border-l-accent-blue">
               <h3 className="font-syne font-bold text-xl text-text-primary mb-2">G20 Youth Ambassador</h3>
               <p className="font-mono text-sm text-text-muted mb-2">Jan–Feb 2023</p>
               <p className="font-satoshi text-text-secondary text-base">Represented Bangladesh at Gujarat University.</p>
            </div>
         </div>
      </div>

    </motion.div>
    <Footer />
    </>
  );
};

export default Certificates;
