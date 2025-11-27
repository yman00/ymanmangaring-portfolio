"use client"

import { ArrowDownward, SwipeUp } from "@mui/icons-material";

export default function Home() {

    const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="h-screen bg-white-400 flex flex-col items-center justify-center">
      <div className="flex flex-row mb-3">
        <h1 className="text-5xl md:text-9xl font-bold text-[#121212]">YM@NPURDY</h1>
        <h1 className="text-2xl md:text-7xl font-bold text-[#121212]">®</h1>
      </div>
      <div className="flex flex-row mb-25">
        <h1 className="text-1xl md:text-3xl font-bold text-gray-700">Software Developer • Data Analytics</h1>
      </div>
      <div 
      className="flex flex-row"
      onClick={() => scrollToSection("about")}
      >
        {/* <h1 className="text-gray-600">Explore</h1> */}
        <SwipeUp className="text-gray-400 swipe-up-animation"/>
      </div>
    </section>
  );
}
