const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-12 py-8 md:py-10 z-[100] bg-transparent">
      {/* Left: Logo */}
      <a href="#" className="text-xl font-bold text-black tracking-[-0.04em] uppercase">
        H.Studio
      </a>

      {/* Center: Links */}
      <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-[11px] font-bold text-black uppercase tracking-[0.2em] hover:text-black/40 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: CTA Button */}
      <div className="flex items-center gap-6">
        <a
          href="#contact"
          className="bg-black text-white text-[11px] font-bold uppercase px-8 py-3 rounded-full tracking-widest hover:bg-black/80 transition-all duration-300"
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
}
