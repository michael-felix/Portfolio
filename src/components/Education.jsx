import { useEffect, useRef, useState } from "react";

const languages = [
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Indonesian", level: "Fluent", flag: "🇮🇩" },
  { name: "Chinese", level: "Conversational", flag: "🇨🇳" },
  { name: "Hokkien", level: "Conversational", flag: "🗣️" },
];

export default function Education() {
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated background */}
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-[#6EE7A0]/5 rounded-r-full blur-3xl transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      />
      <div
        className={`absolute right-10 bottom-10 w-24 h-24 bg-[#6EE7A0]/10 rounded-full blur-2xl transition-all duration-1000 delay-700 ${
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
          <span className="text-[#6EE7A0] font-mono text-sm">02</span>
          <div
            className={`h-px bg-[#6EE7A0] transition-all duration-1000 delay-300 ${
              isVisible ? "w-12" : "w-0"
            }`}
          />
          <span className="text-[#666666] text-sm tracking-widest">
            EDUCATION
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main education card with scale animation */}
          <div
            className={`group relative p-8 bg-[#161616] rounded-2xl border border-[#222222] hover:border-[#6EE7A0]/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6EE7A0]/5 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-90 translate-y-6 scale-98"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Year badge with pop animation */}
            <div
              className={`absolute -top-3 -right-3 px-4 py-1 bg-[#6EE7A0] text-[#0a0a0a] text-sm font-bold rounded-full transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              2023 - 2027
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`text-4xl transition-all duration-700 ${
                  isVisible ? "opacity-100 rotate-0" : "opacity-90 -rotate-12"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                🎓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#fafafa] group-hover:text-[#6EE7A0] transition-colors">
                  Bachelor of Advanced Computing
                </h3>
                <p className="text-[#6EE7A0] font-medium mt-1">
                  University of Sydney
                </p>
                <div className="mt-4 space-y-2">
                  <div
                    className={`flex items-center gap-2 transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-90 -translate-x-5"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7A0]" />
                    <span className="text-[#a3a3a3]">
                      Major: Computational Data Science
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2 transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-90 -translate-x-5"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7A0]" />
                    <span className="text-[#a3a3a3]">
                      Minor: Computer Science
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover line */}
            <div className="absolute bottom-0 left-0 h-1 bg-[#6EE7A0] rounded-b-2xl transition-all duration-500 w-0 group-hover:w-full" />
          </div>

          {/* Languages with staggered cards */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-90 translate-y-6"
            }`}
          >
            <h3
              className={`text-xl font-bold text-[#fafafa] mb-6 flex items-center gap-2 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-90 -translate-x-5"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <span className="text-[#6EE7A0]">🌏</span> Languages
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang, i) => (
                <div
                  key={lang.name}
                  className={`group p-4 bg-[#161616] rounded-xl border border-[#222222] hover:border-[#6EE7A0]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6EE7A0]/5 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-90 translate-y-4 scale-98"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 500}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <div className="font-medium text-[#fafafa] group-hover:text-[#6EE7A0] transition-colors">
                      {lang.name}
                    </div>
                  </div>
                  <div className="text-xs text-[#666666] mt-1 ml-7">
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>

            {/* Currently learning with pulse effect */}
            <div
              className={`mt-8 p-6 bg-[#161616] rounded-2xl border border-[#222222] transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-90 translate-y-6"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7A0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6EE7A0]"></span>
                </div>
                <span className="text-sm text-[#6EE7A0] font-medium">
                  Currently Learning
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Data Analysis", "Cloud Computing"].map(
                  (item, i) => (
                    <span
                      key={item}
                      className={`px-3 py-1 bg-[#111111] rounded-full text-sm text-[#a3a3a3] transition-all duration-500 hover:bg-[#6EE7A0]/10 hover:text-[#6EE7A0] ${
                        isVisible
                          ? "opacity-100 scale-100"
                          : "opacity-90 scale-90"
                      }`}
                      style={{ transitionDelay: `${i * 100 + 900}ms` }}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
