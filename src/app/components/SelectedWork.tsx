import Image from "next/image";

const projects = [
  { 
    name: "SURFERS PARADISE", 
    cat: "PHOTOGRAPHY", 
    img: "/surfer-paradise-image.png",
    className: "col-span-1 row-span-2 aspect-[3/5]"
  },
  { 
    name: "AGENCY 976", 
    cat: "BRANDING", 
    img: "/agency-image.png",
    className: "col-span-1 row-span-1 aspect-square"
  },
  { 
    name: "CYBERPUNK CAFFE", 
    cat: "WEB DESIGN", 
    img: "/cyberpunk-image.png",
    className: "col-span-1 row-span-1 aspect-video md:aspect-[4/3] md:-mt-20"
  },
  { 
    name: "MINIMAL PLAYGROUND", 
    cat: "ART DIRECTION", 
    img: "/playground-image.png",
    className: "col-span-1 row-span-1 aspect-square md:-mt-40"
  },
];

export default function SelectedWork() {
  return (
    <section id="projects" className="bg-white overflow-hidden px-8 pt-24 pb-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <p
            className="text-[12vw] font-extralight uppercase leading-[0.85] text-black"
            style={{ letterSpacing: "-0.04em" }}
          >
            SELECTED
            <span className="inline-flex items-center gap-1 align-middle ml-6">
              <img src="/stroke-left.svg" alt="" className="h-[0.5em]" />
              <span
                className="font-mono text-[10px] md:text-[12px] uppercase text-black"
                style={{ letterSpacing: "0.15em" }}
              >
                WORK
              </span>
              <img src="/stroke-right.svg" alt="" className="h-[0.5em]" />
            </span>
          </p>
          <p
            className="text-[12vw] font-extralight uppercase leading-[0.85] text-black"
            style={{ paddingLeft: "20vw", letterSpacing: "-0.04em" }}
          >
            2021—2024
          </p>
        </div>

        {/* Asymmetrical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((p, i) => (
            <div key={i} className={`group cursor-pointer ${p.className}`}>
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span
                    className="font-mono text-[9px] uppercase text-white px-2 py-1 bg-black/20 backdrop-blur-md rounded-full"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {p.cat}
                  </span>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <img src="/arrow-top-right.svg" alt="" className="w-6 h-6 invert" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <h3
                  className="text-lg font-bold uppercase text-black"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {p.name}
                </h3>
                <div className="h-px bg-black/10 flex-1 mx-6" />
                <span className="font-mono text-[12px] text-black/40">
                  VIEW CASE
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <button className="group relative px-10 py-5 bg-black text-white rounded-full overflow-hidden transition-all hover:pr-14">
            <span className="relative z-10 font-bold uppercase text-sm tracking-widest">Explore all projects</span>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
              →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
