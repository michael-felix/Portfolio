import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing main content
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      <div
        className={`min-h-screen transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Awards />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
