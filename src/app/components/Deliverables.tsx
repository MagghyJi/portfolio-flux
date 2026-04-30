import Image from "next/image";

const services = [
  {
    num: "( 1 )",
    name: "BRAND DISCOVERY",
    desc: "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    img: "/brand-discovery-image.png",
  },
  {
    num: "( 2 )",
    name: "WEB DESIGN & DEV",
    desc: "We build high-end digital experiences that connect with people. From research to launch, we handle every step of the process to ensure your brand stands out in the digital landscape.",
    img: "/web-design-image.png",
  },
  {
    num: "( 3 )",
    name: "MARKETING",
    desc: "Strategic marketing that drives growth and engagement. We help you tell your story and reach your audience through curated content and targeted campaigns.",
    img: "/marketing-image.png",
  },
  {
    num: "( 4 )",
    name: "PHOTOGRAPHY",
    desc: "Visual storytelling through high-end photography. We capture the essence of your brand through intentional art direction and professional execution.",
    img: "/photography-image.png",
  },
];

export default function Deliverables() {
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
              [4]
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
          {services.map((s, i) => (
            <div
              key={i}
              className="border-b border-white/10 py-12 md:py-10 grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-6 md:gap-8 group cursor-pointer"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase">
                  {s.num}
                </span>
              </div>
              
              {/* Title */}
              <div className="md:col-span-5">
                <h3
                  className="text-4xl md:text-[2.2vw] font-bold italic uppercase leading-none transition-all"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {s.name}
                </h3>
              </div>
              
              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-[14px] md:text-[13px] text-white/60 leading-relaxed max-w-[340px]">
                  {s.desc}
                </p>
              </div>
              
              {/* Image - Color and Left aligned on mobile, Grayscale and Right aligned on desktop */}
              <div className="md:col-span-2 flex justify-start md:justify-end mt-4 md:mt-0">
                <div className="relative w-[140px] h-[140px] md:w-[120px] md:h-[120px] overflow-hidden grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src={s.img} 
                    alt={s.name} 
                    fill 
                    sizes="(max-width: 768px) 140px, 120px"
                    className="object-cover transition-transform duration-700 md:group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
