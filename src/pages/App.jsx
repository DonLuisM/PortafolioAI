import "../index.css";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#030b11] text-[#f9fafb] px-15 py-2">
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-12 rounded-full border border-slate-700 bg-slate-900/70 px-8 py-4 backdrop-blur-lg shadow-2xl">
          <a href="./Home">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <Home />

      <hr className="h-px m-10 opacity-60 border-[#334155]" />

      <Projects />
    </div>
  );
}

export default App;
