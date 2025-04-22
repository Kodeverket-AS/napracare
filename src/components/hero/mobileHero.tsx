import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function MobileHero() {
  return (
    <div className="bg-white w-screen">
      <section className="text-zinc-700 w-[360px]">
        <h2 className="text-[56px]/[110%] font-[600] mx-5 mt-5 mb-3">
          Vi lindrer smertene dine på en profosjonell måte
        </h2>
        <p className="text-[32px]/[120%] font-[500] mx-6 mb-10">
          Veien til helse starter her - registrer deg nå.
        </p>
        <button className="flex justify-center items-center gap-[16px] bg-main-500 w-[320px] h-[56px] mx-5 mb-[40px] rounded-[8px] text-white text-lg">
          Bestill time <ArrowRight />
        </button>
      </section>
      <section className="flex items-center flex-col h-[648px] ">
        <Image
          className="flex position absolute h-[648px]"
          src="/doctor-with-crossed-arms.png"
          width={350}
          height={648}
          alt="doctor with crossed arms"
        />
        <div className="w-screen h-[548px]"></div>
        <div className="bg-main-500 w-screen h-[100px]"></div>
      </section>
    </div>
  );
}
