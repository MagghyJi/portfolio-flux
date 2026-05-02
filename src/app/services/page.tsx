import Navigation from "../components/Navigation";
import ServicesHero from "../components/ServicesHero";
import Deliverables from "../components/Deliverables";
import SelectedWork from "../components/SelectedWork";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-white">
      <Navigation />
      <ServicesHero />
      <Deliverables />
      <SelectedWork />
      <Testimonials />
      <Footer />
    </main>
  );
}