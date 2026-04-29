export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-20 px-8 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col h-full relative">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12 relative">
          {/* CTA Area */}
          <div className="flex flex-col gap-5">
            <h2 className="text-[1.5rem] md:text-[1.8vw] leading-none tracking-tight italic font-light">
              HAVE A <span className="font-bold not-italic">PROJECT</span> IN MIND?
            </h2>
            <button className="w-fit px-6 py-2 border border-white/40 rounded-full text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
              Let's talk
            </button>
          </div>

          {/* Centered Social Links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 flex-col gap-2 items-center">
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors opacity-70">Facebook</a>
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors opacity-70">Instagram</a>
          </div>

          {/* Right Social Links */}
          <div className="flex flex-col gap-2 items-end ml-auto">
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors opacity-70">X.com</a>
            <a href="#" className="text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors opacity-70">Linkedin</a>
          </div>
        </div>

        {/* Mobile Socials */}
        <div className="flex md:hidden gap-8 mb-12">
            <a href="#" className="text-[10px] uppercase tracking-widest opacity-70">Facebook</a>
            <a href="#" className="text-[10px] uppercase tracking-widest opacity-70">Instagram</a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom Section: Logo + Legal Links (Touching bottom) */}
        <div className="relative flex flex-col items-end mt-auto">
          
          <div className="flex items-end w-full justify-between translate-y-6 md:translate-y-10">
            {/* Tag Rotated - Closer to Logo */}
            <div className="pb-8 md:pb-12">
              <span className="text-[8px] uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr] opacity-40">
                [ CODED BY ANTIGRAVITY ]
              </span>
            </div>

            {/* Massive Logo - Slightly larger and shifted left */}
            <h1 className="text-[17vw] leading-[0.75] font-bold tracking-tighter flex-1 -ml-2 md:ml-1 select-none text-center">
              H.Studio
            </h1>

            {/* Legal Links - Gap preserved */}
            <div className="flex gap-8 pb-8 md:pb-12 pr-2 whitespace-nowrap min-w-[200px] justify-end">
              <a href="#" className="text-[8px] uppercase tracking-widest border-b border-white pb-0.5 hover:opacity-60 transition-opacity">Licences</a>
              <a href="#" className="text-[8px] uppercase tracking-widest border-b border-white pb-0.5 hover:opacity-60 transition-opacity">Privacy Policy</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
