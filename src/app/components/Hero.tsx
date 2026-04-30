"use client";

import { useState, useEffect } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <section className="relative w-full min-h-screen md:min-h-screen overflow-hidden flex flex-col items-center bg-white">
      
      {/* 1. Background Image */}
      <img
        src="/hero-image-right-size.png"
        alt="Harvey Specter"
        className="absolute inset-0 w-full h-full object-cover object-top scale-105"
      />

      {/* 2. Global Content Container */}
      <div className="relative w-full flex flex-col min-h-screen">
        
        {/* Navbar - This scrolls with the page */}
        <nav className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-10 flex justify-between items-center z-20">
          <a href="#" className="text-[20px] font-bold text-black uppercase tracking-tight">
            H.Studio
          </a>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-14">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-[16px] font-semibold text-black hover:opacity-50 transition-opacity">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#contact" className="hidden md:block bg-black text-white text-[14px] font-medium px-9 py-3.5 rounded-full">
            Let's talk
          </a>

          {/* Hamburger Toggle - Sits in the Nav (scrolls) but becomes fixed when menu is OPEN */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 z-[100] transition-all duration-300 ${isMenuOpen ? "fixed top-8 right-6" : "relative"}`}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className={`h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? "w-8 rotate-45 translate-y-[4px]" : "w-8"}`}></div>
            <div className={`h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-5"}`}></div>
            <div className={`h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? "w-8 -rotate-45 -translate-y-[12px]" : "w-8"}`}></div>
          </button>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col pt-[50vh] md:pt-[36vh] px-6 md:px-12 w-full max-w-[1440px] mx-auto">
          
          {/* Title Group */}
          <div className="flex flex-col items-start w-full">
            <span className="font-mono text-[12px] md:text-[14px] text-white/80 uppercase tracking-[0.2em] mb-4">
              [ Hello i’m ]
            </span>
            
            <h1 className="w-full text-white font-medium uppercase tracking-[-0.05em] leading-[0.85] text-left md:text-center">
              <span className="block md:inline text-[20vw] md:text-[8.5vw] mix-blend-overlay">Harvey</span>
              <span className="block md:inline text-[20vw] md:text-[8.5vw] mix-blend-overlay"> Specter</span>
            </h1>
          </div>

          {/* Description Block */}
          <div className="mt-8 flex justify-start md:justify-end w-full pb-16">
            <div className="max-w-[300px] md:max-w-[320px]">
              <p className="text-[14px] md:text-[14px] font-bold italic text-black uppercase leading-[1.15] tracking-tight">
                H.STUDIO <span className="font-normal normal-case italic">is a</span> FULL-SERVICE CREATIVE STUDIO CREATING BEAUTIFUL DIGITAL EXPERIENCES <span className="font-normal normal-case italic">and</span> PRODUCTS. WE ARE AN AWARD WINNING DESING AND ART GROUP SPECIALIZING IN BRANDING, WEB DESIGN AND ENGINEERING.
              </p>
              <div className="mt-8">
                <a href="#contact" className="bg-black text-white text-[15px] font-bold px-12 py-4 rounded-full inline-block uppercase tracking-tight">
                  Let’s talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Blur */}
      <div className="absolute inset-x-0 bottom-0 h-[10%] pointer-events-none backdrop-blur-[4px] z-10"
           style={{ 
             maskImage: "linear-gradient(to top, black, transparent)", 
             WebkitMaskImage: "linear-gradient(to top, black, transparent)" 
           }} 
      />

      {/* Premium Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col items-center gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-[32px] font-bold text-black uppercase tracking-tighter"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white text-[18px] font-bold px-14 py-5 rounded-full uppercase"
            >
              Let’s talk
            </a>
          </li>
        </ul>
      </div>

    </section>
  );
}
