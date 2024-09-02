import Image from "next/image";
import Hero from "./components/Hero";
import StackAndSocials from "./components/StackAndSocials";
import { AboutSection } from "./components/AboutMe";
import { RecentProjects } from "./components/RecentProjects";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <StackAndSocials />
      <RecentProjects />
      <AboutSection />
      <Footer />
    </div>
  );
}
