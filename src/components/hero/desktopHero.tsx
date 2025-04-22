import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function DesktopHero() {
  return (
    <div className="flex flex-row bg-white w-screen h-[853px] text-zinc-700 px-20">
      <section className="flex flex-col justify-center items-center w-[505px]">
        <div>
          <h2 className="text-[56px]/[110%] font-[600] mx-5 mt-5 mb-[24px]">
            Vi lindrer smertene dine på en profosjonell måte
          </h2>
          <button className="flex justify-center items-center gap-[16px] bg-main-500 w-[320px] h-[56px] mx-5 mb-[40px] rounded-[8px] text-white text-lg sm:w-[188px]">
            Bestill time <ArrowRight />
          </button>
        </div>
      </section>
      <section className="flex flex-col h-[853px]">
        <Image
          className=" position absolute h-[633px] mt-[220px]"
          src="/doctor-with-crossed-arms.png"
          width={360}
          height={648}
          alt="doctor with crossed arms"
        />
        <div className="bg-white w-screen h-[741px]" />
        <div className="bg-main-500 w-screen h-[112px]" />
      </section>
      <section className="flex justify-center- items-center">
        <div>
          <p className="max-w-[360px] text-[32px]/[120%] font-[500] mx-6 mb-[36px]">
            Veien til helse starter her - registrer deg nå.
          </p>
        </div>
      </section>
    </div>
  );
}
