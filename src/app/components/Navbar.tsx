const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "News", href: "#news" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-8 md:py-10">
      <div className="flex items-center gap-12">
        <a href="#" className="text-lg font-bold text-white tracking-[-0.04em] uppercase">
          H.Studio
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:text-white/60 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="#contact"
          className="hidden sm:inline-block bg-white text-black text-[10px] font-bold uppercase px-8 py-3 rounded-full tracking-widest hover:bg-white/80 transition-all duration-300"
        >
          Let&apos;s talk
        </a>
        <button className="flex flex-col gap-1.5 group cursor-pointer">
          <div className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" />
          <div className="w-8 h-0.5 bg-white" />
        </button>
      </div>
    </nav>
  );
}
