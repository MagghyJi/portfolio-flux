import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/hero-image.png"
        alt="Harvey Specter"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Bottom blur — very subtle */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          top: "85%",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          background: "rgba(217, 217, 217, 0.01)",
        }}
      />

      <div className="absolute inset-0">
        {/* [ HELLO I'M ] */}
        <span
          className="absolute top-[30%] left-8 font-mono text-sm text-white uppercase mix-blend-overlay"
          style={{ letterSpacing: "0.1em" }}
        >
          [ HELLO I&apos;M ]
        </span>

        {/* Harvey Specter */}
        <h1
          className="absolute top-[34%] w-full text-center font-medium text-white leading-[1.1] mix-blend-overlay"
          style={{ fontSize: "13.75vw", letterSpacing: "-0.07em", whiteSpace: "nowrap" }}
        >
          Harvey Specter
        </h1>

        {/* Description — Inter bold italic + Playfair for conjunctions */}
        <div className="absolute bottom-12 right-8 max-w-[294px] px-5 py-4 text-left">
          <p
            className="text-sm font-bold italic uppercase leading-[1.1] text-black"
            style={{ letterSpacing: "-0.04em" }}
          >
            H.STUDIO{" "}
            <span className="font-playfair font-normal">IS A</span>{" "}
            FULL-SERVICE CREATIVE STUDIO CREATING BEAUTIFUL DIGITAL EXPERIENCES{" "}
            <span className="font-playfair font-normal">AND</span>{" "}
            PRODUCTS.{" "}
            <span className="font-playfair font-normal">WE ARE AN</span>{" "}
            AWARD WINNING DESIGN{" "}
            <span className="font-playfair font-normal">AND</span>{" "}
            ART GROUP SPECIALIZING{" "}
            <span className="font-playfair font-normal">IN</span>{" "}
            BRANDING, WEB DESIGN{" "}
            <span className="font-playfair font-normal">AND</span>{" "}
            ENGINEERING.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full tracking-[-0.04em] hover:opacity-80 transition-opacity"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
