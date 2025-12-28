import { Briefcase } from "lucide-react";

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    side: 'left' | 'right';
}

const experiences: Experience[] = [
    {
        title: "Senior Full-Stack Developer",
        company: "Tech Innovators Inc",
        location: "San Francisco, CA",
        period: "Jan 2023 - Present",
        description: [
            "Led development of microservices architecture",
            "Mentored junior developers and conducted code reviews",
            "Reduced deployment time by 40% through CI/CD optimization"
        ],
        side: 'left'
    },
    {
        title: "Full-Stack Developer",
        company: "StartupXYZ",
        location: "Remote",
        period: "Jun 2021 - Dec 2022",
        description: [
            "Built React-based dashboards with real-time data",
            "Implemented RESTful APIs using Node.js and Express",
            "Integrated third-party payment and analytics services"
        ],
        side: 'right'
    },
    {
        title: "Frontend Developer",
        company: "Digital Agency Co",
        location: "New York, NY",
        period: "Aug 2020 - May 2021",
        description: [
            "Developed responsive web applications",
            "Collaborated with UX team on design systems",
            "Improved page load performance by 60%"
        ],
        side: 'left'
    },
];

const WorkExperienceSection = () => {
    return (
        <section className="py-20 notebook-page relative overflow-hidden" id="experience">
            {/* Spiral binding */}
            <div className="absolute left-0 top-0 bottom-0 w-12 spiral-binding opacity-60" />
            <div className="absolute left-16 top-0 bottom-0 w-[3px] bg-[hsl(0_70%_70%)]" />

            <div className="container mx-auto px-8 md:px-20">
                <div className="flex items-center justify-center gap-4 mb-16">
                    <Briefcase className="w-10 h-10 text-doodle animate-wiggle" />
                    <h2 className="font-handwriting text-5xl md:text-7xl text-ink">
                        Work <span className="highlight-text">Experience</span>
                    </h2>
                </div>

                {/* Timeline Graph */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical center line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-ink/40" />


                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative flex items-stretch mb-16 last:mb-0 opacity-0 animate-fade-in`}
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            {/* Left side content */}
                            <div className={`w-[calc(50%-32px)] ${exp.side === 'left' ? 'pr-4' : ''}`}>
                                {exp.side === 'left' && (
                                    <div className="hand-drawn-border bg-paper p-5 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg relative group">
                                        {/* Horizontal connector line */}
                                        <div className="absolute top-1/2 -right-[28px] w-7 h-0.5 bg-doodle group-hover:bg-accent transition-colors" />

                                        <h3 className="font-handwriting text-2xl md:text-3xl text-ink mb-1">
                                            {exp.title}
                                        </h3>
                                        <p className="font-casual text-lg text-accent font-bold mb-1">
                                            @ {exp.company}
                                        </p>
                                        <p className="font-casual text-sm text-muted-foreground mb-2">
                                            📍 {exp.location}
                                        </p>
                                        <p className="font-casual text-sm text-ink/70 mb-3 highlight-text inline-block">
                                            {exp.period}
                                        </p>
                                        <ul className="space-y-1">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="font-casual text-sm text-ink flex items-start gap-2">
                                                    <span className="text-accent mt-1">✦</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Center dot */}
                            <div className="relative w-16 flex justify-center">
                                <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-paper border-4 border-accent rounded-full z-10 shadow-md hover:scale-125 transition-transform cursor-pointer" />
                            </div>

                            {/* Right side content */}
                            <div className={`w-[calc(50%-32px)] ${exp.side === 'right' ? 'pl-4' : ''}`}>
                                {exp.side === 'right' && (
                                    <div className="hand-drawn-border bg-paper p-5 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg relative group">
                                        {/* Horizontal connector line */}
                                        <div className="absolute top-1/2 -left-[28px] w-7 h-0.5 bg-doodle group-hover:bg-accent transition-colors" />

                                        <h3 className="font-handwriting text-2xl md:text-3xl text-ink mb-1">
                                            {exp.title}
                                        </h3>
                                        <p className="font-casual text-lg text-accent font-bold mb-1">
                                            @ {exp.company}
                                        </p>
                                        <p className="font-casual text-sm text-muted-foreground mb-2">
                                            📍 {exp.location}
                                        </p>
                                        <p className="font-casual text-sm text-ink/70 mb-3 highlight-text inline-block">
                                            {exp.period}
                                        </p>
                                        <ul className="space-y-1">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="font-casual text-sm text-ink flex items-start gap-2">
                                                    <span className="text-accent mt-1">✦</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Decorative end dot */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-accent rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default WorkExperienceSection;
