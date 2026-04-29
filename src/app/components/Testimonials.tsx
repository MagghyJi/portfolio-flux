import Image from "next/image";

const testimonials = [
  {
    name: "MARKO STOJKOVIĆ",
    text: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "/logo-1.svg",
    rotate: "-3deg",
    position: "top-[15%] left-[8%]",
    zIndex: "z-20", // In front
  },
  {
    name: "LUKAS WEBER",
    text: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "/logo-2.svg",
    rotate: "2deg",
    position: "top-[18%] right-[12%]",
    zIndex: "z-0", // Behind
  },
  {
    name: "SARAH JENKINS",
    text: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "/logo-3.svg",
    rotate: "1.5deg",
    position: "bottom-[12%] left-[12%]",
    zIndex: "z-20", // In front
  },
  {
    name: "SOFIA MARTÍNEZ",
    text: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "/logo-4.svg",
    rotate: "-2.5deg",
    position: "bottom-[15%] right-[8%]",
    zIndex: "z-20", // In front
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F9F9F9] py-48 px-12 relative overflow-hidden min-h-[900px] flex items-center justify-center">
      {/* Central Title - Mid Layer */}
      <h2 className="text-[12vw] md:text-[10vw] font-medium text-[#000000] leading-none z-10 tracking-tight">
        Testimonials
      </h2>

      {/* Floating Cards */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute ${t.position} ${t.zIndex} w-[280px] md:w-[320px] bg-white p-8 shadow-xl shadow-black/5 transition-transform hover:scale-105 hover:z-50 duration-500`}
            style={{ transform: `rotate(${t.rotate})` }}
          >
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
              <p className="text-[13px] leading-[1.6] text-[#000000] font-medium">
                {t.text}
              </p>
              
              {/* Author */}
              <span className="font-bold text-[11px] uppercase tracking-wider text-[#000000]">
                {t.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
