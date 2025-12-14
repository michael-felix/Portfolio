import { useState, useEffect } from "react";

export default function Loading({ onComplete }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds total
    const steps = 100;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newPercentage = Math.min(
        Math.round((currentStep / steps) * 100),
        100
      );
      setPercentage(newPercentage);

      if (newPercentage >= 100) {
        clearInterval(timer);
        // Wait a bit before calling onComplete
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]">
      {/* Stirring matcha animation */}
      <div className="relative mb-12">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Matcha image with stirring rotation */}
          <div className="absolute inset-0 animate-spin-slow">
            <img
              src="/matcha.png"
              alt="Matcha"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Stirring circles effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-[#6EE7A0]/20 rounded-full animate-ping" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 md:w-28 md:h-28 border border-[#6EE7A0]/30 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </div>

      {/* Percentage counter */}
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-sans font-light text-[#6EE7A0] mb-2 tracking-wide">
          {percentage}%
        </div>
        <div className="w-64 md:w-80 h-1 bg-[#222222] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#6EE7A0] transition-all duration-100 ease-linear"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
