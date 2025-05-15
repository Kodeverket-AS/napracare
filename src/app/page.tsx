"use client";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";
import { Naprapati } from "@/components/whatIsNaprapat/Naprapati";
import { Services } from "@/components/services/services";
import { Map } from "@/components/map";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full container mx-auto px-8">
        <Services />
      </div>

      <div className="w-full container mx-auto px-8">
        <Reviews />
      </div>
      <Map />
    </>
  );
}
