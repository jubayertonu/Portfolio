import React from "react";
import { motion } from "motion/react";

interface TechSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const TechSection: React.FC<TechSectionProps> = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden group/section ${className}`}
    >
      {/* Dynamic Animated High-Tech Corner Brackets */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-teal-400 pointer-events-none z-10" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-teal-400 pointer-events-none z-10" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-teal-400 pointer-events-none z-10" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-teal-400 pointer-events-none z-10" 
      />

      {/* Laser Scan Beam Sweeping Effect when Section enters viewport */}
      <motion.div
        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf] pointer-events-none z-20 opacity-80"
        initial={{ top: "0%" }}
        whileInView={{ top: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeInOut" }}
      />

      {/* Top Border Cyan Beam Line */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/80 to-transparent pointer-events-none z-10"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      />

      {children}
    </motion.section>
  );
};

interface TechHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const TechHeader: React.FC<TechHeaderProps> = ({ title, subtitle, icon }) => {
  return (
    <motion.div 
      className="text-center space-y-2 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-widest uppercase flex items-center justify-center gap-3">
        {icon && <span className="inline-block text-teal-400">{icon}</span>}
        {title}
      </h2>

      {subtitle && (
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-normal">
          {subtitle}
        </p>
      )}

      <div className="flex items-center justify-center pt-2">
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full shadow-[0_0_8px_#2dd4bf]"
          initial={{ width: 0 }}
          whileInView={{ width: "112px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.25 }}
        />
      </div>
    </motion.div>
  );
};


