import AnnouncementBar from "./components/announcementBar/AnnouncementBar";
import ChooseUs from "./components/chooseUs/ChooseUs";
import DigitalMarketing from "./components/digitalMarketing/DigitalMarketing";
import EmpowerBusiness from "./components/empowerBusiness/EmpowerBusiness";
import Footer from "./components/footer/Footer";
import BusinessStruggles from "./components/businessStruggles/BusinessStruggles";
import FullScreenImage from "./components/fullScreenImage/FullScreenImage";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import QuestionSection from "./components/questionSection/QuestionSection";
import SupportSection from "./components/supportSection/SupportSection";
import Testimonial from "./components/testimonial/Testimonial";
import WorkSection from "./components/workSection/WorkSection";
import LogoSection from "./components/logoSection/LogoSection";

function RiveraLab() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <LogoSection />
      <FullScreenImage />
      <BusinessStruggles />
      <SupportSection />
      <ChooseUs />
      <Testimonial />
      <WorkSection />
      <DigitalMarketing />
      <QuestionSection />
      <EmpowerBusiness />
      <Footer />
    </div>
  );
}

export default RiveraLab;
