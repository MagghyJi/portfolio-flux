export default function About() {
  return (
    <section id="about" className="bg-white overflow-hidden">
      {/* Divider + label */}
      <div className="flex items-center gap-6 px-8 pt-10">
        <div className="flex-1 h-px bg-black" />
        <span
          className="font-mono text-[10px] uppercase text-black whitespace-nowrap"
          style={{ letterSpacing: "0.1em" }}
        >
          [ 8+ YEARS IN INDUSTRY ]
        </span>
      </div>

      {/* Staircase heading */}
      <div className="pb-20 pt-6">
        {/* Line 1 */}
        <p
          className="pl-8 text-[8.5vw] font-extralight leading-[0.95] uppercase text-black"
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
          className="text-[8.5vw] font-extralight leading-[0.95] uppercase text-black"
          style={{ paddingLeft: "14vw", letterSpacing: "-0.025em" }}
        >
          PHOTOGRAPHER
        </p>

        {/* Line 3 — & in Playfair italic */}
        <p
          className="text-[8.5vw] font-extralight leading-[0.95] uppercase text-black"
          style={{ paddingLeft: "30vw", letterSpacing: "-0.025em" }}
        >
          BORN{" "}
          <span className="font-playfair italic" style={{ letterSpacing: "normal" }}>
            &amp;
          </span>{" "}
          RAISED
        </p>

        {/* Line 4 */}
        <p
          className="pl-8 text-[8.5vw] font-extralight leading-[0.95] uppercase text-black"
          style={{ letterSpacing: "-0.025em" }}
        >
          ON THE SOUTH SIDE
        </p>

        {/* Line 5 — inline label */}
        <p
          className="text-[8.5vw] font-extralight leading-[0.95] uppercase text-black"
          style={{ paddingLeft: "30vw", letterSpacing: "-0.025em" }}
        >
          OF CHICAGO.
          <span
            className="font-mono text-black align-middle"
            style={{ fontSize: "10px", letterSpacing: "0.08em", marginLeft: "0.75rem" }}
          >
            [ CREATIVE FREELANCER ]
          </span>
        </p>
      </div>
    </section>
  );
}
