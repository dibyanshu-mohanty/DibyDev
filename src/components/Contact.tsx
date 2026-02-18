"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Linkedin, Github, Twitter, Check, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xleyrrvq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="bg-black" ref={ref} style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px" }}
        >
          <span style={{ color: "#666", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
            Get in Touch
          </span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "bold" }}>Contact</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px" }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}>Let&apos;s Connect</h3>
            <p style={{ color: "#999", marginBottom: "32px", lineHeight: 1.7 }}>
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              style={{ display: "flex", alignItems: "center", gap: "12px", color: "#999", textDecoration: "none", marginBottom: "32px", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#999"; }}
            >
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </a>

            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: Linkedin, href: personalInfo.socials.linkedin },
                { icon: Twitter, href: personalInfo.socials.twitter },
                { icon: Github, href: personalInfo.socials.github },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  style={{ padding: "12px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "black"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "white"; }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", color: "#666", marginBottom: "6px" }}>Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: "100%", padding: "10px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "15px", outline: "none" }}
                placeholder="Your name"
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", color: "#666", marginBottom: "6px" }}>Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: "100%", padding: "10px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "15px", outline: "none" }}
                placeholder="your@email.com"
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "13px", color: "#666", marginBottom: "6px" }}>Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ width: "100%", padding: "10px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: "15px", outline: "none", resize: "none" }}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              style={{ padding: "12px 24px", background: "white", color: "black", fontWeight: 500, borderRadius: "999px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", opacity: status === "loading" ? 0.5 : 1 }}
            >
              {status === "loading" && <Loader2 size={16} className="animate-spin" />}
              {status === "success" && <Check size={16} />}
              {status === "idle" && <Send size={16} />}
              {status === "error" && <Send size={16} />}
              <span>
                {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Try Again" : "Send Message"}
              </span>
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "80px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p style={{ color: "#555", fontSize: "13px" }}>
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </section>
  );
}
