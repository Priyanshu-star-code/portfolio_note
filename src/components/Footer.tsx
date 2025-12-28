import { Instagram, Linkedin, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 notebook-page relative border-t border-border">
      {/* Spiral binding */}
      <div className="absolute left-0 top-0 bottom-0 w-12 spiral-binding opacity-60" />
      <div className="absolute left-16 top-0 bottom-0 w-[3px] bg-[hsl(0_70%_70%)]" />

      <div className="container mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-casual text-muted-foreground text-center md:text-left">
            Crafted with ☕ & 💻 © 2024
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-casual text-ink hover:text-doodle transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-casual text-ink hover:text-doodle transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href="/resume.pdf"
              download="My_Resume.pdf"
              className="flex items-center gap-2 font-casual text-ink hover:text-doodle transition-colors"
              aria-label="Download Resume"
            >
              <Download size={20} />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>

          <p className="font-casual text-muted-foreground text-sm">
            Thanks for visiting!
          </p>
        </div>

        {/* Decorative bottom doodle */}
        <div className="flex justify-center mt-6">
          <svg className="w-32 h-8" viewBox="0 0 120 30">
            <path
              d="M10 15 Q30 5 60 15 Q90 25 110 15"
              stroke="hsl(25 25% 35%)"
              strokeWidth="2"
              fill="none"
              className="opacity-30"
            />
          </svg>
        </div>

        {/* hii */}
      
{/* 
        <svg className=" w-12 h-12 float" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="4" fill="hsl(25 25% 35%)" />
          <path d="M20 2 L20 10" stroke="hsl(25 25% 35%)" />
          <path d="M20 30 L20 38" stroke="hsl(25 25% 35%)" />
          <path d="M2 20 L10 20" stroke="hsl(25 25% 35%)" />
          <path d="M30 20 L38 20" stroke="hsl(25 25% 35%)" />
        </svg>
        <svg className="w-48 h-6" viewBox="0 0 120 20">
          <path
            d="M5 10 Q20 5 35 10 T65 10 T95 10 T115 10"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg className="w-10 h-14" viewBox="0 0 40 60">
          <path
            d="M20 5 L20 45"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
          />
          <path
            d="M14 40 L20 50 L26 40"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg className="w-24 h-14" viewBox="0 0 120 70">
          <path
            d="M20 40 Q20 20 40 25 Q50 10 70 25 Q90 20 95 40 Q95 55 75 55 H35 Q20 55 20 40"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <svg className="w-48 h-6" viewBox="0 0 120 20">
          <path
            d="M5 10 Q20 0 35 10 T65 10 T95 10"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </svg>
        <svg className="w-10 h-10" viewBox="0 0 50 50">
          <path
            d="M25 5 L28 20 L45 25 L28 30 L25 45 L22 30 L5 25 L22 20 Z"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg className="w-16 h-16" viewBox="0 0 60 60">
          <path
            d="M10 45 Q30 10 50 30"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M45 25 L50 30 L43 32"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <svg className="w-14 h-14" viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r="25"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 6"
          />
        </svg>

        <svg className="w-40 h-6" viewBox="0 0 120 20">
          <path
            d="M5 15 Q40 5 75 15 T115 15"
            stroke="hsl(25 25% 35%)"
            strokeWidth="2"
            fill="none"
          />
        </svg> */}



      </div>
    </footer>
  );
};

export default Footer;