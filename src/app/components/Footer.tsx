import RevealButton from "./RevealButton";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-0 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto h-full flex flex-col">
        
        {/* 1. Mobile Version Layout (Figma Design) */}
        <div className="flex md:hidden flex-col gap-10">
          {/* Header */}
          <h2 className="text-[28px] italic font-light tracking-tight uppercase leading-none">
            HAVE A <span className="font-bold not-italic">PROJECT</span> IN MIND?
          </h2>

          {/* CTA Button */}
          <RevealButton href="#contact" whiteBorder className="w-fit px-8 py-3 text-[14px]">
            Let's talk
          </RevealButton>

          {/* Vertical Social Links */}
          <div className="flex flex-col gap-5 mt-4">
            {["FACEBOOK", "INSTAGRAM", "X.COM", "LINKEDIN"].map((social) => (
              <a key={social} href="#" className="text-[24px] font-medium tracking-tight hover:opacity-60 transition-opacity">
                {social}
              </a>
            ))}
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-white/20 mt-4" />

          {/* Legal Links */}
          <div className="flex justify-center gap-12 text-[12px] uppercase tracking-widest mt-4">
            <a href="#" className="underline underline-offset-4 decoration-white/40">Licences</a>
            <a href="#" className="underline underline-offset-4 decoration-white/40">Privacy Policy</a>
          </div>

          {/* Signature & Logo Section */}
          <div className="flex flex-col gap-4 mt-12 mb-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              [ CODED BY ANTIGRAVITY ]
            </span>
            <div className="w-full">
              <h1 className="text-[25vw] leading-[0.8] font-bold tracking-[-0.06em] select-none">
                H.Studio
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Desktop Version Layout (BLINDATA + FIX) */}
        <div className="hidden md:flex flex-col gap-24">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-[2.5vw] leading-[1.1] tracking-tight font-light uppercase italic">
                HAVE A <span className="font-bold not-italic">PROJECT</span><br /> IN MIND?
              </h2>
              <RevealButton href="#contact" whiteBorder className="w-fit px-8 py-3 text-[10px] uppercase tracking-widest font-bold">
                Let's talk
              </RevealButton>
            </div>

            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">[ SOCIAL ]</span>
                <a href="#" className="text-[11px] uppercase tracking-widest hover:text-white/60 transition-colors">Facebook</a>
                <a href="#" className="text-[11px] uppercase tracking-widest hover:text-white/60 transition-colors">Instagram</a>
                <a href="#" className="text-[11px] uppercase tracking-widest hover:text-white/60 transition-colors">X.com</a>
                <a href="#" className="text-[11px] uppercase tracking-widest hover:text-white/60 transition-colors">Linkedin</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 pb-4">
            <div className="w-full h-px bg-white/10" />
            <div className="flex justify-between items-end relative">
              <div className="pb-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  [ CODED BY ANTIGRAVITY ]
                </span>
              </div>
              <div className="flex gap-8 pb-2">
                <a href="#" className="text-[9px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity border-b border-transparent hover:border-white pb-0.5">Licences</a>
                <a href="#" className="text-[9px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity border-b border-transparent hover:border-white pb-0.5">Privacy Policy</a>
              </div>
            </div>
            <h1 className="text-[18vw] leading-[0.75] font-black tracking-tighter text-center select-none opacity-90 -mb-4">
              H.Studio
            </h1>
          </div>
        </div>

      </div>
    </footer>
  );
}
