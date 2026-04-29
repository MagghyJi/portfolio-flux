import Image from "next/image";

const projects = [
  {
    title: "SURFERS PARADISE",
    tags: ["Social Media", "Photography"],
    img: "/surfer-paradise-image.png",
  },
  {
    title: "AGENCY 976",
    tags: ["Social Media", "Photography"],
    img: "/agency-image.png",
  },
  {
    title: "CYBERPUNK CAFFE",
    tags: ["Social Media", "Photography"],
    img: "/cyberpunk-image.png",
  },
  {
    title: "MINIMAL PLAYGROUND",
    tags: ["Social Media", "Photography"],
    img: "/playground-image.png",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-white py-32 px-12 md:px-20 relative text-[#000000]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="mb-24 relative">
          <div className="flex items-start gap-4">
            <h2 className="text-[10vw] md:text-[7vw] font-light leading-[0.85] uppercase tracking-tighter text-[#000000]">
              SELECTED<br />WORK
            </h2>
            <span className="font-mono text-[11px] mt-4 text-[#000000]/40">004</span>
          </div>
          
          {/* Portfolio Tag - Rotated 90° and aligned to right */}
          <div className="absolute right-0 top-0 hidden md:block">
            <span className="font-mono text-[10px] uppercase text-[#000000]/40 tracking-[0.3em] rotate-90 origin-top-right">
              [ PORTFOLIO ]
            </span>
          </div>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-32">
              <ProjectCard project={projects[0]} />
              <ProjectCard project={projects[2]} />
            </div>

            {/* CTA Box - Moved UP and cleaned */}
            <div className="relative p-10 mt-6 max-w-[500px]">
               <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#000000]" />
               <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#000000]" />
               <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#000000]" />
               <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#000000]" />
               <div className="flex flex-col gap-8">
                 <p className="text-[15px] font-medium leading-[1.4] max-w-[420px] text-[#000000]">
                   Discover how my creativity transforms ideas into impactful digital<br className="hidden md:block" /> experiences — schedule a call with me to get started.
                 </p>
                 <button className="bg-[#000000] text-white text-[10px] uppercase py-3 px-8 rounded-full w-fit hover:scale-105 transition-transform font-bold tracking-widest">
                   Let's talk
                 </button>
               </div>
            </div>
          </div>

          {/* Right Column - Offset creates the gap */}
          <div className="flex flex-col gap-32 md:pt-64">
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group cursor-pointer flex flex-col gap-8 text-[#000000]">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Tags overlay */}
        <div className="absolute bottom-8 left-8 flex gap-3">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-white/10 backdrop-blur-md text-white text-[10px] uppercase py-1.5 px-4 rounded-full border border-white/20 font-medium tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-[#000000]/10 pb-6">
        <h3 className="text-3xl md:text-[2.5vw] font-black uppercase tracking-tight leading-none text-[#000000]">
          {project.title}
        </h3>
        <div className="relative w-8 h-8 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
          <Image
            src="/arrow-top-right.svg"
            alt="View project"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
