
"use client";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";
import { Map } from "@/components/map";
import { Naprapati } from "@/components/Hva_Er/Naprapati";

export default function Home() {
  return (
    <>
      <Hero />
      <Naprapati/>
      <Reviews />
      <Map />
    </>
  );
}
