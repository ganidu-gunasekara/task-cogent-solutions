import AboutFinastra from "@/components/AboutFinastra";
import AgendaSection from "@/components/AgendaSection";
import EventOverview from "@/components/EventOverview";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/RegisterSection";
import SpeakersSection from "@/components/SpeakersSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EventOverview />
      <SpeakersSection/>
      <AgendaSection/>
      <AboutFinastra/>
      <RegisterSection/>
      <Footer/>
    </main>
  );
}
