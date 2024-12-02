import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MyProject from "../components/MyProject";
import NavBar from "../components/NavBar";
import Skill from "../components/Skill";
import Testimonials from "../components/Testimonials";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skill />
      <Experience />
      <MyProject />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}
