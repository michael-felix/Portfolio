export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-cream-muted text-sm">
            <span>Built with</span>
            <span className="text-accent">♥</span>
            <span>& React</span>
          </div>

          <a
            href="#home"
            className="text-sm text-cream-muted hover:text-accent transition-colors flex items-center gap-1"
          >
            <span>↑</span>
            <span>Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
