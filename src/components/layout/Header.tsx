"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../lib/antellay";

interface HeaderProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

export function Header({ activeTab, onSelectTab }: HeaderProps) {
  const [internalActiveTab, setInternalActiveTab] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const currentTab = activeTab !== undefined ? activeTab : internalActiveTab;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash && navItems.map((n) => n.toLowerCase()).includes(hash)) {
        setInternalActiveTab(hash);
      } else {
        setInternalActiveTab("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (tabId: string) => {
    setIsMenuOpen(false);
    if (onSelectTab) {
      onSelectTab(tabId);
    } else {
      setInternalActiveTab(tabId);
      if (tabId === "home") {
        window.history.pushState(null, "", window.location.pathname);
      } else {
        window.history.pushState(null, "", `#${tabId}`);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#101118]/94 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 sm:h-24 w-full max-w-[1480px] items-center justify-between px-6 sm:px-10 lg:px-18">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="font-mono text-2xl sm:text-4xl font-black tracking-[0.03em] text-[#eeeef8]"
        >
          ANTELLAY-X
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-11">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = currentTab === sectionId;

            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(sectionId);
                }}
                className={`nav-link font-mono text-sm font-bold uppercase tracking-[0.24em] transition-colors duration-200 pb-2 border-b ${
                  isActive
                    ? "text-[#ededf7] border-[#126fff]"
                    : "text-[#c9c6ce] hover:text-white border-transparent"
                }`}
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="border border-white/12 px-7 py-4 font-mono text-sm font-black uppercase tracking-[0.18em] text-[#eeeef8] transition hover:border-white hover:bg-white hover:text-[#0d0e14]"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Hamburger 3-Line Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center border border-white/12 bg-[#14151c] text-[#ededf7] focus:outline-none lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#101118]/98 px-6 py-8 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = currentTab === sectionId;

              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(sectionId);
                  }}
                  className={`font-mono text-base font-bold uppercase tracking-[0.2em] transition-colors duration-200 pb-2 border-b w-fit ${
                    isActive
                      ? "text-[#ededf7] border-[#126fff]"
                      : "text-[#c9c6ce] border-transparent"
                  }`}
                >
                  {item}
                </a>
              );
            })}

            <div className="mt-4 pt-4 border-t border-white/8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className="inline-block w-full border border-white/20 bg-white/5 py-4 text-center font-mono text-sm font-black uppercase tracking-[0.18em] text-[#eeeef8] transition hover:bg-white hover:text-[#0d0e14]"
              >
                Join Waitlist
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
