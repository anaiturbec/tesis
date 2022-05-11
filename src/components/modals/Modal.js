import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '50%' },
  exit: { top: '-50%' },
};

export default function Modal({
  children,
  isOpen = false,
  className = '',
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          id="overlay"
          className="fixed inset-0 w-full h-full z-50 px-4 flex justify-center items-center"
          initial="initial"
          animate="isOpen"
          exit="exit"
          variants={modalVariant}
          style={{
            backgroundColor: `rgba(0,0,0,.5)`,
          }}
        >
          <motion.div
            className={`bg-white overflow-y-auto rounded-lg ${className}`}
            variants={containerVariant}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
