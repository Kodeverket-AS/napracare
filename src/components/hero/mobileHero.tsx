import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function MobileHero() {
  return (
    <div className="bg-white w-screen">
      <section className="flex justify-center items-center text-zinc-700">
        <div className="w-[360px] sm:w-[640px] gap-[24px]">
          <h2 className="text-[56px]/[110%] font-[600] mx-5 mt-5 mb-[24px]">
            Vi lindrer smertene dine på en profosjonell måte
          </h2>
          <p className="max-w-[360px] text-[32px]/[120%] font-[500] mx-6 mb-[36px]">
            Veien til helse starter her - registrer deg nå.
          </p>
          <button className="flex justify-center items-center gap-[16px] bg-main-500 w-[320px] h-[56px] mx-5 mb-[40px] rounded-[8px] text-white text-lg sm:w-[188px]">
            Bestill time <ArrowRight />
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-end items-center h-[660px] ">
        <Image
          className="flex position absolute h-[633px]"
          src="/doctor-with-crossed-arms.png"
          width={360}
          height={648}
          alt="doctor with crossed arms"
        />
        <div className="w-screen h-[548px]"></div>
        <div className="bg-main-500 w-screen h-[100px]"></div>
      </section>
    </div>
  );
}
