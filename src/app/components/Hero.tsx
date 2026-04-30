import Image from "next/image";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center isolation-auto">
      
      {/* 1. Base Image - Still z-0 */}
      <img
        src="/hero-image-right-size.png"
        alt="Harvey Specter"
        className="absolute inset-0 w-full h-full object-cover object-top scale-105 z-0"
      />

      {/* 2. Content Layer: We use two separate relative containers to manage flow + blending */}
      
      {/* Navbar (Always on top) */}
      <nav className="relative w-full max-w-[1440px] px-12 py-10 flex justify-between items-center z-30 pointer-events-auto">
        <a href="#" className="text-[17px] font-bold text-black uppercase tracking-tight">
          H.Studio
        </a>
        <ul className="hidden md:flex items-center gap-14">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-[16px] font-semibold text-black hover:opacity-50 transition-opacity">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="bg-black text-white text-[14px] font-medium px-9 py-3.5 rounded-full">
          Let's talk
        </a>
      </nav>

      {/* Title Group - Relative WITHOUT high z-index to allow blending with img (z-0) */}
      <div className="relative w-full max-w-[1440px] px-12 mt-[36vh] flex flex-col items-start pointer-events-none">
        <div className="px-4 mb-4">
          <span className="font-mono text-[14px] text-white uppercase tracking-widest mix-blend-overlay">
            [ Hello i’m ]
          </span>
        </div>
        <h1 
          className="w-full text-white font-medium whitespace-nowrap uppercase tracking-[-0.05em] text-center mix-blend-overlay"
          style={{ 
            fontSize: "8.5vw", 
            lineHeight: "0.8"
          }}
        >
          Harvey Specter
        </h1>
      </div>

      {/* Description Block - Relative z-20 (Sharp, in front of blur) with EXACT 32px GAP (mt-8) */}
      <div className="relative w-full max-w-[1440px] px-12 mt-8 flex justify-end z-20 pointer-events-auto pb-24">
        <div className="max-w-[320px]">
          <p className="text-[14px] font-bold italic text-black/90 uppercase leading-[1.15] tracking-tight text-right md:text-left">
            H.STUDIO <span className="font-normal normal-case italic">is a</span> FULL-SERVICE CREATIVE STUDIO CREATING BEAUTIFUL DIGITAL EXPERIENCES <span className="font-normal normal-case italic">and</span> PRODUCTS. WE ARE AN AWARD WINNING DESING AND ART GROUP SPECIALIZING IN BRANDING, WEB DESIGN AND ENGINEERING.
          </p>
          <div className="mt-8 flex justify-end md:justify-start">
            <a href="#contact" className="bg-black text-white text-[14px] font-medium px-12 py-4 rounded-full inline-block shadow-lg">
              Let's talk
            </a>
          </div>
        </div>
      </div>

      {/* 3. Blur Layer (z-10) - Sits between the image and the description */}
      <div className="absolute inset-x-0 bottom-0 h-[15%] pointer-events-none backdrop-blur-[6px] z-10"
           style={{ 
             maskImage: "linear-gradient(to top, black, transparent)", 
             WebkitMaskImage: "linear-gradient(to top, black, transparent)" 
           }} 
      />

    </section>
  );
}
