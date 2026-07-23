import Hero from "./components/Hero";
import Projects from "./components/Project";
import About from "./components/About";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <nav>Nav</nav>
      <Hero />
      <Projects />
      <About />
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
