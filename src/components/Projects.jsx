import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and Tailwind CSS featuring smooth animations and dark mode.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/michael-felix",
  },
  {
    title: "Clothing Database",
    description:
      "A simple clothing database styled with CSS, exploring layout, styling, and visual organisation.",
    tech: ["React, SCSS"],
    github: "https://github.com/michael-felix/clothing-database",
  },
  {
    title: "Weather Website",
    description:
      "A weather application built with JavaScript that fetches and displays real-time weather data.",
    tech: ["React"],
    github: "https://github.com/michael-felix/weather-website",
  },
  {
    title: "To-Do List",
    description:
      "A JavaScript-based to-do list app for managing tasks with basic CRUD functionality.",
    tech: ["React"],
    github: "https://github.com/michael-felix/to-do-list",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
      id="projects"
      ref={sectionRef}
      className="py-32 bg-[#111111] relative overflow-hidden"
    >
      {/* Animated background */}
      <div
        className={`absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#6EE7A0]/5 rounded-tr-full blur-3xl transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-100 -translate-x-10"
          }`}
        >
          <span className="text-[#6EE7A0] font-mono text-sm">05</span>
          <div
            className={`h-px bg-[#6EE7A0] transition-all duration-1000 delay-300 ${
              isVisible ? "w-12" : "w-0"
            }`}
          />
          <span className="text-[#666666] text-sm tracking-widest">
            PROJECTS
          </span>
        </div>

        {/* Projects grid with alternating animations */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group p-8 bg-[#161616] rounded-2xl border border-[#222222] hover:border-[#6EE7A0]/30 transition-all duration-700 hover:-translate-y-3 hover:shadow-xl hover:shadow-[#6EE7A0]/10 ${
                isVisible
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "opacity-90 translate-y-6 rotate-1"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`text-3xl transition-all duration-500 ${
                    hoveredIndex === i
                      ? "scale-110 rotate-6"
                      : "scale-100 rotate-0"
                  }`}
                >
                  📁
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#a3a3a3] hover:text-[#6EE7A0] transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <h3 className="text-xl font-bold text-[#fafafa] group-hover:text-[#6EE7A0] transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-[#a3a3a3] text-sm mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span
                    key={t}
                    className={`px-3 py-1 bg-[#111111] text-[#6EE7A0] text-xs rounded-full transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 scale-100"
                        : "opacity-90 scale-90"
                    }`}
                    style={{ transitionDelay: `${i * 150 + j * 75 + 400}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA with slide up */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-90 translate-y-6"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="https://github.com/michael-felix"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-[#222222] text-[#a3a3a3] hover:border-[#6EE7A0] hover:text-[#6EE7A0] rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6EE7A0]/10"
          >
            <span>View more on GitHub</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
