"use client";

import Navigation from "../components/Navigation";
import AboutHero from "../components/AboutHero";
import AboutVision from "../components/AboutVision";
import ExperienceList from "../components/ExperienceList";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-white">
      <Navigation />
      <AboutHero />
      <AboutVision />
      <ExperienceList />
      <Footer />
    </main>
  );
}
