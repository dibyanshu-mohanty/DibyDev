"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" ref={ref} style={{ padding: "100px 0", background: "#000", position: "relative", overflow: "hidden" }}>
      {/* Floating blob */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <span style={{ color: "#666", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
            What I work with
          </span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "bold" }}>Tech Stack</h2>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: "0 10px 30px rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", cursor: "pointer", transition: "all 0.3s" }}
            >
              <div style={{ position: "relative", width: "20px", height: "20px", flexShrink: 0 }}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized
                />
              </div>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#ccc" }}>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
