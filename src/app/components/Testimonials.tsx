import Image from "next/image";

const testimonials = [
  {
    name: "MARKO STOJKOVIĆ",
    text: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "/logo-1.svg",
    rotate: "-3deg",
    position: "top-[15%] left-[8%]",
    zIndex: "z-20",
  },
  {
    name: "LUKAS WEBER",
    text: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "/logo-2.svg",
    rotate: "2deg",
    position: "top-[18%] right-[12%]",
    zIndex: "z-0",
  },
  {
    name: "SARAH JENKINS",
    text: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "/logo-3.svg",
    rotate: "1.5deg",
    position: "bottom-[12%] left-[12%]",
    zIndex: "z-20",
  },
  {
    name: "SOFIA MARTÍNEZ",
    text: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "/logo-4.svg",
    rotate: "-2.5deg",
    position: "bottom-[15%] right-[8%]",
    zIndex: "z-20",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F9F9F9] py-24 md:py-48 relative overflow-hidden flex flex-col md:items-center md:justify-center min-h-fit md:min-h-[900px]">
      
      {/* 1. Header - Centered on desktop, Left-aligned on mobile */}
      <div className="px-6 md:px-0 z-10 mb-12 md:mb-0">
        <h2 className="text-[12vw] md:text-[10vw] font-medium text-black leading-none tracking-tight">
          Testimonials
        </h2>
      </div>

      {/* 2. Desktop Version - Floating Cards (BLINDATA) */}
      <div className="hidden md:block absolute inset-0 max-w-[1440px] mx-auto pointer-events-none">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute pointer-events-auto ${t.position} ${t.zIndex} w-[320px] bg-white p-8 shadow-xl shadow-black/5 transition-transform hover:scale-105 hover:z-50 duration-500`}
            style={{ transform: `rotate(${t.rotate})` }}
          >
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      {/* 3. Mobile Version - Horizontal Scroll (Figma Design) */}
      <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-6 px-6 pb-12 scrollbar-hide"
           style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar { display: none; }` }} />
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[280px] bg-white p-8 shadow-lg shadow-black/5"
            style={{ transform: `rotate(${t.rotate})` }}
          >
            <TestimonialCard t={t} />
          </div>
        ))}
        {/* Extra spacing at the end */}
        <div className="shrink-0 w-6" />
      </div>

    </section>
  );
}

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Logo */}
      <div className="relative h-6 w-32 grayscale opacity-80">
        <Image
          src={t.logo}
          alt="Partner logo"
          fill
          className="object-contain object-left"
        />
      </div>
      
      {/* Content */}
      <p className="text-[13px] leading-[1.6] text-black font-medium">
        {t.text}
      </p>
      
      {/* Author */}
      <span className="font-bold text-[11px] uppercase tracking-wider text-black">
        {t.name}
      </span>
    </div>
  );
}
