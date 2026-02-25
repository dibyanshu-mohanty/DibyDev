"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ideas } from "@/data/portfolio";
import ReactMarkdown from "react-markdown";

export default function ThesisPage() {
  const params = useParams();
  const idea = ideas.find((i) => i.id === params.id);

  if (!idea) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#000" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>404</h1>
          <p style={{ color: "#666", marginBottom: "24px" }}>Product not found</p>
          <Link href="/#products" style={{ color: "#888", textDecoration: "underline" }}>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff" }}>
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: "fixed", top: "32px", left: "32px", zIndex: 50 }}
      >
        <Link href="/#products" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ x: -4, background: "rgba(255,255,255,0.1)" }}
            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#999", cursor: "pointer", transition: "all 0.3s" }}
          >
            <ArrowLeft size={16} />
            <span style={{ fontSize: "13px" }}>Back</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Hero section */}
      <section style={{ padding: "120px 0 60px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Lightbulb size={18} style={{ color: "#888" }} />
                <span style={{ color: "#666", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {idea.category}
                </span>
              </div>
              <span style={{ color: "#555", fontSize: "13px" }}>
                Written in {idea.year}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.1 }}>
              {idea.title}
            </h1>

            <p style={{ fontSize: "20px", color: "#888", fontStyle: "italic", marginBottom: "24px" }}>
              {idea.tagline}
            </p>

            <p style={{ fontSize: "16px", color: "#999", lineHeight: 1.7 }}>
              {idea.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thesis content */}
      <section style={{ padding: "60px 0 100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px" }}
        >
          <div className="thesis-content">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "48px", marginBottom: "20px", color: "#fff" }}>
                    {children}
                  </h2>
                ),
                p: ({ children }) => (
                  <p style={{ fontSize: "16px", color: "#bbb", lineHeight: 1.8, marginBottom: "20px" }}>
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li style={{ fontSize: "16px", color: "#bbb", lineHeight: 1.8, marginBottom: "8px" }}>
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong style={{ color: "#fff", fontWeight: 600 }}>
                    {children}
                  </strong>
                ),
              }}
            >
              {idea.thesis}
            </ReactMarkdown>
          </div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
              Want to discuss this idea or collaborate?
            </p>
            <Link href="mailto:dibyanshu.m2002@gmail.com" style={{ textDecoration: "none" }}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                style={{ display: "inline-block", padding: "12px 24px", background: "white", color: "black", borderRadius: "8px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}
              >
                Get in Touch
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
