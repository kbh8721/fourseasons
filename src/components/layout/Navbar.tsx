import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Ship } from "lucide-react";
import { cn } from "@/src/lib/utils";

const NAV_LINKS = [
  { name: "회사소개", path: "/about" },
  { name: "서비스", path: "/services" },
  { name: "지입안내", path: "/driver-guide" },
  { name: "고객센터", path: "/center" },
];

export function Navbar({ onOpenConsultation }: { onOpenConsultation: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled || !isHome || isMobileMenuOpen
      ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
      : "bg-transparent py-6"
  );

  const textClasses = cn(
    "transition-colors font-medium",
    isScrolled || !isHome || isMobileMenuOpen ? "text-primary hover:text-accent" : "text-white hover:text-accent"
  );

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Ship className={cn("w-8 h-8 transition-colors", isScrolled || !isHome || isMobileMenuOpen ? "text-primary" : "text-white")} />
            <span className={cn("text-2xl font-bold tracking-tight transition-colors", isScrolled || !isHome || isMobileMenuOpen ? "text-primary" : "text-white")}>
              사계절 물류
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className={textClasses}>
                {link.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenConsultation}
              className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-accent/90 transition-colors"
            >
              무료 컨설팅 신청
            </motion.button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled || !isHome || isMobileMenuOpen ? "text-primary" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled || !isHome ? "text-primary" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100"
        >
          <div className="flex flex-col px-4 py-6 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary font-medium text-lg py-2 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onOpenConsultation}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold mt-4"
            >
              무료 컨설팅 신청
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
