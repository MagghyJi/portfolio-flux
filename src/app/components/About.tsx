export default function About() {
  return (
    <section id="about" className="bg-white overflow-hidden py-24 md:py-32">
      {/* Divider + label */}
      <div className="flex items-center gap-6 px-8 mb-12">
        <div className="flex-1 h-px bg-black" />
        <span
          className="font-mono text-[10px] uppercase text-black whitespace-nowrap"
          style={{ letterSpacing: "0.1em" }}
        >
          [ 8+ YEARS IN INDUSTRY ]
        </span>
      </div>

      {/* Staircase heading */}
      <div className="flex flex-col gap-2 md:gap-0">
        {/* Line 1 */}
        <p
          className="px-8 text-[12vw] md:text-[8.5vw] font-extralight md:leading-[0.95] uppercase text-black"
          style={{ letterSpacing: "-0.025em" }}
        >
          A CREATIVE DIRECTOR /{" "}
          <span
            className="font-mono align-text-top text-black"
            style={{ fontSize: "10px", letterSpacing: "0.05em" }}
          >
            001
          </span>
        </p>

        {/* Line 2 */}
        <p
          className="px-8 md:pl-[14vw] text-[12vw] md:text-[8.5vw] font-extralight md:leading-[0.95] uppercase text-black"
          style={{ letterSpacing: "-0.025em" }}
        >
          PHOTOGRAPHER
        </p>

        {/* Line 3 — & in Playfair italic */}
        <p
          className="px-8 md:pl-[30vw] text-[12vw] md:text-[8.5vw] font-extralight md:leading-[0.95] uppercase text-black"
          style={{ letterSpacing: "-0.025em" }}
        >
          BORN{" "}
          <span className="font-playfair italic lowercase" style={{ letterSpacing: "normal" }}>
            &amp;
          </span>{" "}
          RAISED
        </p>

        {/* Line 4 */}
        <p
          className="px-8 text-[12vw] md:text-[8.5vw] font-extralight md:leading-[0.95] uppercase text-black"
          style={{ letterSpacing: "-0.025em" }}
        >
          ON THE SOUTH SIDE
        </p>

        {/* Line 5 — inline label */}
        <p
          className="px-8 md:pl-[30vw] text-[12vw] md:text-[8.5vw] font-extralight md:leading-[0.95] uppercase text-black"
          style={{ letterSpacing: "-0.025em" }}
        >
          OF CHICAGO.
          <span
            className="font-mono text-black align-middle hidden md:inline-block"
            style={{ fontSize: "10px", letterSpacing: "0.08em", marginLeft: "1.5rem" }}
          >
            [ CREATIVE FREELANCER ]
          </span>
        </p>
      </div>
    </section>
  );
}
