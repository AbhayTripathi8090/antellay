"use client";

import { useState, useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Capabilities } from "../components/sections/Capabilities";
import { Symbiosis } from "../components/sections/Symbiosis";
import { Vision } from "../components/sections/Vision";
import { Robotics } from "../components/sections/Robotics";
import { Autonomy } from "../components/sections/Autonomy";
import { Company } from "../components/sections/Company";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (["vision", "robotics", "autonomy", "company", "contact"].includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab("home");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === "home") {
      window.history.pushState(null, "", window.location.pathname);
    } else {
      window.history.pushState(null, "", `#${tab}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#101118] text-white">
      <Header activeTab={activeTab} onSelectTab={handleSelectTab} />

      {activeTab === "home" && (
        <>
          <Hero />
          <Capabilities />
          <Symbiosis />
        </>
      )}

      {activeTab === "vision" && <Vision />}
      {activeTab === "robotics" && <Robotics />}
      {activeTab === "autonomy" && <Autonomy />}
      {activeTab === "company" && <Company />}
      {activeTab === "contact" && <Contact />}

      <Footer />
    </main>
  );
}
