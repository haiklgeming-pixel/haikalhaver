import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import diponegoroImage from "@assets/generated_images/dramatic_oil_painting_of_prince_diponegoro_in_the_java_war..png";

export default function Intro() {
  const [, setLocation] = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsVisible(false);
    setTimeout(() => setLocation("/home"), 1000);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={diponegoroImage}
              alt="Background"
              className="h-full w-full object-cover opacity-40 scale-105 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl px-6 text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-4 font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-[#C5A059]"
            >
              Perang Jawa
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mb-2 font-heading text-xl md:text-2xl italic text-gray-300"
            >
              (1825 – 1830)
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="mx-auto mb-12 h-1 w-24 bg-[#C5A059]"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="mb-12 font-history text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              "Sebuah kisah tentang keberanian, pengkhianatan, dan perjuangan Pangeran Diponegoro mempertahankan tanah leluhur dari kolonialisme Belanda."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 4.5, duration: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <button
                onClick={handleEnter}
                className="group relative overflow-hidden rounded-sm border border-[#C5A059] bg-transparent px-8 py-3 font-sans text-sm font-bold uppercase tracking-widest text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
              >
                Masuk ke Situs
              </button>
              
              <button
                onClick={() => setLocation("/home")}
                className="text-xs uppercase tracking-widest text-gray-500 hover:text-white mt-4 sm:mt-0 sm:ml-8"
              >
                Lewati Intro
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
