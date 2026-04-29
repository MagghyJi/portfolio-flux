import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BioDetail from "./components/BioDetail";
import FullWidthImage from "./components/FullWidthImage";
import Deliverables from "./components/Deliverables";
import SelectedWork from "./components/SelectedWork";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-black">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <Hero />
      </div>
      <About />
      <BioDetail />
      <FullWidthImage />
      <Deliverables />
      <SelectedWork />
      <Testimonials />
      <News />
      <Footer />
    </main>
  );
}
