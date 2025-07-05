"use client";
import CategorySidebar from "@/components/CategorySidebar";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import { LandRides, WaterRides, KidsRides } from "@/data";
import { useEffect, useState } from "react";
import { Slide } from "@/types";
import SmallScreenAlert from "@/components/SmallScreenAlert";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [slides, setSlides] = useState<Slide[]>(WaterRides);

  const handleCategoryChange = (selectedIndex: number) => {
    setSelectedIndex(selectedIndex);
    switch (selectedIndex) {
      case 0:
        setSlides(LandRides);
        break;
      case 1:
        setSlides(WaterRides);
        break;
      case 2:
        setSlides(KidsRides);
        break;
      default:
        setSlides(WaterRides);
    }
  };

  useEffect(() => {
    handleCategoryChange(selectedIndex);
  }, [selectedIndex]);

  return (
    <>
      <Navbar />
      <div className="flex mt-[20vh] gap-15">
        <div className="w-1/4">
          <CategorySidebar
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        <div className="w-3/4 mt-10">
          <Carousel key={selectedIndex} slides={slides} />
        </div>
      </div>
      <SmallScreenAlert />
    </>
  );
}
