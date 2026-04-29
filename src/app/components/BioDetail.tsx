import Image from "next/image";

export default function BioDetail() {
  return (
    <section className="bg-white overflow-hidden py-32 px-12 md:px-20">
      <div className="max-w-[1440px] mx-auto relative min-h-[650px]">
        {/* [ ABOUT ] Tag - Far Left */}
        <div className="absolute top-0 left-0">
          <span className="font-mono text-[10px] uppercase text-black tracking-[0.2em]">
            [ ABOUT ]
          </span>
        </div>

        {/* 002 Tag - Left of Image */}
        <div className="absolute top-8 right-[460px]">
          <span className="font-mono text-[10px] uppercase text-black tracking-[0.2em]">
            002
          </span>
        </div>

        {/* Right Column - Image 436x614 - Far Right */}
        <div className="absolute top-8 right-0 w-[436px] h-[614px] overflow-hidden grayscale">
          <Image
            src="/about-image.png"
            alt="Harvey Specter portrait"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Text Block - Aligned to Bottom of Image */}
        <div className="absolute bottom-0 right-[496px] max-w-[440px]">
          <div className="relative p-6">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black" />
            
            <p className="text-[13px] leading-[1.65] text-black font-medium">
              Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. 
              Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
