"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { year: "2024", title: "Creative Direction", company: "H.Studio Global" },
  { year: "2022", title: "Senior Visual Designer", company: "Awwwards Jury Member" },
  { year: "2020", title: "Interactive Lead", company: "Stink Studios NY" },
  { year: "2018", title: "UI/UX Specialist", company: "Resn Amsterdam" },
  { year: "2016", title: "Foundation", company: "H.Studio Milan" },
];

export default function ExperienceList() {
  const containerRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, 
          { x: -20, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#f9f9f9] py-24 md:py-48 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <h2 className="text-[64px] md:text-[120px] font-light uppercase tracking-[-0.05em] leading-[0.85] text-black">
            Experience <br /> <span className="italic font-extralight ml-[2vw]">Timeline</span>
          </h2>
          <div className="max-w-[300px]">
            <p className="font-mono text-[10px] uppercase text-black/40 tracking-widest leading-loose">
              [ A CHRONOLOGICAL RECORD OF DESIGN EXCELLENCE AND TECHNICAL MASTERY ACROSS GLOBAL STUDIOS. ]
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              ref={(el) => { itemRefs.current[i] = el; }}
              className="group border-b border-black/10 py-12 md:py-16 flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-6 md:gap-0 hover:bg-black/[0.01] transition-colors duration-500"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-[14px] md:text-[16px] text-black italic">
                  {exp.year}
                </span>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-[24px] md:text-[36px] font-medium text-black tracking-tight group-hover:italic transition-all duration-500">
                  {exp.title}
                </h3>
              </div>
              <div className="md:col-span-4 md:text-right">
                <span className="text-[16px] md:text-[20px] font-light text-black/60 tracking-widest italic">
                  {exp.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
