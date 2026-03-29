import React from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-[60px]"
    >
      <Hero />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <BentoGrid />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
