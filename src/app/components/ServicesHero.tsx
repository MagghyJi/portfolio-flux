"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.3 }
      );

      // Subtitle Animation
      gsap.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.6 }
      );

      // Staggered Lines Animation
      lineRefs.current.forEach((line, i) => {
        if (!line) return;
        gsap.fromTo(line,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.8 + (i * 0.15) }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Label */}
        <div className="mb-8 md:mb-12">
          <span className="font-mono text-[10px] md:text-[12px] uppercase text-black/40 tracking-[0.2em]">
            [ SERVICES ]
          </span>
        </div>

        {/* Main Title */}
        <div className="mb-8 md:mb-16">
          <h1 
            ref={titleRef}
            className="text-[13vw] md:text-[8vw] font-light leading-[0.85] uppercase tracking-[-0.03em] text-black"
          >
            WHAT I<br />DO BEST
          </h1>
        </div>

        {/* Subtitle / Description */}
        <div className="max-w-xl">
          <p 
            ref={subtitleRef}
            className="text-[14px] md:text-[15px] leading-[1.6] text-black/60 font-medium"
          >
            I specialize in creating compelling brand identities, digital experiences, and products that resonate with audiences and drive meaningful results for forward-thinking companies.
          </p>
        </div>

        {/* Decorative Lines Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div className="flex flex-col gap-3">
            <span 
              ref={(el) => { lineRefs.current[0] = el; }}
              className="text-[28px] md:text-[3vw] font-bold text-black leading-none"
            >
              BRANDING
            </span>
            <span className="text-[10px] font-mono text-black/30 tracking-widest uppercase">
              Identity
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span 
              ref={(el) => { lineRefs.current[1] = el; }}
              className="text-[28px] md:text-[3vw] font-bold text-black leading-none"
            >
              DESIGN
            </span>
            <span className="text-[10px] font-mono text-black/30 tracking-widest uppercase">
              UI/UX
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span 
              ref={(el) => { lineRefs.current[2] = el; }}
              className="text-[28px] md:text-[3vw] font-bold text-black leading-none"
            >
              PHOTO
            </span>
            <span className="text-[10px] font-mono text-black/30 tracking-widest uppercase">
              Production
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span 
              ref={(el) => { lineRefs.current[3] = el; }}
              className="text-[28px] md:text-[3vw] font-bold text-black leading-none"
            >
              DIGITAL
            </span>
            <span className="text-[10px] font-mono text-black/30 tracking-widest uppercase">
              Engineering
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 md:mt-24 flex items-center gap-4">
          <div className="w-12 h-px bg-black/20" />
          <span className="text-[10px] font-mono text-black/40 uppercase tracking-widest">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}