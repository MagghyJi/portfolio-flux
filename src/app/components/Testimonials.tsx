const testimonials = [
  {
    quote:
      "A strategic partner who understands both the creative and business side of design. Delivered results that exceeded all expectations.",
    author: "Jordan Malik",
    role: "CEO, Arclight Studio",
    rotation: "-2deg",
    offset: "0px",
  },
  {
    quote:
      "Professional, creative, and deeply knowledgeable. Their attention to detail and commitment to quality is second to none.",
    author: "Sara Okonkwo",
    role: "Creative Director, Nova Agency",
    rotation: "1deg",
    offset: "40px",
  },
  {
    quote:
      "An incredible designer who brought our vision to life. The work speaks for itself — truly outstanding and delivered ahead of schedule.",
    author: "Luca Feretti",
    role: "Founder, Minimal Studio",
    rotation: "-1.5deg",
    offset: "-20px",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5F5F5] overflow-hidden px-8 pt-24 pb-32">
      <div className="max-w-6xl mx-auto relative">
        {/* Large heading */}
        <h2
          className="font-playfair italic leading-[1.0] text-black mb-20 text-center"
          style={{ fontSize: "12vw", letterSpacing: "-0.03em" }}
        >
          Testimonials
        </h2>

        {/* Scattered Cards */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative min-h-[400px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] max-w-[320px] flex flex-col justify-between transition-transform hover:scale-105 duration-500"
              style={{
                transform: `rotate(${t.rotation}) translateY(${t.offset})`,
                zIndex: i,
              }}
            >
              <p className="text-sm leading-[1.6] text-black/90 mb-10 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-black tracking-[-0.01em]">
                  {t.author}
                </p>
                <p
                  className="font-mono text-[9px] text-black/40 uppercase mt-1"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
