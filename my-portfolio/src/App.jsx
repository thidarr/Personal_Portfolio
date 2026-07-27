import Hero from "./components/Hero";
import Projects from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <nav>Nav</nav>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
