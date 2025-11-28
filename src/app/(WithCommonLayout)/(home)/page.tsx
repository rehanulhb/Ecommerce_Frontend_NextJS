"use client";

import HeroSection from "@/components/modules/home/HeroSection";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.group(user);
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default HomePage;
