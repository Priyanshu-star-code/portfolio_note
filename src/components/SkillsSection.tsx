const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "Design", items: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Prototyping"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "VS Code"] },
];

const SkillsSection = () => {
  return (
    <section className="py-20 notebook-page relative" id="skills">
      {/* Spiral binding */}
      <div className="absolute left-0 top-0 bottom-0 w-12 spiral-binding opacity-60" />
      <div className="absolute left-16 top-0 bottom-0 w-[3px] bg-[hsl(0_70%_70%)]" />

      <div className="container mx-auto px-8 md:px-20">
        <h2 className="font-handwriting text-5xl md:text-7xl text-ink mb-16 text-center">
          My <span className="highlight-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              className={`${idx % 2 === 0 ? 'sticky-note' : 'sticky-note-alt'} p-6 opacity-0 animate-pop-in`}
              style={{
                animationDelay: `${idx * 0.15}s`,
                transform: `rotate(${idx % 2 === 0 ? '-2deg' : '2deg'})`
              }}
            >
              <h3 className="font-handwriting text-3xl text-ink mb-4 font-bold border-b-2 border-dashed border-doodle pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2 font-casual text-lg text-ink">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="text-accent">✦</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative doodles */}
        <div className="flex justify-center mt-12 gap-8 opacity-50">
          <svg className="w-12 h-12" viewBox="0 0 50 50">
            <path d="M25 5 L30 20 L45 25 L30 30 L25 45 L20 30 L5 25 L20 20 Z" stroke="hsl(25 25% 35%)" strokeWidth="2" fill="none" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" stroke="hsl(25 25% 35%)" strokeWidth="2" fill="none" strokeDasharray="5 3" />
          </svg>
          <svg className="w-12 h-12" viewBox="0 0 50 50">
            <path d="M10 25 Q25 5 40 25 Q25 45 10 25" stroke="hsl(25 25% 35%)" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;