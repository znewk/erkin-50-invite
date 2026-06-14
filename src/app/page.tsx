import CalendarSection from "@/components/sections/CalendarSection";
import EventInfoSection from "@/components/sections/EventInfoSection";
import HeroSection from "@/components/sections/HeroSection";
import LocationSection from "@/components/sections/LocationSection";
import MusicPlayer from "@/components/sections/MusicPlayer";
import RsvpSection from "@/components/sections/RsvpSection";
import LoadingScreen from "@/components/ui/LoadingScreen";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function HomePage() {
  return (
    // <main className="relative min-h-screen overflow-x-hidden">
    <div>
      <LoadingScreen />
      <div className="side-ornaments" />
      <div className="kazakh-bg-pattern" />
      <MusicPlayer />

      <div className="relative z-10">
        <RevealOnScroll>
          <HeroSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <EventInfoSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <CalendarSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <LocationSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <RsvpSection />
        </RevealOnScroll>
      </div>
    </div>

    // </main>
  );
}