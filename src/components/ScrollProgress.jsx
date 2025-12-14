import { useScrollProgress } from "../hooks/useScrollAnimation";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-dark-border">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-glow transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
