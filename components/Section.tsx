import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, delay = 0 }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
      >
        {children}
      </motion.div>
    </section>
  );
};