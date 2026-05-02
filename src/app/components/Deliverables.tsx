import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Fetching services from Sanity
async function getServices() {
  const query = `*[_type == "service"] | order(order asc) {
    number,
    name,
    description,
    image
  }`;
  return await client.fetch(query);
}

export default async function Deliverables() {
  const services = await getServices();

  return (
    <section id="services" className="bg-black text-white overflow-hidden py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-white/20 pb-12">
          <div className="flex flex-col gap-10">
            <span className="font-mono text-[10px] uppercase text-white/40 tracking-[0.2em]">
              [ SERVICES ]
            </span>
            <span className="text-[12vw] md:text-[7vw] font-extralight leading-none">
              [{services.length}]
            </span>
          </div>
          <h2
            className="text-[12vw] md:text-[7vw] font-extralight uppercase leading-none mt-8 md:mt-0"
            style={{ letterSpacing: "-0.04em" }}
          >
            DELIVERABLES
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {services.map((s: any, i: number) => {
            const imageUrl = s.image ? urlFor(s.image).url() : "/brand-discovery-image.png";
            return (
              <div
                key={i}
                className="border-b border-white/10 py-12 md:py-10 grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-6 md:gap-8 group cursor-pointer"
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase">
                    {s.number}
                  </span>
                </div>
                
                {/* Title */}
                <div className="md:col-span-5">
                  <h3
                    className="text-4xl md:text-[2.2vw] font-bold italic uppercase leading-none opacity-100 group-hover:opacity-100 group-hover:translate-x-8 transition-all duration-500 ease-out"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {s.name}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-[14px] md:text-[13px] text-white/40 group-hover:text-white/80 leading-relaxed max-w-[340px] transition-colors duration-500">
                    {s.description}
                  </p>
                </div>
                
                {/* Image */}
                <div className="md:col-span-2 flex justify-start md:justify-end mt-4 md:mt-0">
                  <div className="relative w-[140px] h-[140px] md:w-[120px] md:h-[120px] overflow-hidden grayscale md:grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5 group-hover:border-white/20">
                    <Image 
                      src={imageUrl} 
                      alt={s.name} 
                      fill 
                      sizes="(max-width: 768px) 140px, 120px"
                      className="object-cover transition-transform duration-700 scale-105 group-hover:scale-125" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
