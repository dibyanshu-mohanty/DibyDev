"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Ideas from "@/components/Ideas";
import Footer from "@/components/Footer";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <motion.div style={{ position: "relative" }}>
        {/* Animated logo/text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "36px", fontWeight: "bold", letterSpacing: "-0.02em" }}
        >
          DM<span style={{ color: "#666" }}>.</span>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ height: "1px", background: "white", marginTop: "16px" }}
        />

        {/* Pulsing dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{ width: "8px", height: "8px", background: "white", borderRadius: "50%" }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <LoadingScreen />}</AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Ideas />
        <Footer />
      </motion.main>
    </>
  );
}
