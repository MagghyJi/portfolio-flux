import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import RevealButton from "./RevealButton";

interface SelectedWorkProps {
  hideHeader?: boolean;
}

// Fetching projects from Sanity
async function getProjects() {
  const query = `*[_type == "project"] | order(order asc) {
    title,
    tags,
    image,
    "slug": slug.current
  }`;
  return await client.fetch(query);
}

export default async function SelectedWork({ hideHeader = false }: SelectedWorkProps) {
  const projects = await getProjects();

  // Split projects into two columns for the staggered grid
  const leftColumnProjects = projects.filter((_: any, i: number) => i % 2 === 0);
  const rightColumnProjects = projects.filter((_: any, i: number) => i % 2 !== 0);

  return (
    <section id="work" className="bg-white py-24 md:py-32 px-6 md:px-12 relative text-black">
      <div className="max-w-[1440px] mx-auto">
        
        {/* 1. Header Section - Only show if hideHeader is false */}
        {!hideHeader && (
          <div className="mb-16 md:mb-24 relative w-full">
            <div className="mb-6">
              <span className="font-mono text-[10px] md:text-[12px] uppercase text-black/40 tracking-[0.2em]">
                [ PORTFOLIO ]
              </span>
            </div>
            
            <div className="flex justify-between items-start">
              <h2 className="text-[12vw] md:text-[7vw] font-light leading-[0.85] uppercase tracking-tighter">
                SELECTED<br />WORK
              </h2>
              <span className="font-mono text-[12px] md:text-[14px] mt-2 text-black/40">004</span>
            </div>
          </div>
        )}

        {/* 2. Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-x-24 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-20 md:gap-32">
            {leftColumnProjects.map((project: any) => (
              <ProjectCard key={project.title} project={project} />
            ))}
            
            {/* CTA Box - Desktop Position */}
            <div className="hidden md:block">
              <CTABox />
            </div>
          </div>

          {/* Right Column - Offset creates the gap on desktop */}
          <div className="flex flex-col gap-20 md:gap-32 md:pt-64">
            {rightColumnProjects.map((project: any) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* 3. Mobile CTA Box - Bottom Position */}
        <div className="md:hidden mt-20">
          <CTABox />
        </div>

      </div>
    </section>
  );
}

function CTABox() {
  return (
    <div className="relative p-10 md:p-16 w-full">
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-black" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-black" />
      
      <div className="flex flex-col gap-10">
        <p className="text-[18px] md:text-[22px] font-medium leading-[1.3] text-black">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <RevealButton href="#contact" className="text-[12px] py-4 px-12 w-fit font-bold tracking-widest uppercase">
          Let's talk
        </RevealButton>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  const imageUrl = project.image ? urlFor(project.image).url() : "/surfer-paradise-image.png";

  return (
    <div className="group cursor-pointer flex flex-col gap-6 md:gap-8 text-black">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-3 flex-wrap">
          {project.tags?.map((tag: string) => (
            <span key={tag} className="bg-white/10 backdrop-blur-md text-white text-[10px] uppercase py-1.5 px-4 rounded-full border border-white/20 font-medium tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-black/10 pb-6">
        <h3 className="text-2xl md:text-[2.5vw] font-black uppercase tracking-tight leading-none">
          {project.title}
        </h3>
        <div className="relative w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
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
