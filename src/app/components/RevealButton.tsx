'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

interface RevealButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  whiteBorder?: boolean;
}

export default function RevealButton({ 
  children, 
  href, 
  onClick, 
  className = "", 
  type = 'button',
  whiteBorder = false
}: RevealButtonProps) {
  const revealRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const onMouseEnter = () => {
    gsap.to(revealRef.current, { y: "0%", duration: 0.4, ease: "power2.out" });
    gsap.to(textRef.current, { color: "#000000", duration: 0.4, ease: "power2.out" });
  };

  const onMouseLeave = () => {
    gsap.to(revealRef.current, { y: "-102%", duration: 0.4, ease: "power2.in" });
    gsap.to(textRef.current, { color: "#ffffff", duration: 0.4, ease: "power2.in" });
  };

  const baseStyles = "relative bg-black text-white rounded-full overflow-hidden border transition-none inline-block text-center";
  
  // Inline style to guarantee 30% border opacity
  const borderStyle = { 
    borderColor: whiteBorder ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)' 
  };

  const content = (
    <>
      <span 
        ref={revealRef} 
        className="absolute inset-0 bg-white -translate-y-[102%] pointer-events-none" 
      />
      <span 
        ref={textRef} 
        className="relative z-10 btn-text block w-full h-full"
      >
        {children}
      </span>
    </>
  );

  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    
    if (isInternal && !href.startsWith('http')) {
      return (
        <Link 
          href={href}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          className={`${baseStyles} ${className}`}
          style={borderStyle}
        >
          {content}
        </Link>
      );
    }

    return (
      <a 
        href={href}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={`${baseStyles} ${className}`}
        style={borderStyle}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${baseStyles} ${className}`}
      style={borderStyle}
    >
      {content}
    </button>
  );
}
