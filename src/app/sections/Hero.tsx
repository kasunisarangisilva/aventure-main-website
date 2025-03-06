"use client";

import AventureLogo from "../assets/AventureLogo";
import DownArrow from "../assets/DownArrow";
import Section2 from "./Section2";

const Hero = () => {
  const handleExploreClick = () => {
    // Scroll to Section2
    const section2 = document.getElementById("section2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="relative w-full h-screen flex overflow-hidden">
        {/* Background Blur Effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/40 to-black/80 backdrop-blur-2xl"></div> */}

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (To Darken the Background) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col pt-16 pl-12">
          <h1 className="text-white text-6xl md:text-[110px] font-normal max-w-6xl">
            We Make Concepts <br /> into Tangible Solutions
          </h1>

          {/* Explore Button */}
          <div className="mt-6 pl-[1000px]">
            <button
              onClick={handleExploreClick}
              className="flex flex-row items-center justify-center gap-1 px-6 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm transition hover:bg-white/20"
            >
              <DownArrow />
              <span className="-ml-2 mt-2">EXPLORE</span>
            </button>
          </div>
        </div>

        {/* SVG Logo Instead of Text */}
        <div className="absolute bottom-20 left-5">
          <AventureLogo />
        </div>

        {/* Menu Icon */}
        <div className="absolute top-5 right-5">
          <button className="w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white">
            ☰
          </button>
        </div>
      </section>
      {/* Section2 with an ID for scrolling */}
      <Section2 id="section2" />
    </>
  );
};

export default Hero;
