import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet } from 'lucide-react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  xWave: number[];
}

const Loader: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBubble = {
        id: Date.now() + Math.random(),
        x: Math.random() * 300 - 150, // Random x position
        size: Math.random() * 30 + 20, // Size between 20-50
        duration: Math.random() * 2 + 3, // Duration between 3-5 seconds
        delay: Math.random() * 0.5,
        xWave: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
      };
      setBubbles((prev) => [...prev, newBubble]);

      // Remove bubble after animation completes
      setTimeout(() => {
        setBubbles((prev) => prev.filter((bubble) => bubble.id !== newBubble.id));
      }, (newBubble.duration + newBubble.delay) * 1000);
    }, 400); // New bubble every 400ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-navy via-primary-navy-light to-primary-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,15,26,0.8)_100%)]"></div>
      
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96">
        {/* <motion.div
          className="relative w-full h-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-primary-blue/20 blur-3xl rounded-full"></div>
        </motion.div> */}
      </div>
      <div className="absolute right-0 top-1/4 w-96 h-96">
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="absolute inset-0 bg-primary-blue/20 blur-3xl rounded-full"></div>
        </motion.div>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute w-32 h-32 border-2 border-primary-blue/30 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 2, 3],
                opacity: [0.6, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 1,
                ease: "easeOut",
              }}
            />
          ))}

          <motion.div
            className="relative z-10"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Droplet 
              className="size-12 text-primary-blue fill-primary-blue drop-shadow-[0_0_30px_rgba(77,184,255,0.6)]" 
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-full blur-sm"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <AnimatePresence>
            {bubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                className="absolute"
                style={{ 
                  left: `calc(50% + ${bubble.x}px)`,
                  bottom: -100,
                }}
                initial={{ 
                  y: 0, 
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: -600,
                  opacity: [0, 0.8, 0.8, 0],
                  scale: [0, 1, 1, 0.8],
                  x: bubble.xWave,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: bubble.duration,
                  delay: bubble.delay,
                  ease: "easeOut",
                }}
              >
                {/* Bubble SVG */}
                <svg 
                  width={bubble.size} 
                  height={bubble.size} 
                  viewBox="0 0 40 40"
                >
                  <defs>
                    <radialGradient id={`bubbleGradient-${bubble.id}`}>
                      <stop offset="0%" stopColor="#5fa3ff" stopOpacity="0.4" />
                      <stop offset="70%" stopColor="#4a8cff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4a8cff" stopOpacity="0.8" />
                    </radialGradient>
                  </defs>
                  <circle 
                    cx="20" 
                    cy="20" 
                    r="18" 
                    fill={`url(#bubbleGradient-${bubble.id})`}
                    stroke="#5fa3ff"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                  {/* Highlight */}
                  <ellipse 
                    cx="15" 
                    cy="15" 
                    rx="6" 
                    ry="8" 
                    fill="white" 
                    opacity="0.5" 
                  />
                </svg>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Loader;
