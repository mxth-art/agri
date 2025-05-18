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
    const duration = 3000;
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(progress);
      
      if (progress < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 1000);
        }, 500);
      }
    };
    
    requestAnimationFrame(animate);
    setTimeout(() => setTextVisible(true), 500);
    
    return () => {
      startTime = 0;
    };
  }, [onComplete]);

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
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
            transition: { 
              duration: 1, 
              ease: [0.65, 0, 0.35, 1]
            }
          }}
        >
          <ParticleSystem type="leaves" density={70} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12 relative"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Agri-BioFuels Global
            </motion.h1>
            <motion.p 
              className="text-xl text-green-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Transforming Agriculture, Powering Tomorrow
            </motion.p>
          </motion.div>

          <motion.div 
            className="relative w-48 h-48"
            initial="hidden"
            animate="visible"
            variants={circleVariants}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#065f46"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#22c55e"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.5 }}
              />
              
              <motion.text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-3xl font-bold fill-white"
                variants={numberVariants}
              >
                {Math.round(progress)}%
              </motion.text>
            </svg>

            <motion.div
              className="absolute -top-4 -right-4 text-green-500"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              <div className="w-8 h-8 bg-green-400 rounded-full opacity-75" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 text-green-500"
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }
              }}
            >
              <div className="w-8 h-8 bg-green-400 rounded-full opacity-75" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-farming-land-seen-from-above-4982-large.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;