import Navigation from "../components/Navigation";
import ProjectsHero from "../components/ProjectsHero";
import SelectedWork from "../components/SelectedWork";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-white">
      <Navigation />
      <ProjectsHero />
      <SelectedWork hideHeader={true} />
      <Testimonials />
      <Footer />
    </main>
  );
}