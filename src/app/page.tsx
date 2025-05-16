"use client";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";
import { Naprapati } from "@/components/whatIsNaprapat/Naprapati";
<<<<<<< HEAD
import { Services } from "@/components/services/services";
import { Map } from "@/components/map";
=======
import Services from "@/components/services/services";
import ContactForm from "@/components/contactForm";
>>>>>>> origin/development

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full container mx-auto px-8">
        <Services />
      </div>
      <Naprapati />
<<<<<<< HEAD
      <div className="w-full container mx-auto px-8">
        <Reviews />
      </div>
      <Map />
=======
      <Services />
      <Reviews />
      <div id="contact" className="flex flex-col lg:flex-row w-full px-4 lg:px-8 gap-8 mb-4 max-w-[1448px] mx-auto">
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/2">
          <Map />
        </div>
      </div>
>>>>>>> origin/development
    </>
  );
}
