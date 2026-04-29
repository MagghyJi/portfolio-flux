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
    <main className="overflow-x-hidden w-full max-w-full">
      <Hero />
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
