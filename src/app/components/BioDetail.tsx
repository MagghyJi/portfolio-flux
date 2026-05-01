import Image from "next/image";

export default function BioDetail() {
  return (
    <section className="bg-white overflow-hidden py-16 md:py-32 px-6 md:px-20">
      
      {/* 1. Desktop Version - BLINDATA */}
      <div className="hidden md:block max-w-[1440px] mx-auto relative min-h-[650px]">
        <div className="absolute top-0 left-0">
          <span className="font-mono text-[10px] uppercase text-black tracking-[0.2em]">
            [ ABOUT ]
          </span>
        </div>
        <div className="absolute top-8 right-[460px]">
          <span className="font-mono text-[10px] uppercase text-black tracking-[0.2em]">
            002
          </span>
        </div>
        <div className="absolute top-8 right-0 w-[436px] h-[614px] overflow-hidden grayscale">
          <Image
            src="/about-image.png"
            alt="Harvey Specter portrait"
            fill
            sizes="436px"
            className="object-cover object-top"
          />
        </div>
        <div className="absolute bottom-0 right-[496px] max-w-[440px]">
          <div className="relative p-6">
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

      {/* 2. Mobile Version - FIGMA STACK */}
      <div className="md:hidden flex flex-col gap-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[12px] text-black/60">002</span>
          <span className="font-mono text-[12px] uppercase text-black tracking-widest">
            [ ABOUT ]
          </span>
          
          <div className="relative p-10 mt-2">
            {/* L-Brackets for Mobile */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-black" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-black" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-black" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-black" />
            
            <p className="text-[15px] leading-relaxed text-black font-medium">
              Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
            </p>
          </div>
        </div>

        {/* Correct Image for Mobile */}
        <div className="w-full mt-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden grayscale">
            <Image
              src="/about-image.png"
              alt="Harvey Specter portrait"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
