"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import RevealButton from "./RevealButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "News", href: "/#news" },
  { name: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Refs for GSAP
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const buttonRef = useRef(null);
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });
      
      tl.from(logoRef.current, { y: -20, opacity: 0, delay: 0.2 })
        .from(linksRef.current, { 
          y: -20, 
          opacity: 0, 
          stagger: 0.1 
        }, "-=1")
        .from(buttonRef.current, { 
          y: -10,
          opacity: 0 
        }, "-=0.8");
    });

    return () => ctx.revert();
  }, []);

  // Mobile Menu Animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(mobileLinksRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, ease: "power4.out", duration: 0.8, delay: 0.2 }
      );
    }
  }, [isMenuOpen]);

  // Hover animations for Desktop Links
  const handleLinkEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: -1, color: "#777", duration: 0.15, ease: "power1.out" });
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: 0, color: "#000", duration: 0.15, ease: "power1.out" });
  };

  // Determine if we should use absolute or relative positioning
  const isAboutPage = pathname === "/about";

  return (
    <>
      <nav ref={navRef} className={`w-full max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-10 flex justify-between items-center z-[200] ${isAboutPage ? "relative" : "absolute top-0 left-1/2 -translate-x-1/2"}`}>
        <Link 
          ref={logoRef}
          href="/" 
          className="text-[20px] font-bold text-black uppercase tracking-tight"
        >
          H.Studio
        </Link>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-14">
          {links.map((link, i) => (
            <li key={link.name}>
              <Link 
                ref={(el) => { linksRef.current[i] = el as any; }}
                href={link.href} 
                onMouseEnter={handleLinkEnter}
                onMouseLeave={handleLinkLeave}
                className={`text-[16px] font-semibold text-black transition-colors ${pathname === link.href ? "opacity-30 pointer-events-none" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div ref={buttonRef} className="hidden md:block">
          <RevealButton href="/#contact" className="text-[14px] font-medium px-9 py-3.5">
            Let's talk
          </RevealButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-8 h-5 z-[210] flex flex-col justify-between items-center transition-all duration-300"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className={`h-[2px] w-8 bg-black transition-all duration-500 ease-in-out ${isMenuOpen ? "absolute top-1/2 rotate-45 -translate-y-1/2" : ""}`}></div>
          <div className={`h-[2px] w-8 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`h-[2px] w-8 bg-black transition-all duration-500 ease-in-out ${isMenuOpen ? "absolute top-1/2 -rotate-45 -translate-y-1/2" : ""}`}></div>
        </button>
      </nav>

      {/* Premium Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <ul className="flex flex-col items-center gap-4">
          {links.map((link, i) => (
            <li key={link.name}>
              <Link 
                ref={(el) => { mobileLinksRef.current[i] = el as any; }}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-[38px] font-light italic text-black uppercase tracking-[-0.04em] block leading-none py-2 px-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-10">
            <div ref={(el) => { mobileLinksRef.current[links.length] = el as any; }}>
              <RevealButton 
                href="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[12px] font-medium px-10 py-3.5"
              >
                Let’s talk
              </RevealButton>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
