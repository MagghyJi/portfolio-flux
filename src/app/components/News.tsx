import Image from "next/image";

const articles = [
  {
    img: "/article-1-image.png",
    date: "NOV 2024",
    title: "New Campaign: Visual Storytelling Across Digital Platforms",
    className: "md:mt-0"
  },
  {
    img: "/article-2-image.png",
    date: "OCT 2024",
    title: "Award Recognition: Best Creative Direction 2024",
    className: "md:mt-24"
  },
  {
    img: "/article-3-image.png",
    date: "SEP 2024",
    title: "Behind the Lens: My Approach to Street Photography",
    className: "md:mt-48"
  },
];

export default function News() {
  return (
    <section id="news" className="bg-black text-white overflow-hidden py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          {/* Left: section heading */}
          <div className="flex flex-col gap-8 flex-shrink-0 sticky top-32" style={{ width: "clamp(250px, 25vw, 400px)" }}>
            <div className="h-px bg-white/20 w-full" />
            <span
              className="font-mono text-[10px] uppercase text-white/40 tracking-[0.2em]"
            >
              [ 004 — NEWS & REVIEWS ]
            </span>
            <h2
              className="text-[4rem] md:text-[3.5vw] font-extralight uppercase leading-[1.0] text-white"
              style={{ letterSpacing: "-0.03em" }}
            >
              KEEP UP WITH MY LATEST UPDATES
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-[300px]">
              Exploring the intersection of technology, art, and visual narratives through my latest projects and insights.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/20 pb-2 w-max hover:border-white transition-colors">
              View all news
            </button>
          </div>

          {/* Right: article cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <div key={i} className={`flex flex-col gap-6 cursor-pointer group ${a.className}`}>
                <div className="relative overflow-hidden aspect-[3/4]">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex flex-col gap-3">
                  <span
                    className="font-mono text-[9px] uppercase text-white/30 block tracking-[0.15em]"
                  >
                    {a.date}
                  </span>
                  <h3 className="text-xl font-medium leading-tight text-white group-hover:text-white/70 transition-colors">
                    {a.title}
                  </h3>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
