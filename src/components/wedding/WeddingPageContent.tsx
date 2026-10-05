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
import OpeningCurtain from "@/components/OpeningCurtain";
import FallingLeaves from "@/components/FallingLeaves";

export default function WeddingPageContent() {
    return (
        <>
            <OpeningCurtain />
            <ScrollToTop />
            <MusicPlayer />
            <FallingLeaves />
            <main className="wedding-container relative mx-auto min-h-screen w-full max-w-[800px] overflow-x-hidden bg-[var(--color-background)] pb-16">
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