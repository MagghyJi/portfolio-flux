const socials = [
  { name: "FACEBOOK", href: "#" },
  { name: "TWITTER", href: "#" },
  { name: "BEHANCE", href: "#" },
  { name: "INSTAGRAM", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden py-24 md:pt-32 md:pb-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top area */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-32">
          <div className="max-w-md">
            <h2
              className="text-[10vw] md:text-[4vw] font-extralight uppercase leading-none text-white mb-8"
              style={{ letterSpacing: "-0.04em" }}
            >
              HAVE A PROJECT IN MIND?
            </h2>
            <a 
              href="mailto:hello@hstudio.design" 
              className="text-2xl md:text-3xl font-playfair italic hover:text-white/60 transition-colors"
            >
              hello@hstudio.design
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="font-mono text-[10px] uppercase text-white/40 hover:text-white transition-colors"
                style={{ letterSpacing: "0.2em" }}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Massive H.Studio */}
        <div className="mb-20">
          <p
            className="font-bold leading-[0.75] text-white text-center md:text-left"
            style={{ fontSize: "clamp(4rem, 24vw, 24rem)", letterSpacing: "-0.06em" }}
          >
            H.Studio
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-4">
          <p
            className="font-mono text-[10px] uppercase text-white/30"
            style={{ letterSpacing: "0.1em" }}
          >
            © 2024 H.STUDIO — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8">
             <span className="font-mono text-[10px] uppercase text-white/30">[ LOCAL TIME 14:32 PM ]</span>
             <span className="font-mono text-[10px] uppercase text-white/30">[ CHICAGO, IL ]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
