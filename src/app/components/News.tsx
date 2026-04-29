"use client";

import Image from "next/image";

const articles = [
  {
    img: "/article-1-image.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: "mt-0"
  },
  {
    img: "/article-2-image.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: "pt-48"
  },
  {
    img: "/article-3-image.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: "pt-24"
  },
];

export default function News() {
  return (
    <section id="news" className="bg-[#F9F9F9] py-48 relative text-[#000000] border-t border-black/5 overflow-hidden">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div className="flex flex-row items-stretch pl-12 md:pl-20 min-h-[900px]">
        
        {/* Sidebar Title - Aligned to the base (Read More line) */}
        <div className="w-48 flex-shrink-0 relative z-20 mr-32">
          {/* Using absolute positioning to anchor it to the specific baseline */}
          <div className="absolute bottom-[160px] left-0 w-full h-fit">
            <h2 className="font-light uppercase tracking-tighter leading-none -rotate-90 origin-left whitespace-nowrap text-[2.5rem] md:text-[3.2vw] inline-block">
              KEEP UP WITH MY LATEST <br className="hidden md:block" /> NEWS & ACHIEVEMENTS
            </h2>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex-1 overflow-x-auto no-scrollbar flex gap-0 pl-10 pr-0">
          {articles.map((a, i) => (
            <div 
              key={i} 
              className={`min-w-[450px] flex flex-col gap-8 px-16 border-l border-black/10 first:border-l-0 ${a.offset}`}
            >
              {/* Article Image - Fixed 353x469 */}
              <div className="relative w-[353px] h-[469px] overflow-hidden shadow-sm">
                <Image
                  src={a.img}
                  alt="News article"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Article Content */}
              <div className="flex flex-col gap-6 pb-12">
                <p className="text-[14px] leading-relaxed text-[#000000]/70 max-w-[320px]">
                  {a.text}
                </p>
                <div className="flex items-center gap-2 group cursor-pointer w-fit border-b border-[#000000] pb-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#000000]">Read more</span>
                  <div className="relative w-3 h-3 transition-transform group-hover:translate-x-1">
                    <Image
                      src="/arrow-top-right.svg"
                      alt="Arrow"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
