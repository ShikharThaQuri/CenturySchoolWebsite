import EventsSection from "./homeComponents/eventsSection";
import FirstSection from "./homeComponents/firstSection";
import FourthSection from "./homeComponents/fourthSection";
import GallerySection from "./homeComponents/gallerySection";
import MapSection from "./homeComponents/mapSection";
import SecondSection from "./homeComponents/secondSection";
import TeacherSection from "./homeComponents/teacherSection";
import ThirdSection from "./homeComponents/thirdSection";

export default function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <GallerySection />
      <TeacherSection />
      {/* <EventsSection /> */}
      <MapSection />
    </>
  );
}
