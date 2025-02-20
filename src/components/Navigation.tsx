
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Lumitra Logo" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white/80 hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-white/80 hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-white/80 hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};
