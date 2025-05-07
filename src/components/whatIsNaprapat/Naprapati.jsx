import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Naprapati() {
  return (
    <section
      id="about"
      className="max-w-[1448px] mt-12 flex flex-col  justify-center w-full bg-white text-zinc-700  lg:flex-row items-center"
    >
      <div className="relative w-[400] h-[300px] lg:w-[800px] lg:h-[650px] ">
        <Image
          src="/hva_er_naprapati.jpg"
          alt="Naprapat behandler en pasient"
          fill
        />
      </div>
      <div className="lg:w-1/2 text-justify">
        <h1 className="mt-20 ml-15 mr-15 text-2xl">Hva er naprapati?</h1>
        <p className="mt-3 ml-15 mr-15">
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
          Som du vil forstå gjennom historien er naprapati ikke noe nytt påfunn
          eller har oppstått som en blanding av forskjellige behandlingsformer,
          men har alltid vært et eget selvstendig yrke, som i utgangspunktet har
          hatt sitt eget diagnostiske system og egne behandlingsteknikker.
        </p>
        <button className="flex justify-center items-center gap-[16px] bg-main-500 w-[320px] h-[56px] mx-auto mt-8 mb-[40px] rounded-[8px] text-white text-lg sm:w-[188px]">
          Bestill time <ArrowRight />
        </button>
      </div>
    </section>
  );
}
