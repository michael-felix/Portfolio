import { useState, useEffect } from "react";

const titles = [
  "Data Science Student",
  "Software Developer",
  "Full-Stack Developer",
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    let delay = isDeleting ? 50 : 100;

    // Pause before deleting
    if (!isDeleting && displayText === currentTitle) {
      delay = 2000;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dark-border rounded-full opacity-20 animate-pulse" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-dark-border rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-10 opacity-0 animate-slideDown"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-accent tracking-wide">
              OPEN TO OPPORTUNITIES
            </span>
          </div>

          {/* Name with animation */}
          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 opacity-0 animate-scaleIn"
            style={{ animationDelay: "0.3s" }}
          >
            Michael Lim
          </h1>

          {/* Typing title */}
          <div
            className="h-12 sm:h-14 mb-10 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-2xl sm:text-3xl font-medium text-accent">
              {displayText}
              <span className="typing-cursor text-accent">|</span>
            </span>
          </div>

          {/* Visual divider */}
          <div
            className="flex items-center gap-4 mb-10 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/50" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-accent text-dark font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                View Work
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border border-dark-border text-cream font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Say Hello
                <span className="group-hover:animate-bounce">👋</span>
              </span>
            </a>
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex flex-col items-center gap-2 text-muted">
              <span className="text-xs tracking-widest">SCROLL</span>
              <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
