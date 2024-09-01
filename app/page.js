import Image from "next/image";
import Hero from "./components/Hero";
import StackAndSocials from "./components/StackAndSocials";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <StackAndSocials />
    </div>
  );
}
