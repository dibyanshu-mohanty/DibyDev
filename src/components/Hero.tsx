"use client";

import { motion } from "framer-motion";
import { ChevronDown, Linkedin, Twitter, Github, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const firstName = "Dibyanshu";
  const lastName = "Mohanty";

  return (
    <section
      id="home"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#000", position: "relative", overflow: "hidden" }}
    >
      {/* Primary large white blob - top left */}
      <motion.div
        animate={{
          x: [0, 120, 60, 0],
          y: [0, -60, 120, 0],
          scale: [1, 1.3, 0.85, 1],
          opacity: [0.15, 0.25, 0.12, 0.15],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Secondary blob - bottom right */}
      <motion.div
        animate={{
          x: [0, -100, 40, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.75, 1.2, 1],
          opacity: [0.12, 0.2, 0.1, 0.12],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          bottom: "5%",
          right: "10%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Center accent blob */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -40, 80, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Small accent blob - top right */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute",
          top: "15%",
          right: "20%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Morphing blob effect */}
      <motion.div
        animate={{
          borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "30%",
          left: "15%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
            width: "4px",
            height: "4px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Main content */}
      <div style={{ textAlign: "center", width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10 }}>
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: "24px" }}
        >
          <span style={{ color: "#666", fontSize: "16px", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 300 }}>
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "clamp(48px, 10vw, 96px)", fontWeight: "bold", letterSpacing: "-0.03em", lineHeight: 1 }}>
            <span style={{ display: "block" }}>
              {firstName.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.2, color: "#888", transition: { duration: 0.2 } }}
                  style={{ display: "inline-block", cursor: "default" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span style={{ display: "block", marginTop: "8px" }}>
              {lastName.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={firstName.length + i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.2, color: "#888", transition: { duration: 0.2 } }}
                  style={{ display: "inline-block", cursor: "default" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginBottom: "40px" }}
        >
          <h2 style={{ fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 300, color: "#ccc", marginBottom: "8px" }}>
            {personalInfo.title}
          </h2>
          <p style={{ fontSize: "16px", color: "#666" }}>{personalInfo.subtitle}</p>
        </motion.div>

        {/* Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ width: "80px", height: "1px", background: "rgba(255,255,255,0.3)", margin: "0 auto 40px" }}
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}
        >
          {[
            { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
            { icon: Twitter, href: personalInfo.socials.twitter, label: "Twitter" },
            { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.15, y: -4, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: "12px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "black"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "white"; }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", color: "#666", background: "none", border: "none", cursor: "pointer" }}
      >
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
