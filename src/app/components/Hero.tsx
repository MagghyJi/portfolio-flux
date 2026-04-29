import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-black">
      <Image
        src="/hero-image.png"
        alt="Harvey Specter"
        fill
        priority
        className="object-cover object-center opacity-90"
      />

      {/* Bottom gradient/blur */}
      <div
        className="absolute inset-x-0 bottom-0 h-[25%] z-10"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
        }}
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-center px-8">
        {/* [ HELLO I'M ] */}
        <div className="absolute top-[25%] md:top-[30%] left-8">
          <span
            className="font-mono text-[10px] md:text-[12px] text-white uppercase"
            style={{ letterSpacing: "0.2em" }}
          >
            [ HELLO I&apos;M ]
          </span>
        </div>

        {/* Harvey Specter */}
        <div className="mt-[-5vw]">
          <h1
            className="w-full text-center font-medium text-white leading-[0.9]"
            style={{ 
              fontSize: "clamp(4rem, 14vw, 14rem)", 
              letterSpacing: "-0.06em", 
              whiteSpace: "nowrap" 
            }}
          >
            Harvey Specter
          </h1>
        </div>

        {/* Description — Editorial Mix */}
        <div className="absolute bottom-12 right-8 max-w-[340px] text-left">
          <div className="h-px bg-white/30 mb-6" />
          <p
            className="text-sm md:text-base font-bold italic uppercase leading-[1.1] text-white"
            style={{ letterSpacing: "-0.04em" }}
          >
            H.STUDIO{" "}
            <span className="font-playfair font-normal normal-case italic">is a</span>{" "}
            FULL-SERVICE CREATIVE STUDIO CREATING BEAUTIFUL DIGITAL EXPERIENCES{" "}
            <span className="font-playfair font-normal normal-case italic">and</span>{" "}
            PRODUCTS.{" "}
            <span className="font-playfair font-normal normal-case italic">We are an</span>{" "}
            AWARD WINNING DESIGN{" "}
            <span className="font-playfair font-normal normal-case italic">and</span>{" "}
            ART GROUP SPECIALIZING{" "}
            <span className="font-playfair font-normal normal-case italic">in</span>{" "}
            BRANDING, WEB DESIGN{" "}
            <span className="font-playfair font-normal normal-case italic">and</span>{" "}
            ENGINEERING.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-white text-black text-[10px] font-bold uppercase px-8 py-4 rounded-full tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              Let&apos;s talk
            </a>
            <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">[ SCROLL ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
