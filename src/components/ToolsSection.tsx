import {
  Code,
  Terminal,
  Wrench,
  Cloud,
  Server,
  Boxes,
  GitBranch,
  Cpu
} from "lucide-react";

const tools = [
  // OS & CLI
  { name: "Linux", icon: Terminal, description: "Server & OS management" },
  { name: "Bash", icon: Terminal, description: "Shell scripting & automation" },

  // Version Control & CI/CD
  { name: "Git & GitHub", icon: GitBranch, description: "Version control & collaboration" },
  { name: "GitHub Actions", icon: Wrench, description: "CI/CD pipelines automation" },

  // Infrastructure & Containers
  { name: "Terraform", icon: Code, description: "Infrastructure as Code (IaC)" },
  { name: "Docker", icon: Boxes, description: "Containerization & image management" },
  { name: "Kubernetes", icon: Cpu, description: "Container orchestration (Basics)" },

  // Cloud Platforms
  { name: "AWS", icon: Cloud, description: "EC2, S3, IAM, VPC" },
  { name: "GCP", icon: Server, description: "Compute, Storage, IAM (Basics)" },

  // Deployment
  { name: "Vercel", icon: Cloud, description: "Frontend & full-stack deployments" }
];

const ToolsSection = () => {
  return (
    <section className="py-20 notebook-page relative" id="tools">
      {/* Spiral binding */}
      <div className="absolute left-0 top-0 bottom-0 w-12 spiral-binding opacity-60" />
      <div className="absolute left-16 top-0 bottom-0 w-[3px] bg-[hsl(0_70%_70%)]" />

      <div className="container mx-auto px-8 md:px-20">
        <h2 className="font-handwriting text-5xl md:text-7xl text-ink mb-4 text-center">
          My <span className="highlight-text">DevOps Toolbox</span>
        </h2>

        <p className="font-casual text-xl text-muted-foreground text-center mb-16">
          Tools I use to build, deploy, automate & scale systems 🚀
        </p>


        {/* Floating Emojis */}
        {/* <div className="absolute top-[55%] right-[8%] animate-float-rotate opacity-70">
          <span className="text-2xl sm:text-3xl">🚀</span>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, idx) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center p-4 sticky-note
                         hover:scale-110 transition-all duration-300
                         opacity-0 animate-pop-in cursor-pointer"
              style={{
                animationDelay: `${idx * 0.1}s`,
                transform: `rotate(${(idx - 2.5) * 2}deg)`
              }}
            >
              <tool.icon
                className="w-10 h-10 text-doodle mb-3
                           group-hover:text-accent transition-colors"
                strokeWidth={1.5}
              />
              <h3 className="font-handwriting text-xl text-ink text-center">
                {tool.name}
              </h3>
              <p className="font-casual text-xs text-muted-foreground text-center mt-1
                            opacity-0 group-hover:opacity-100 transition-opacity">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative arrows */}
        <div className="flex justify-center mt-12">
          <svg className="w-full max-w-md h-16" viewBox="0 0 400 60">
            <path
              d="M50 30 Q200 60 350 30"
              stroke="hsl(25 25% 35%)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              className="opacity-40"
            />
            <path
              d="M340 25 L350 30 L340 35"
              stroke="hsl(25 25% 35%)"
              strokeWidth="2"
              fill="none"
              className="opacity-40"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
