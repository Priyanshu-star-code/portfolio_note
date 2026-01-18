import { DoodleCharacter } from "./DoodleCharacter";
import { Download, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    // Replace this URL with your actual resume file URL
    const resumeUrl = "/Priyanshu_NoteDev.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Priyanshu_NoteDev.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen notebook-page overflow-hidden">
      {/* Spiral binding effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 spiral-binding opacity-60" />



      {/* Red margin line */}
      <div className="absolute left-16 top-0 bottom-0 w-[3px] bg-[hsl(0_70%_70%)]" />

      <div className="absolute top-[8%] left-[15%] animate-shooting-star">
        <svg width="80" height="20" viewBox="0 0 80 20" className="opacity-80">
          <defs>
            <linearGradient id="starTrail1" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="hsl(var(--highlight))" stopOpacity="0" />
              <stop offset="70%" stopColor="hsl(var(--highlight))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0 10 L70 10" stroke="url(#starTrail1)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="70" cy="10" r="4" fill="hsl(var(--accent))" className="animate-pulse" />
        </svg>
      </div>

      <div className="container mx-auto px-8 md:px-20 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Greeting */}
            <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <span className="font-casual text-2xl md:text-3xl text-ink">Hi, I'm</span>


              <h1 className="font-handwriting text-6xl md:text-8xl text-ink leading-tight">
                Priyanshu <span className="inline-block animate-wiggle">👋</span>
              </h1>
            </div>


            {/* Role Title */}
            <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <p className="font-casual text-xl md:text-2xl text-ink">
                <span className="highlight-text font-bold">DevOps Engineer Developer</span>
                <span className="text-muted-foreground mx-2">|</span>
                <span>AWS • GCP • Cloud</span>


              </p>
            </div>



            {/* Value Statement */}
            <p className="font-casual text-lg md:text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              I design and automate scalable cloud infrastructure.
              Ensuring fast, secure, and reliable software delivery.


            </p>


            {/* About Summary */}
            <div className="hand-drawn-border bg-paper/50 p-4 max-w-lg opacity-0 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <p className="font-casual text-ink">
                <span className="text-doodle font-bold">1.5+ years</span> of experience building and operating scalable cloud infrastructure.
                Passionate about automation, reliability, and efficient software delivery.
              </p>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
              <Button
                onClick={handleDownloadResume}
                className="hand-drawn-border bg-highlight hover:bg-highlight/80 text-ink font-casual text-lg px-6 py-3 flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </Button>

              <a
                href="#contact"
                className="hand-drawn-border bg-ink text-paper hover:bg-ink/80 font-casual text-lg px-6 py-3 transition-transform hover:scale-105 inline-block"
              >
                Let's Talk
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/priyanshuverma94?utm_source=qr&igsh=MWllaGxlM29ibGd6cg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hand-drawn-border p-3 bg-paper hover:bg-highlight/30 transition-all hover:scale-110 hover:rotate-3"
                  aria-label="Instagram"
                >
                  <Instagram size={24} className="text-ink" />
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanshu-verma94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hand-drawn-border p-3 bg-paper hover:bg-highlight/30 transition-all hover:scale-110 hover:-rotate-3"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-ink" />
                </a>
              </div>
            </div>

            {/* Sticky Note */}
            {/* <div className="sticky-note p-6 w-fit max-w-[200px] opacity-0 animate-pop-in" style={{ animationDelay: '0.7s' }}>
              <h3 className="font-handwriting text-2xl text-ink mb-2 font-bold">SKILLS:</h3>
              <div className="font-casual text-lg text-ink space-y-1">
                <p>HTML & CSS</p>
                <p>JS REACT ⚛️</p>
                <p>📱 REACT AI</p>
              </div>
            </div> */}
          </div>

          {/* Right - Doodle Character */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <DoodleCharacter />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-casual text-muted-foreground animate-bounce">
          <span>scroll down ↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;