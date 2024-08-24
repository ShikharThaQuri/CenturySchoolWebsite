import FirstSection from "./homeComponents/heroSection/firstSection";
import FourthSection from "./homeComponents/heroSection/fourthSection";
import GallerySection from "./homeComponents/gallerySection/gallerySection";
import MapSection from "./homeComponents/mapSection";
import SecondSection from "./homeComponents/heroSection/secondSection";
import TeacherSection from "./homeComponents/teacherSection";
import ThirdSection from "./homeComponents/heroSection/thirdSection";

export default function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />

      <GallerySection />

      <TeacherSection />
      <MapSection />
    </>
  );
}
