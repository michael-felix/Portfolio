import { useState, useEffect, useRef } from "react";

const experiences = [
  {
    id: "starbucks",
    company: "Starbucks Bondi Junction",
    role: "Shift Supervisor",
    duration: "03/2024 - Present",
    description: [
      "Led shifts, managed team performance, and ensured smooth store operations.",
      "Trained new baristas and maintained high standards of customer service and product quality.",
      "Managed inventory, cash handling, and daily reporting.",
    ],
    tech: [],
  },
  {
    id: "ascend",
    company: "Ascend ERP",
    role: "Software Developer Intern",
    duration: "11/2023 - 02/2024",
    description: [
      "Developed and maintained features for an ERP system using React and Node.js.",
      "Collaborated with senior developers to debug and optimize existing codebase.",
      "Participated in daily stand-ups and contributed to sprint planning.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Git"],
  },
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentExp = experiences[activeExp];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 bg-[#111111] relative overflow-hidden"
    >
      {/* Animated background */}
      <div
        className={`absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#6EE7A0]/5 to-transparent transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      />
      <div
        className={`absolute left-20 bottom-20 w-24 h-24 bg-[#6EE7A0]/10 rounded-full blur-2xl transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
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
          <span className="text-[#6EE7A0] font-mono text-sm">03</span>
          <div
            className={`h-px bg-[#6EE7A0] transition-all duration-1000 delay-300 ${
              isVisible ? "w-12" : "w-0"
            }`}
          />
          <span className="text-[#666666] text-sm tracking-widest">
            EXPERIENCE
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div
            className={`lg:w-1/3 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-90 -translate-x-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {experiences.map((exp, i) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(i)}
                  className={`group relative px-6 py-4 text-left rounded-xl border transition-all duration-500 flex-shrink-0 hover:-translate-y-1 ${
                    activeExp === i
                      ? "bg-[#161616] border-[#6EE7A0]/30 shadow-lg shadow-[#6EE7A0]/5"
                      : "bg-[#161616]/50 border-[#222222] hover:border-[#6EE7A0]/20"
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-90 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      activeExp === i
                        ? "text-[#6EE7A0]"
                        : "text-[#666666] group-hover:text-[#fafafa]"
                    }`}
                  >
                    {exp.company}
                  </span>
                  <span className="block text-xs text-[#666666] mt-1">
                    {exp.duration}
                  </span>
                  {/* Active indicator */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-[#6EE7A0] rounded-full transition-all duration-300 ${
                      activeExp === i ? "h-8 opacity-100" : "h-0 opacity-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            className={`lg:w-2/3 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-90 translate-x-6"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="p-8 bg-[#161616] rounded-2xl border border-[#222222]">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#fafafa]">
                    {currentExp.role}
                  </h3>
                  <p className="text-[#6EE7A0] font-medium">
                    {currentExp.company}
                  </p>
                </div>
                <span className="px-4 py-1 bg-[#111111] text-[#666666] text-sm rounded-full">
                  {currentExp.duration}
                </span>
              </div>

              <ul className="space-y-4">
                {currentExp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6EE7A0] flex-shrink-0" />
                    <span className="text-[#a3a3a3]">{item}</span>
                  </li>
                ))}
              </ul>

              {currentExp.tech.length > 0 && (
                <div className="mt-8 pt-6 border-t border-[#222222]">
                  <p className="text-xs text-[#666666] mb-3 tracking-widest">
                    TECHNOLOGIES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentExp.tech.map((t, i) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#111111] text-[#fafafa] text-sm rounded-lg hover:text-[#6EE7A0] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
