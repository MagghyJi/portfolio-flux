export default function About() {
  return (
    <section id="about" className="bg-white overflow-hidden py-16 md:py-32">
      {/* 1. Desktop Version (Staircase) - BLINDATA */}
      <div className="hidden md:block">
        <div className="flex items-center gap-6 px-8 mb-12">
          <div className="flex-1 h-px bg-black" />
          <span className="font-mono text-[10px] uppercase text-black whitespace-nowrap tracking-[0.1em]">
            [ 8+ YEARS IN INDUSTRY ]
          </span>
        </div>

        <div className="flex flex-col">
          <p className="px-8 text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]">
            A CREATIVE DIRECTOR / <span className="font-mono text-[10px] align-top">[ 001 ]</span>
          </p>
          <p className="px-8 pl-[14vw] text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]">
            PHOTOGRAPHER
          </p>
          <p className="px-8 pl-[30vw] text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]">
            BORN <span className="font-playfair italic lowercase">&amp;</span> RAISED
          </p>
          <p className="px-8 text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]">
            ON THE SOUTH SIDE
          </p>
          <p className="px-8 pl-[30vw] text-[8.5vw] font-extralight leading-[0.95] uppercase text-black tracking-[-0.025em]">
            OF CHICAGO. <span className="font-mono text-[10px] ml-6">[ CREATIVE FREELANCER ]</span>
          </p>
        </div>
      </div>

      {/* 2. Mobile Version (Stacked) - Figma Design */}
      <div className="md:hidden px-6">
        <div className="border-t border-black pt-4 mb-10 flex justify-end">
          <span className="font-mono text-[10px] uppercase text-black tracking-widest">
            [ 8+ YEARS IN INDUSTRY ]
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-[12px] mb-4 text-black/60">001</span>
          <h2 className="text-[10vw] font-light leading-[1.1] uppercase text-black">
            A CREATIVE DIRECTOR / PHOTOGRAPHER BORN <span className="font-playfair italic lowercase">&amp;</span> RAISED ON THE SOUTH SIDE OF CHICAGO.
          </h2>
          <span className="font-mono text-[10px] mt-8 uppercase text-black tracking-widest">
            [ CREATIVE FREELANCER ]
          </span>
        </div>
      </div>

    </section>
  );
}
