import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
