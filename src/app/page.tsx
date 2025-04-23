"use client";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";
import { Map } from "@/components/map";

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Map />
    </>
  );
}
