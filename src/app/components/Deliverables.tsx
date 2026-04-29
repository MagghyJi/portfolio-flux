import Image from "next/image";

const services = [
  {
    num: "( 1 )",
    name: "BRAND DISCOVERY",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "/brand-discovery-image.png",
  },
  {
    num: "( 2 )",
    name: "WEB DESIGN & DEV",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "/web-design-image.png",
  },
  {
    num: "( 3 )",
    name: "MARKETING",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "/marketing-image.png",
  },
  {
    num: "( 4 )",
    name: "PHOTOGRAPHY",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "/photography-image.png",
  },
];

export default function Deliverables() {
  return (
    <section id="services" className="bg-black text-white overflow-hidden py-32 px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/20 pb-12">
          <div className="flex flex-col gap-10">
            <span className="font-mono text-[10px] uppercase text-white/40 tracking-[0.2em]">
              [ SERVICES ]
            </span>
            <span className="text-[12vw] md:text-[7vw] font-extralight leading-none">
              [4]
            </span>
          </div>
          <h2
            className="text-[12vw] md:text-[7vw] font-extralight uppercase leading-none"
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
              className="border-b border-white/10 py-10 grid grid-cols-1 md:grid-cols-12 items-center gap-8 group cursor-pointer"
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
                  className="text-3xl md:text-[2.2vw] font-bold italic uppercase leading-none transition-all"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {s.name}
                </h3>
              </div>
              
              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-[13px] text-white/50 leading-relaxed max-w-[340px]">
                  {s.desc}
                </p>
              </div>
              
              {/* Image */}
              <div className="md:col-span-2 flex justify-end">
                <div className="relative w-full aspect-square md:w-[120px] md:h-[120px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src={s.img} 
                    alt={s.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
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
