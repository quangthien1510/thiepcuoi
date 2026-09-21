import CoverSection from "@/components/CoverSection";
import SaveTheDateSection from "@/components/SaveTheDateSection";
import CalendarSection from "@/components/CalendarSection";
import LocationSection from "@/components/LocationSection";
import PeopleTimelineSection from "@/components/PeopleTimelineSection";
import RSVPSection from "@/components/RSVPSection";
import GiftSection from "@/components/GiftSection";
import FloatingWidgets from "@/components/FloatingWidgets";
import ScrollToTop from "@/components/ScrollToTop";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <MusicPlayer />
      <main className="relative mx-auto min-h-screen w-full max-w-[800px] overflow-x-hidden bg-[var(--color-cream)] pb-16">
      <CoverSection />
      <SaveTheDateSection />
      <CalendarSection />
      <LocationSection />
      <PeopleTimelineSection />
      <RSVPSection />
      <GiftSection />

      <FloatingWidgets />
      </main>
    </>
  );
}
