"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { navItems } from "@/components/data";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import SocialMediaSection from "@/components/SocialMediaSection";
import Experiences from "@/components/Experiences";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex item-center justify-center flex-col mx-auto overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TechnicalExpertise />
        <RecentProjects />
        <Education />
        <Experiences />
        <SocialMediaSection />
        <Footer />
      </div>
    </main>
  );
}
