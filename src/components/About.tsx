"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { experiences, education, personalInfo } from "@/data/portfolio";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" ref={ref} style={{ padding: "100px 0", background: "#000", position: "relative", overflow: "hidden" }}>
      {/* Floating blob */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "350px",
          height: "350px",
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
            Get to know me
          </span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "bold" }}>About Me</h2>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: "18px", color: "#999", maxWidth: "700px", marginBottom: "64px", lineHeight: 1.7 }}
        >
          {personalInfo.description}
        </motion.p>

        {/* Experience */}
        <div style={{ marginBottom: "64px" }}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontSize: "28px", fontWeight: 600, marginBottom: "32px" }}
          >
            Experience
          </motion.h3>

          <div style={{ paddingLeft: "24px", borderLeft: "2px solid rgba(255,255,255,0.2)" }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                style={{ marginBottom: index === experiences.length - 1 ? 0 : "32px", position: "relative", cursor: "default" }}
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  style={{ position: "absolute", left: "-29px", top: "8px", width: "12px", height: "12px", background: "white", borderRadius: "50%" }}
                />

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: 600 }}>{exp.title}</h4>
                  <span style={{ color: "#666", fontSize: "14px" }}>@ {exp.company}</span>
                </div>
                <span style={{ color: "#555", fontSize: "13px", display: "block", marginBottom: "8px" }}>{exp.period}</span>
                <p style={{ color: "#999", fontSize: "14px", lineHeight: 1.6 }}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "32px", display: "flex", alignItems: "center", gap: "12px" }}>
            <GraduationCap size={28} />
            Education
          </h3>

          <div style={{ paddingLeft: "24px", borderLeft: "2px solid rgba(255,255,255,0.2)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", marginBottom: "16px" }}>
              <div>
                <h4 style={{ fontSize: "18px", fontWeight: 600 }}>{education.degree}</h4>
                <p style={{ color: "#999" }}>{education.institution}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ color: "#666", fontSize: "13px", display: "block" }}>{education.period}</span>
                <span style={{ fontWeight: 600 }}>CGPA: {education.cgpa}</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
              {education.achievements.map((achievement, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.1)" }}
                  style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", fontSize: "13px", color: "#999", cursor: "default", transition: "all 0.2s" }}
                >
                  <Award size={12} />
                  {achievement}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
