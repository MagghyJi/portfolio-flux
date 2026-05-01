"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutVision() {
  const containerRef = useRef(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(el, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              scrub: 1
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-24 md:py-48 px-6 md:px-12 relative overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.05] select-none pointer-events-none">
        <h2 className="text-[40vw] font-bold uppercase leading-none text-white">Vision</h2>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-4 flex flex-col gap-6">
          <span className="font-mono text-[12px] uppercase tracking-widest text-white/40">[ THE PERSPECTIVE ]</span>
          <h3 className="text-[32px] md:text-[42px] font-medium leading-[1.1] text-white italic">
            Design as a <br /> Silent Language.
          </h3>
        </div>

        <div className="md:col-span-7 md:col-start-6 flex flex-col gap-12">
          <div ref={(el) => { textRefs.current[0] = el; }} className="flex flex-col gap-6">
            <p className="text-[24px] md:text-[32px] font-light leading-snug text-white">
              I believe that true luxury lies in the <span className="italic font-normal">unspoken</span>. In the space between elements, the rhythm of typography, and the intentional use of motion.
            </p>
          </div>

          <div ref={(el) => { textRefs.current[1] = el; }} className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase text-white font-bold">01 — Intentionality</span>
              <p className="text-[14px] md:text-[16px] text-white/70 font-light leading-relaxed">
                Every pixel, every frame, and every interaction is designed with purpose. I don't follow trends; I create timeless digital artifacts.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] uppercase text-white font-bold">02 — Innovation</span>
              <p className="text-[14px] md:text-[16px] text-white/70 font-light leading-relaxed">
                I merge cutting-edge technology with classical design principles to build experiences that feel both futuristic and familiar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
