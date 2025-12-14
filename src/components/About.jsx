import { useEffect, useRef, useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiR,
  SiPostgresql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiGit,
  SiGnubash,
} from "react-icons/si";
import { Code } from "lucide-react";

const techCategories = [
  {
    name: "Languages",
    techs: ["Python", "JavaScript", "C++", "C", "R", "SQL"],
  },
  {
    name: "Frontend",
    techs: ["React", "React Native", "HTML", "CSS", "SCSS"],
  },
  {
    name: "Backend & Database",
    techs: ["Node.js", "PostgreSQL"],
  },
  {
    name: "Tools",
    techs: ["Git", "Bash", "VS Code"],
  },
];

// Tech stack icon mapping
const techIcons = {
  Python: SiPython,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
  C: SiC,
  R: SiR,
  SQL: SiPostgresql,
  React: SiReact,
  "React Native": SiReact,
  HTML: SiHtml5,
  CSS: SiCss3,
  SCSS: SiSass,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  Bash: SiGnubash,
  "VS Code": Code,
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-[#111111] relative overflow-hidden"
    >
      {/* Animated background */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#6EE7A0]/5 to-transparent transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      />
      <div
        className={`absolute bottom-20 left-20 w-32 h-32 bg-[#6EE7A0]/10 rounded-full blur-3xl transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label with line animation */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-100 -translate-x-10"
          }`}
        >
          <span className="text-[#6EE7A0] font-mono text-sm">01</span>
          <div
            className={`h-px bg-[#6EE7A0] transition-all duration-1000 delay-300 ${
              isVisible ? "w-12" : "w-0"
            }`}
          />
          <span className="text-[#666666] text-sm tracking-widest">ABOUT</span>
        </div>

        {/* Brief statement with blur effect */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-90 translate-y-6"
          }`}
        >
          <p className="text-2xl lg:text-3xl text-[#fafafa] leading-relaxed">
            A motivated Bachelor of Advanced Computing student at the
            <span className="text-[#6EE7A0]"> University of Sydney</span>,
            majoring in Data Science with a minor in Computer Science.
          </p>
          <p
            className={`text-lg text-[#a3a3a3] mt-6 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-90 translate-y-6"
            }`}
          >
            A lover of matcha, anime, and video games, driven to contribute
            technical skills and create meaningful impact through real-world
            experience. Always learning, always building.
          </p>
        </div>

        {/* Tech stack by category with staggered animations */}
        <div className="space-y-8">
          {techCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-90 translate-y-6"
              }`}
              style={{ transitionDelay: `${catIndex * 150 + 500}ms` }}
            >
              <p className="text-xs text-[#666666] mb-4 tracking-widest">
                {category.name.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, i) => {
                  const TechIcon = techIcons[tech];
                  if (!TechIcon) return null;
                  return (
                    <div
                      key={tech}
                      className={`group px-4 py-3 bg-[#161616] rounded-xl border border-[#222222] hover:border-[#6EE7A0]/50 hover:bg-[#161616]/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#6EE7A0]/10 cursor-default flex items-center gap-2 ${
                        isVisible
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-90 translate-y-4 scale-98"
                      }`}
                      style={{
                        transitionDelay: `${catIndex * 150 + i * 75 + 600}ms`,
                      }}
                      >
                      <TechIcon className="w-4 h-4 text-[#6EE7A0] group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="text-[#fafafa] font-medium text-sm group-hover:text-[#6EE7A0] transition-colors">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
