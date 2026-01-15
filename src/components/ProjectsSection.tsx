import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DSO-Genie-AI",
    description: "DSO-Genie-AI is an AI-powered infrastructure automation platform enabling scalable deployments across AWS and GCP",
    tech: ["GCP", "Github Action", "Terraform", "Docker", "Python"],
    color: "bg-primary/30",
  },
  {
    title: "Secure Hire web App",
    description: "Secure Hire is a web application that streamlines the hiring and management of security guards.",
    tech: ["AWS", "Github Actions", "Docker", "Trello"],
    color: "bg-secondary",
  },
  {
    title: "DevSecOps Software Website",
    description: "A corporate website showcasing the company’s DevSecOps services, expertise, and solutions.",
    tech: ["Linux", "GCP", "Aetifact", "YAML"],
    color: "bg-primary/30",
  },
  {
    title: "Portfolio Web",
    description: "A personal portfolio website showcasing my skills, projects, and professional experience.",
    tech: ["Vue.js", "Tailwind", "Firebase", "Framer Motion"],
    color: "bg-secondary",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 notebook-page relative" id="projects">
      {/* Spiral binding */}
      <div className="absolute left-0 top-0 bottom-0 w-12 spiral-binding opacity-60" />
      <div className="absolute left-16 top-0 bottom-0 w-[3px] bg-[hsl(0_70%_70%)]" />

      <div className="container mx-auto px-8 md:px-20">
        <h2 className="font-handwriting text-5xl md:text-7xl text-ink mb-4 text-center">
          My <span className="highlight-text">Projects</span>
        </h2>
        <p className="font-casual text-xl text-muted-foreground text-center mb-16">
          Things I've built with love and caffeine ☕
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`relative ${project.color} p-6 hand-drawn-border opacity-0 animate-fade-in hover:scale-105 transition-transform duration-300`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[hsl(45_30%_90%/0.7)] rounded-sm" />

              <h3 className="font-handwriting text-3xl text-ink mb-3 mt-2">
                {project.title}
              </h3>
              <p className="font-body text-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-casual text-sm px-3 py-1 bg-paper border border-doodle/30 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 font-casual text-ink">
                <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
                  <Github size={18} />
                  Code
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-accent transition-colors">
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>

              {/* Corner fold effect */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-[hsl(35_30%_80%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;