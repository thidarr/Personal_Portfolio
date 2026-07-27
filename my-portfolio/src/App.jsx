import Hero from "./components/Hero";
import Projects from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
