import Hero from "./components/Hero";
import Projects from "./components/Project";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <nav>Nav</nav>
      <Hero />
      <Projects />
      <section id="about">About</section>
      <section id="contact">Contact</section>
    </div>
  );
}

export default App;
