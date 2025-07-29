import EventOverview from "@/components/EventOverview";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EventOverview />
    </main>
  );
}
