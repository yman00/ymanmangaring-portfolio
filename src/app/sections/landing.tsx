"use client"

import { personalData } from "@/data/PersonalData";
import { ArrowDownward, SwipeUp } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Socials from "@/components/socials";

export default function Home() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="h-screen bg-[#f7fafc] flex flex-col items-center justify-center">
      <div data-aos="zoom-in" className="flex flex-row mb-3">
        <h1 className="text-5xl md:text-9xl font-bold text-[#121212]">YM@NPURDY</h1>
        <h1 className="text-2xl md:text-7xl font-bold text-[#121212]">®</h1>
      </div>
      <div data-aos="zoom-in" className="flex flex-row mb-2 md:mb-3">
        <h1 className="text-1xl md:text-3xl font-bold text-gray-700">Software Developer • Data Analytics</h1>
      </div>
      <div data-aos="zoom-in">
        <Socials className="text-gray-700"/>
      </div>
      <div 
      data-aos="zoom-in"
      className="flex flex-row mt-25 swipe-up-animation"
      onClick={() => scrollToSection("about")}
      >
        <h1 className="text-gray-400">Explore</h1>
        <SwipeUp className="text-gray-400"/>
      </div>
    </section>
  );
}
