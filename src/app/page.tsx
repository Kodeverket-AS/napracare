"use client";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";
import { Map } from "@/components/map";
import { Naprapati } from "@/components/whatIsNaprapat/Naprapati";
import { Services } from "@/components/services/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Naprapati />
      <Services />
      <Reviews />
      <Map />
    </>
  );
}
