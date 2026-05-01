"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "./Navigation";
import RevealButton from "./RevealButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // Parallax Refs
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const helloRef = useRef(null);
  const harveyRef = useRef(null);
  const specterRef = useRef(null);

  // Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Parallax Animation
      gsap.to(harveyRef.current, {
        xPercent: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(helloRef.current, {
        xPercent: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(specterRef.current, {
        xPercent: 40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(bgRef.current, {
        scale: 1.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen md:min-h-screen overflow-hidden flex flex-col items-center bg-white">
      
      {/* 1. Background Image */}
      <img
        ref={bgRef}
        src="/hero-image-right-size.png"
        alt="Harvey Specter"
        className="absolute inset-0 w-full h-full object-cover object-top scale-105"
      />

      {/* 2. Global Content Container */}
      <div className="relative w-full flex flex-col min-h-screen">
        
        {/* Navigation Component */}
        <Navigation />

        {/* Hero Content */}
        <div className="flex-1 flex flex-col pt-[50vh] md:pt-[36vh] px-6 md:px-12 w-full max-w-[1440px] mx-auto">
          
          {/* Title Group */}
          <div className="flex flex-col items-start w-full">
            <span ref={helloRef} className="font-mono text-[12px] md:text-[14px] text-white/80 uppercase tracking-[0.2em] mb-4 block">
              [ Hello i’m ]
            </span>
            
            <h1 className="w-full text-white font-medium tracking-[-0.05em] leading-[0.85] text-left md:text-center">
              <span ref={harveyRef} className="block md:inline-block text-[22vw] md:text-[10vw] mix-blend-overlay">Harvey</span>
              <span ref={specterRef} className="block md:inline-block text-[22vw] md:text-[10vw] mix-blend-overlay whitespace-pre"> Specter</span>
            </h1>
          </div>

          {/* Description Block */}
          <div className="mt-8 flex justify-start md:justify-end w-full pb-16">
            <div className="max-w-[300px] md:max-w-[320px]">
              <p className="text-[14px] md:text-[14px] font-bold italic text-black uppercase leading-[1.15] tracking-tight">
                H.STUDIO <span className="font-normal normal-case italic">is a</span> FULL-SERVICE CREATIVE STUDIO CREATING BEAUTIFUL DIGITAL EXPERIENCES <span className="font-normal normal-case italic">and</span> PRODUCTS. WE ARE AN AWARD WINNING DESING AND ART GROUP SPECIALIZING IN BRANDING, WEB DESIGN AND ENGINEERING.
              </p>
              <div className="mt-8">
                <RevealButton href="#contact" className="text-[15px] font-bold px-12 py-4 tracking-tight">
                  Let’s talk
                </RevealButton>
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

    </section>
  );
}

