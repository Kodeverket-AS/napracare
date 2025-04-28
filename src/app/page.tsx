"use client";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";
import { Map } from "@/components/map";

import Services from "@/components/Services"


export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Map />
    </>
  );
}
