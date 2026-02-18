"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, personalInfo } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" ref={ref} style={{ padding: "100px 0", background: "#000", position: "relative", overflow: "hidden" }}>
      {/* Floating blob */}
      <motion.div
        animate={{
          x: [0, 70, -30, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "30%",
          right: "0%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
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
            My Work
          </span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "bold" }}>Projects</h2>
        </motion.div>

        {/* Projects grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.06)",
              }}
              style={{ display: "block", padding: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", textDecoration: "none", color: "inherit", transition: "all 0.3s ease" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#666", fontSize: "13px", marginBottom: "12px" }}>
                <Github size={16} />
                <span>{project.techStack}</span>
              </div>

              <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>
                {project.title}
              </h3>

              <p style={{ color: "#999", fontSize: "14px", marginBottom: "16px", lineHeight: 1.6 }}>
                {project.description}
              </p>

              <motion.div
                style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#666" }}
                whileHover={{ x: 4, color: "#fff" }}
              >
                <span>View Project</span>
                <ExternalLink size={14} />
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* GitHub link */}
        <motion.a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ x: 8 }}
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#999", textDecoration: "none", transition: "all 0.3s" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#999"; }}
        >
          <span>See more on GitHub</span>
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}
