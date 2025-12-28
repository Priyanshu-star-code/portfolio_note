import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 md:px-20 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="relative font-handwriting text-3xl text-ink group"
        >
          Portfolio
          <span className="absolute left-0 -bottom-1 w-full h-2 bg-yellow-200 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 rotate-[-2deg]" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className="font-casual text-lg text-ink relative z-10"
              >
                {link.label}
              </a>

              {/* Hand-drawn highlight */}
              <span className="absolute left-0 -bottom-1 w-full h-2 bg-yellow-200 opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-[-2deg]" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-casual text-lg text-ink relative"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-full h-2 bg-yellow-200 opacity-40 -z-10" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
