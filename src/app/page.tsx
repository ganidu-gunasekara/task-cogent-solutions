import EventOverview from "@/components/EventOverview";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SpeakersSection from "@/components/SpeakersSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EventOverview />
      <SpeakersSection/>
    </main>
  );
}
