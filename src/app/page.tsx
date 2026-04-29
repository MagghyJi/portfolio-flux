import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <Hero />
      </div>
      <About />
    </main>
  );
}
