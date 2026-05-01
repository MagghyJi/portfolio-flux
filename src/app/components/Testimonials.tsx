import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Fetching testimonials from Sanity
async function getTestimonials() {
  const query = `*[_type == "testimonial"] | order(order asc) {
    author,
    role,
    text,
    logo
  }`;
  return await client.fetch(query);
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  // Desktop layout helper
  const getLayout = (index: number) => {
    const layouts = [
      { rotate: "-3deg", position: "top-[15%] left-[8%]", zIndex: "z-20" },
      { rotate: "2deg", position: "top-[18%] right-[12%]", zIndex: "z-0" },
      { rotate: "1.5deg", position: "bottom-[12%] left-[12%]", zIndex: "z-20" },
      { rotate: "-2.5deg", position: "bottom-[15%] right-[8%]", zIndex: "z-20" },
    ];
    return layouts[index % layouts.length];
  };

  return (
    <section className="bg-[#F9F9F9] py-24 md:py-48 relative overflow-hidden flex flex-col md:items-center md:justify-center min-h-fit md:min-h-[900px]">
      
      {/* 1. Header */}
      <div className="px-6 md:px-0 z-10 mb-12 md:mb-0">
        <h2 className="text-[12vw] md:text-[10vw] font-medium text-black leading-none tracking-tight">
          Testimonials
        </h2>
      </div>

      {/* 2. Desktop Version - Floating Cards */}
      <div className="hidden md:block absolute inset-0 max-w-[1440px] mx-auto pointer-events-none">
        {testimonials.map((t: any, i: number) => {
          const layout = getLayout(i);
          return (
            <div
              key={i}
              className={`absolute pointer-events-auto ${layout.position} ${layout.zIndex} w-[320px] bg-white p-8 shadow-xl shadow-black/5 transition-transform hover:scale-105 hover:z-50 duration-500`}
              style={{ transform: `rotate(${layout.rotate})` }}
            >
              <TestimonialCard t={t} />
            </div>
          );
        })}
      </div>

      {/* 3. Mobile Version - Horizontal Scroll */}
      <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-6 px-6 pb-12 scrollbar-hide"
           style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        {testimonials.map((t: any, i: number) => {
          const layout = getLayout(i);
          return (
            <div
              key={i}
              className="snap-center shrink-0 w-[280px] bg-white p-8 shadow-lg shadow-black/5"
              style={{ transform: `rotate(${layout.rotate})` }}
            >
              <TestimonialCard t={t} />
            </div>
          );
        })}
        <div className="shrink-0 w-6" />
      </div>

    </section>
  );
}

function TestimonialCard({ t }: { t: any }) {
  const logoUrl = t.logo ? urlFor(t.logo).url() : null;

  return (
    <div className="flex flex-col gap-6">
      {/* Logo */}
      {logoUrl && (
        <div className="relative h-6 w-32 grayscale opacity-80">
          <Image
            src={logoUrl}
            alt="Partner logo"
            fill
            className="object-contain object-left"
          />
        </div>
      )}
      
      {/* Content */}
      <p className="text-[13px] leading-[1.6] text-black font-medium">
        {t.text}
      </p>
      
      {/* Author */}
      <div className="flex flex-col">
        <span className="font-bold text-[11px] uppercase tracking-wider text-black">
          {t.author}
        </span>
        {t.role && (
          <span className="text-[9px] uppercase text-black/50 font-mono">
            {t.role}
          </span>
        )}
      </div>
    </div>
  );
}
