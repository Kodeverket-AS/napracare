import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Naprapati() {
  return (
    <section
      id="about"
      className="max-w-[1448px] mt-8 flex flex-col lg:flex-row items-stretch justify-center w-full text-zinc-700"
    >
      <div className="relative lg:w-1/2 w-full">
        <div className="relative w-full h-[50svh] lg:h-full">
          <Image
            src="/hva_er_naprapati.jpg"
            alt="Naprapat behandler en pasient"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="lg:w-1/2 w-full  flex flex-col px-4 lg:px-0 bg-main-100">
        <div className="m-12 ">

          <h1 className=" lg:mt-0 text-[48px] font-DMSans text-main-500 font-semibold mb-12">Hva er naprapati?</h1>
          <p className="mt-3 md:text-justify flex-grow text-dark-text">

            Behandlingen bygger på ortopedisk medisin kombinert med god kunnskap
            om bevegelsesapparatets oppbygning og funksjon. Denne tanken ligger
            til grunn for naprapatien og kan betegnes som selve kjernen. Ordet
            naprapati betyr å korrigere årsak til lidelse.
            <br />
            <br />
            Naprapatene gir manuell behandling av muskel- og leddplager.
            Naprapatene er i stor grad engasjert i klinisk arbeid med direkte
            pasientbehandling og er selvstendige i diagnostikk, undersøkelse,
            behandling og forebygging av biomekaniske feilfunksjoner og
            smertetilstander i muskel- og leddsystemet.
            <br />
            <br />
            Som du vil forstå gjennom historien er naprapati ikke noe nytt
            påfunn eller har oppstått som en blanding av forskjellige
            behandlingsformer, men har alltid vært et eget selvstendig yrke, som
            i utgangspunktet har hatt sitt eget diagnostiske system og egne
            behandlingsteknikker.
          </p>
          <button className="flex justify-center items-center gap-4 bg-main-500 hover:bg-main-400 w-full max-w-[320px] sm:max-w-[188px] h-[56px] mx-auto mt-6 mb-[40px] rounded-[8px] text-white text-lg cursor-pointer">
            Bestill time <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
