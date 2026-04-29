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
    <section className="relative w-full h-screen bg-[#DDE2E5] overflow-hidden flex flex-col items-center isolation-auto">
      
      {/* Background Image - Filling from the very top */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png"
          alt="Harvey Specter"
          fill
          priority
          className="object-cover object-top scale-105" // Removed translate-y to cover the top
        />
      </div>

      {/* Hero Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col items-center pointer-events-none">
        
        {/* Navbar */}
        <nav className="w-full max-w-[1440px] px-12 py-10 flex justify-between items-center pointer-events-auto">
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

        {/* Title Group - Lowered even more */}
        <div className="w-full max-w-[1440px] px-12 mt-[38vh] flex flex-col items-start">
          <div className="px-4 mb-6">
            <span className="font-mono text-[14px] text-white uppercase tracking-widest mix-blend-overlay opacity-80">
              [ Hello i’m ]
            </span>
          </div>
          
          <h1 
            className="w-full text-center text-white font-medium whitespace-nowrap mix-blend-overlay uppercase tracking-[-0.07em]"
            style={{ 
              fontSize: "9.5vw", 
              lineHeight: "0.8"
            }}
          >
            Harvey Specter
          </h1>
        </div>

        {/* Bottom Description - Touching the bottom margin, no separator */}
        <div className="absolute bottom-6 right-12 md:right-24 max-w-[320px] pointer-events-auto text-right md:text-left">
          <p className="text-[14px] font-bold italic text-black/90 uppercase leading-[1.2] tracking-tight">
            H.STUDIO <span className="font-normal normal-case italic">is a</span> FULL-SERVICE CREATIVE STUDIO CREATING BEAUTIFUL DIGITAL EXPERIENCES <span className="font-normal normal-case italic">and</span> PRODUCTS. WE ARE AN AWARD WINNING DESING AND ART GROUP SPECIALIZING IN BRANDING, WEB DESIGN AND ENGINEERING.
          </p>
          <div className="mt-4">
            <a href="#contact" className="bg-black text-white text-[14px] font-medium px-12 py-4 rounded-full inline-block">
              Let's talk
            </a>
          </div>
        </div>

      </div>

      {/* Subtle blur at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[8%] z-20 backdrop-blur-[4px] pointer-events-none"
           style={{ maskImage: "linear-gradient(to top, black, transparent)", WebkitMaskImage: "linear-gradient(to top, black, transparent)" }} />

    </section>
  );
}
