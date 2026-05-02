"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealButton from "./RevealButton";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsHero() {
  const containerRef = useRef(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      linesRef.current.forEach((line, i) => {
        if (!line) return;
        
        gsap.fromTo(line, 
          { y: 60, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white overflow-hidden py-16 md:py-32">
      
      {/* Desktop Version - Editorial Staircase */}
      <div className="hidden md:block">
        <div className="flex items-center gap-6 px-8 mb-12">
          <div className="flex-1 h-px bg-black" />
          <span className="font-mono text-[10px] uppercase text-black whitespace-nowrap tracking-[0.1em]">
            [ CASE STUDIES ]
          </span>
        </div>

        <div className="flex flex-col items-center mb-12">
          <span className="font-mono text-[10px] uppercase text-black tracking-[0.2em]">
            004
          </span>
        </div>

        <div className="flex flex-col">
          <p 
            ref={(el) => { linesRef.current[0] = el; }}
            className="px-8 text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]"
          >
            A CURATED /
          </p>
          <p 
            ref={(el) => { linesRef.current[1] = el; }}
            className="px-8 pl-[12vw] text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]"
          >
            SELECTION
          </p>
          <p 
            ref={(el) => { linesRef.current[2] = el; }}
            className="px-8 pl-[25vw] text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]"
          >
            OF <span className="font-playfair italic lowercase">&amp;</span> WORK
          </p>
          <p 
            ref={(el) => { linesRef.current[3] = el; }}
            className="px-8 text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]"
          >
            ACROSS
          </p>
          <p 
            ref={(el) => { linesRef.current[4] = el; }}
            className="px-8 pl-[20vw] text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]"
          >
            CATEGORIES.
          </p>
          <div className="w-full text-center mt-16">
            <span className="font-mono text-[10px] uppercase text-black tracking-widest">
              [ BRANDING, DESIGN, DIGITAL ]
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden px-6">
        <div className="border-t border-black pt-4 mb-10 flex justify-end">
          <span className="font-mono text-[10px] uppercase text-black tracking-widest">
            [ CASE STUDIES ]
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-[12px] mb-4 text-black tracking-[0.2em]">004</span>
          <h2 
            ref={(el) => { linesRef.current[5] = el; }}
            className="text-[10vw] font-light leading-[1.1] uppercase text-black"
          >
            A CURATED SELECTION OF WORK ACROSS CATEGORIES.
          </h2>
          <div className="mt-10">
            <span className="font-mono text-[10px] uppercase text-black tracking-widest">
              [ BRANDING, DESIGN, DIGITAL ]
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}