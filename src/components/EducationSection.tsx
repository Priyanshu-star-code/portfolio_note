import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Technology",
        field: "Computer Science & Engineering",
        institution: "Future Group of Institutes",
        year: "2019 - 2023",
        achievements: ["CGPA: 7/10"]
    },
    {
        degree: "Higher Secondary",
        field: "Science (PCM)",
        institution: "Swami Dharmanand Saraswati Inter College",
        year: "2018 - 2019",
        achievements: [" Percentage: 60%"]
    }
];

const certifications = [
    { name: "Google Cloud Digital Leader", issuer: "Udemy, ", year: "2024" },
    { name: "Computer System Security:", issuer: "I.I.T Kanpur", year: "2022" },

    { name: "Python Training", issuer: "Intenshala", year: "2021" },
    
];

const EducationSection = () => {
    return (
        <section className="py-20 notebook-page relative overflow-hidden" id="education">
            {/* Spiral binding */}
            <div className="absolute left-0 top-0 bottom-0 w-12 spiral-binding opacity-60" />
            <div className="absolute left-16 top-0 bottom-0 w-[3px] bg-[hsl(0_70%_70%)]" />

            <div className="container mx-auto px-8 md:px-20">
                <div className="flex items-center justify-center gap-4 mb-16">
                    <GraduationCap className="w-10 h-10 text-doodle animate-float" />
                    <h2 className="font-handwriting text-5xl md:text-7xl text-ink">
                        <span className="highlight-text">Education</span> & Certs
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Education Cards */}
                    <div className="space-y-8">
                        <h3 className="font-handwriting text-3xl text-ink flex items-center gap-2 mb-6">
                            <BookOpen className="w-6 h-6 text-accent" />
                            Academic Journey
                        </h3>

                        {education.map((edu, idx) => (
                            <div
                                key={idx}
                                className="sticky-note p-6 opacity-0 animate-slide-in-left hover:scale-[1.02] transition-all duration-300"
                                style={{
                                    animationDelay: `${idx * 0.2}s`,
                                    transform: `rotate(${idx % 2 === 0 ? '-1deg' : '1deg'})`
                                }}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-handwriting text-2xl text-ink">{edu.degree}</h4>
                                        <p className="font-casual text-lg text-accent">{edu.field}</p>
                                    </div>
                                    <span className="font-casual text-sm bg-paper px-3 py-1 rounded-full border border-doodle/30">
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="font-body text-muted-foreground mb-3">🏫 {edu.institution}</p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.achievements.map((achievement, i) => (
                                        <span
                                            key={i}
                                            className="font-casual text-xs px-2 py-1 bg-highlight/40 rounded-full text-ink"
                                        >
                                            ⭐ {achievement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="space-y-6">
                        <h3 className="font-handwriting text-3xl text-ink flex items-center gap-2 mb-6">
                            <Award className="w-6 h-6 text-accent" />
                            Certifications
                        </h3>

                        <div className="sticky-note-alt p-6 opacity-0 animate-pop-in" style={{ animationDelay: '0.4s' }}>
                            <div className="space-y-4">
                                {certifications.map((cert, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 p-3 bg-paper/60 rounded-lg border-2 border-dashed border-doodle/30 hover:border-accent transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-highlight to-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Award className="w-6 h-6 text-ink" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-handwriting text-xl text-ink">{cert.name}</h4>
                                            <p className="font-casual text-sm text-muted-foreground">
                                                {cert.issuer} • {cert.year}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="flex justify-center pt-6">
                            <svg className="w-32 h-32 opacity-30" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" stroke="hsl(var(--doodle))" strokeWidth="2" fill="none" strokeDasharray="10 5" className="animate-spin-slow" />
                                <path d="M50 20 L55 35 L70 35 L58 45 L62 60 L50 50 L38 60 L42 45 L30 35 L45 35 Z" fill="hsl(var(--highlight))" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
