const links = ["About", "Services", "Projects", "News", "Contact"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <a href="#" className="text-base font-semibold text-black tracking-[-0.04em]">
        H.Studio
      </a>

      <ul className="hidden md:flex items-center gap-[56px]">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-base font-semibold text-black tracking-[-0.04em] hover:opacity-60 transition-opacity"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="bg-black text-white text-sm font-medium px-4 py-3 rounded-full tracking-[-0.04em] hover:opacity-80 transition-opacity"
      >
        Let&apos;s talk
      </a>
    </nav>
  );
}
