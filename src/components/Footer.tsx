"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ padding: "80px 0 40px", background: "#000", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>
        {/* Main tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: "bold", textAlign: "center", marginBottom: "64px" }}
        >
          Building for the world, from India. 🇮🇳
        </motion.h2>

        {/* Bottom */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: "#555", fontSize: "13px" }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", color: "#999", cursor: "pointer", fontSize: "13px", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#999"; }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
