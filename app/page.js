import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Choose from "./components/Choose";
import About_our from "./components/About_our";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" ">
      <div className="bg-gradient-to-b from-[#FBBD04] to-white py-16">
        <Navbar />
        <Hero />
      </div>
      <Choose/>
      <About_our/>
        <Service/>
        <Contact/>
        <Footer/>
    </div>
  );
}
