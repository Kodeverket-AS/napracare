"use client";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";
import { Map } from "@/components/map";

import ServicesDeskop from "@/components/services/ServicesDeskop";
import ServicesMobile from "@/components/services/ServicesMobile";

export default function Home() {
  return (
    <>
      <Hero />


      <div className="block lg:hidden">
        <ServicesMobile />
      </div>

    
      <div className="hidden lg:block">
        <ServicesDeskop />
      </div>

      <Reviews />
      <Map />
    </>
  );
}
