// MotionWrapper.tsx
"use client"; // This tells Next.js to treat this as a client component

import React from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  variants?: any;
  initial?: any; // Relaxed type for initial
  animate?: any; // Relaxed type for animate
  whileHover?: any;
  whileTap?: any;
  transition?: any;
  className?: string;
  style?: React.CSSProperties;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  variants,
  initial,
  animate,
  whileHover,
  whileTap,
  transition,
  className,
  style,
}) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};