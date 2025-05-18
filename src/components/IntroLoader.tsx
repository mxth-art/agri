import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleSystem from './animations/ParticleSystem';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 30; // Update every 30ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              onComplete();
            }, 1000);
          }, 500);
        }
        return next;
      });
    }, interval);

    setTimeout(() => {
      setTextVisible(true);
    }, 500);

    return () => clearInterval(timer);
  }, [onComplete]);

  const leafVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    exit: { scale: 0, rotate: 180 }
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 flex flex-col items-center justify-center bg-green-950 z-50"
          exit={{ 
            y: "100%", 
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" }
          }}
        >
          <ParticleSystem type="leaves" density={70} />

          {/* Title with leaf decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12 relative"
          >
            <motion.div
              className="absolute -left-12 -top-8 text-green-500"
              variants={leafVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.2 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8 6H16L12 2Z"/>
                <path d="M12 22L8 18H16L12 22Z"/>
              </svg>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Agri-BioFuels Global
            </h1>
            <p className="text-xl text-green-200">
              Transforming Agriculture, Powering Tomorrow
            </p>
            
            <motion.div
              className="absolute -right-12 -bottom-8 text-green-500"
              variants={leafVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.4 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8 6H16L12 2Z"/>
                <path d="M12 22L8 18H16L12 22Z"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Circular Progress */}
          <motion.div 
            className="relative w-48 h-48"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#065f46"
                strokeWidth="8"
              />
              
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#22c55e"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * progress) / 100}
                transform="rotate(-90 50 50)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Progress text */}
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-3xl font-bold fill-white"
              >
                {Math.round(progress)}%
              </text>
            </svg>

            {/* Decorative leaves */}
            <motion.div
              className="absolute -top-4 -right-4 text-green-500"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8 6H16L12 2Z"/>
              </svg>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 text-green-500"
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 0.9, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22L8 18H16L12 22Z"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;