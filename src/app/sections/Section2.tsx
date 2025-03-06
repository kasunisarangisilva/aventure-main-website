"use client";

import RoundImage from "../assets/Section2/RoundImage";

const Section2 = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="relative w-full h-screen flex pt-20 pl-20 text-black overflow-hidden"
    >
      {/* Background Image or Video */}
      <div className="absolute inset-0 bg-[url('/background-image.jpg')] bg-cover bg-center"></div>
      {/* Alternatively, for a video background: */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-[110px] font-normal mb-8">
          Empowering enterprises
          <br />
          with cutting-edge
          <br />
          solutions
        </h1>

        {/* Subheading */}
        <div className="flex flex-row justify-between items-center gap-44 pt-12">
          <div>
            <RoundImage />
          </div>
          <p className="text-xl md:text-3xl px-14 text-gray-400 mb-12">
            AI-driven innovation, and transformative technology to enhance
            efficiency, drive growth, optimise operations, and unlock new
            opportunities in the ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
