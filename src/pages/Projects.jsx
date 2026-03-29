import { motion } from 'framer-motion';
import Footer from '../components/Footer';
const Projects = () => {
  return (
    <>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[100px] min-h-screen px-4 md:px-8 max-w-[1000px] mx-auto pb-16"
    >
      <h1 className="font-syne font-bold text-4xl md:text-5xl text-accent-cyan mb-12 border-b border-[#00b4d840] pb-4">Projects</h1>
      
      <div className="bg-bg-secondary border border-accent-cyan p-6 md:p-8 rounded-2xl hover:shadow-[0_0_20px_rgba(0,180,216,0.15)] transition-shadow">
         <h2 className="font-syne font-bold text-2xl text-text-primary mb-4 leading-tight">
           Enhancing Login Security Using Cryptographic Hashing With Password and Image Pattern Authentication
         </h2>
         <p className="font-satoshi text-text-secondary text-base md:text-lg mb-6 leading-relaxed">
           Hybrid authentication combining text password, 4×4 image pattern grid, and SHA-512 hashing to resist brute-force, credential-stuffing, and guessing attacks.
         </p>
         <button className="flex items-center gap-2 bg-[#0D1117] border border-text-muted text-text-primary px-4 py-2 rounded font-mono text-sm hover:border-accent-cyan hover:text-accent-cyan transition-colors group">
            <img src="/github_logo.webp" alt="GitHub" className="w-5 h-5 filter brightness-0 invert opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all" /> View on GitHub
         </button>
      </div>

    </motion.div>
    <Footer />
    </>
  );
};

export default Projects;
