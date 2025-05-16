import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function MobileHero() {
  return (
    <div className="bg-white w-[calc(100vw-15px)]">
<<<<<<< HEAD
      <section className="flex justify-center items-center text-zinc-700">
        <div className="w-[360px] sm:w-[640px] gap-[24px]">
          <h2 className="text-[56px]/[110%] font-[600] mx-6 mt-5 mb-[24px]">
=======
      <section className="flex justify-center items-center text-dark-text">
        <div className="w-9/10 flex gap-8 justify-center md:items-center md:flex-col flex-col ">
          <h2 className="text-5xl/16 font-semibold md:text-center mt-5  ">
>>>>>>> origin/development
            Vi lindrer smertene dine på en profesjonell måte
          </h2>
          <p className="max-w-[360px] text-3xl font-medium md:text-center mb-[36px]">
            Veien til helse starter her - registrer deg nå.
          </p>
          <button className="flex justify-center items-center gap-[16px] bg-main-500 hover:bg-main-400 
           cursor-pointer h-[56px] mx-5 mb-[40px] rounded-[8px] text-white text-lg md:w-[188px]">
            Bestill time <ArrowRight />
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-end items-center h-[661px] ">
        <Image
          className="flex position absolute h-[633px]"
          src="/doctor-with-crossed-arms.png"
          width={360}
          height={648}
          alt="doctor with crossed arms"
        />
        <div className="w-full h-[549px]"></div>
        <div className="bg-main-500 w-screen h-[112px]"></div>
      </section>
    </div>
  );
}
