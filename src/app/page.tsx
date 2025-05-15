"use client";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";
import { Naprapati } from "@/components/whatIsNaprapat/Naprapati";
import { Services } from "@/components/services/services";

export default function Home() {
  return (
    <div className="w-full container mx-auto px-8">
      <Hero />
      <Naprapati />
      <Services />
      <Reviews />
    </div>
  );
}
