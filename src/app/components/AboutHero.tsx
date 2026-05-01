"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
      
      tl.from(bgRef.current, { scale: 1.05, duration: 2 })
        .from(subRef.current, { y: 20, opacity: 0 }, "-=1.5")
        .from(titleRef.current, { y: 40, opacity: 0 }, "-=1.3")
        .from(textRef.current, { y: 20, opacity: 0 }, "-=1.1");

      // B&W to Color Transition on Scroll
      gsap.to(bgRef.current, {
        filter: "grayscale(0%)",
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
    <section ref={sectionRef} className="relative w-full min-h-screen bg-white pt-32 md:pt-48 pb-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      
      {/* Ghost Background Typography - Extremely Subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden z-0">
        <h1 className="text-[45vw] font-black uppercase leading-none tracking-tighter select-none">
          Harvey
        </h1>
      </div>

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Editorial Quote & Vertical Info */}
        <div className="md:col-span-3 flex flex-col gap-24 h-full justify-between order-2 md:order-1">
          <div className="flex flex-col gap-6 border-l border-black/10 pl-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/40">[ THE PERSPECTIVE ]</span>
            <p className="text-[15px] leading-relaxed font-light italic text-black/70">
              "True excellence is found in the absolute precision of the essential."
            </p>
          </div>
          
          <div className="hidden md:block">
             <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-black/10 rotate-180 [writing-mode:vertical-lr] mb-8">
               [ EST. 2016 — MILANO ]
             </span>
          </div>
        </div>

        {/* Center Column: The Authentic Portrait (Harvey) */}
        <div className="md:col-span-5 h-[65vh] md:h-[85vh] relative group order-1 md:order-2">
          {/* Structural Frame Effect */}
          <div className="absolute -inset-4 border border-black/5 -z-10 translate-x-4 translate-y-4" />
          
          <div className="w-full h-full overflow-hidden relative shadow-2xl">
             <img 
               ref={bgRef}
               src="/hero-image-right-size.png" 
               alt="Harvey Specter" 
               className="w-full h-full object-cover object-top grayscale transition-all duration-1000 scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating Image Label */}
          <div className="absolute bottom-6 right-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white mix-blend-difference">
              [ FIG. 01 — H. SPECTER ]
            </span>
          </div>
        </div>

        {/* Right Column: Title & Individual Story */}
        <div className="md:col-span-4 flex flex-col items-start pl-0 md:pl-16 order-3">
          <div ref={subRef} className="mb-8">
            <span className="font-mono text-[11px] text-black/30 uppercase tracking-[0.2em]">
              [ CREATIVE DIRECTOR ]
            </span>
          </div>

          <h1 ref={titleRef} className="text-[12vw] md:text-[8vw] font-medium text-black leading-[0.8] tracking-[-0.05em] mb-12">
            Harvey <br /> 
            <span className="italic font-light text-black/40">Specter</span>
          </h1>

          <div ref={textRef} className="max-w-[340px]">
            <p className="text-[17px] md:text-[19px] text-black font-light leading-relaxed mb-8">
              A designer and director born and raised with a vision for digital purity. I blend classical aesthetics with modern technical precision to build digital experiences that feel both futuristic and familiar.
            </p>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-[1px] bg-black/20 group-hover:w-16 group-hover:bg-black transition-all duration-500" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">Founder of H.Studio</span>
            </div>
          </div>
        </div>

      </div>

      {/* Background Decor Element */}
      <div className="absolute right-0 top-1/4 w-[1px] h-[30%] bg-black/5 hidden lg:block" />
    </section>
  );
}
