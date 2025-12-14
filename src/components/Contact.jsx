import { useState, useEffect, useRef } from "react";
import { SiInstagram, SiLinkedin } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    url: "https://github.com/michael-felix",
  },
  {
    name: "Email",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    url: "mailto:michaelfl2006@gmail.com",
  },
  {
    name: "Instagram",
    icon: <SiInstagram className="w-6 h-6" />,
    url: "https://www.instagram.com/michael__f.l",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/michael-lim-73673b2b4",
  },
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated background */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6EE7A0]/5 rounded-full blur-3xl transition-all duration-1500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
      <div
        className={`absolute top-20 right-20 w-20 h-20 bg-[#6EE7A0]/10 rounded-full blur-2xl transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <div
        className={`absolute bottom-40 left-10 w-16 h-16 bg-[#6EE7A0]/15 rounded-full blur-xl transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Section label */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-100 -translate-y-6"
          }`}
        >
          <span className="text-[#6EE7A0] font-mono text-sm">06</span>
          <div
            className={`h-px bg-[#6EE7A0] transition-all duration-1000 delay-300 ${
              isVisible ? "w-12" : "w-0"
            }`}
          />
          <span className="text-[#666666] text-sm tracking-widest">
            CONTACT
          </span>
        </div>

        {/* Big CTA with scale animation */}
        <h2
          className={`text-4xl lg:text-6xl font-bold text-[#fafafa] mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-90 scale-98"
          }`}
        >
          Let's <span className="text-[#6EE7A0]">connect</span>
        </h2>

        <p
          className={`text-[#a3a3a3] mb-12 max-w-md mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-90 translate-y-6"
          }`}
        >
          Looking for opportunities to learn and grow. Feel free to reach out!
        </p>

        {/* Socials with bounce animation */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-90 translate-y-6"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-xs text-[#666666] tracking-widest mb-6">
            REACH OUT DIRECTLY
          </p>
          <div className="flex justify-center gap-4">
            {socials.map((social, i) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group p-4 bg-[#161616] rounded-2xl border border-[#222222] hover:border-[#6EE7A0]/30 text-[#a3a3a3] hover:text-[#6EE7A0] transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#6EE7A0]/10 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-90 scale-90"
                }`}
                style={{ transitionDelay: `${i * 100 + 500}ms` }}
              >
                <span className="block transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
          <p
            className={`text-[#a3a3a3] text-sm mt-6 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-90"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            michaelfl2006@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
