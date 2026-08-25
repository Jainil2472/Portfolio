import { motion } from "motion/react";

const particles = Array.from({ length: 10 });

export default function FloatingParticles() {
  
  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none">
      {particles.map((_, index) => {
        const left = Math.random() * 100;
        const size = Math.random() * 3 + 2;
        const duration = Math.random() * 5 + 4;
        const delay = Math.random() * 5;
        

        return (
          <motion.span
            key={index}
            className="absolute rounded-full bg-[#FF7A00] shadow-[0_0_12px_#FF7A00]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: "-20px",
              filter: "blur(1px)"
                        
            }}
            animate={{
              y: [-20, -900],
              opacity: [0, 1, 1, 0],
              x: [0, -20, 40, 0],
              scale: [0.5, 1, 0.8],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}