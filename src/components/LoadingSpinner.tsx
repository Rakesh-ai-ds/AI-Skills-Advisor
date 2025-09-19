import React from 'react';
import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-3 h-3 bg-primary rounded-full"
          animate={{
            y: ["0%", "-50%", "0%"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-3 h-3 bg-growth rounded-full"
          animate={{
            y: ["0%", "-50%", "0%"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <motion.div
          className="w-3 h-3 bg-energy rounded-full"
          animate={{
            y: ["0%", "-50%", "0%"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </motion.div>
    </div>
  );
}