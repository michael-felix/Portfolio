import { useEffect, useRef, useState } from "react";

const awards = [
  {
    year: "2025",
    event: "UNIHACK",
    project: "Cryptarity",
    description:
      "A web app to track cryptocurrency donations in real-time, showcasing their positive impact on global communities. Built with blockchain verification and ML-based fraud detection.",
    prizes: ["Best Design", "Atlassian Social Impact Prize"],
    tech: ["Next.js", "TypeScript", "web3.js", "AstraDB"],
    link: "https://devpost.com/software/cryptarity",
    highlight: true,
  },
  {
    year: "2024",
    event: "UNIHACK",
    project: "MyFridge",
    description:
      "Food management app that scans receipts to offer healthy grocery shopping tips and sends expiration reminders based on your health conditions.",
    prizes: ["Best Design"],
    tech: ["React Native", "TypeScript", "PostgreSQL", "Azure Vision"],
    link: "https://devpost.com/software/myfridge-slnhme",
    highlight: false,
  },
];

export default function Awards() {
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
      id="awards"
      ref={sectionRef}
      className="py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated background */}
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-[#6EE7A0]/5 rounded-l-full blur-3xl transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      />
      <div
        className={`absolute left-20 top-20 w-16 h-16 bg-[#6EE7A0]/20 rounded-full blur-2xl transition-all duration-1000 delay-500 ${
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
          <span className="text-[#6EE7A0] font-mono text-sm">04</span>
          <div
            className={`h-px bg-[#6EE7A0] transition-all duration-1000 delay-300 ${
              isVisible ? "w-12" : "w-0"
            }`}
          />
          <span className="text-[#666666] text-sm tracking-widest">AWARDS</span>
        </div>

        {/* Awards grid */}
        <div className="space-y-6">
          {awards.map((award, i) => (
            <div
              key={award.year + award.event}
              className={`group relative p-8 bg-[#161616] rounded-2xl border border-[#222222] hover:border-[#6EE7A0]/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6EE7A0]/5 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : i % 2 === 0
                  ? "opacity-90 -translate-x-6"
                  : "opacity-90 translate-x-6"
              }`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              {/* Year badge with bounce animation */}
              <div
                className={`absolute -top-3 -right-3 px-4 py-1 bg-[#6EE7A0] text-[#0a0a0a] text-sm font-bold rounded-full transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: `${i * 200 + 500}ms` }}
              >
                {award.year}
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Trophy icon with rotation */}
                <div
                  className={`text-4xl transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-90 -rotate-45 scale-50"
                  }`}
                  style={{ transitionDelay: `${i * 200 + 300}ms` }}
                >
                  🏆
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#fafafa] group-hover:text-[#6EE7A0] transition-colors">
                      {award.event}
                    </h3>
                    {award.highlight && (
                      <span
                        className={`px-2 py-0.5 text-xs bg-[#6EE7A0]/10 text-[#6EE7A0] rounded-full border border-[#6EE7A0]/20 transition-all duration-500 ${
                          isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: `${i * 200 + 600}ms` }}
                      >
                        Most Awards
                      </span>
                    )}
                  </div>

                  <p className="text-[#6EE7A0] font-medium mb-2">
                    {award.project}
                  </p>
                  <p className="text-[#a3a3a3] text-sm mb-4">
                    {award.description}
                  </p>

                  {/* Prize tags with stagger */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {award.prizes.map((prize, j) => (
                      <span
                        key={prize}
                        className={`px-3 py-1.5 bg-[#111111] text-[#fafafa] text-sm rounded-lg border border-[#222222] transition-all duration-500 hover:border-[#6EE7A0]/30 hover:bg-[#6EE7A0]/5 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-90 translate-y-3"
                        }`}
                        style={{
                          transitionDelay: `${i * 200 + j * 100 + 400}ms`,
                        }}
                      >
                        ✨ {prize}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {award.tech.map((t, j) => (
                      <span
                        key={t}
                        className={`px-2 py-1 text-xs text-[#a3a3a3] bg-[#111111] rounded transition-all duration-500 ${
                          isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-90 scale-90"
                        }`}
                        style={{
                          transitionDelay: `${i * 200 + j * 50 + 500}ms`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Devpost link */}
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#a3a3a3] hover:text-[#6EE7A0] transition-all duration-300 hover:translate-x-1"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853H10.112z" />
                    </svg>
                    <span>View on Devpost</span>
                    <svg
                      className="w-3 h-3"
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

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#6EE7A0] rounded-b-2xl transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
