import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function DesktopHero() {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-[calc(100vw-15px)]h-[853px] text-zinc-700">
      <div className="flex flex-row position absolute w-full justify-between container mx-auto px-8">
        <section className="flex justify-center items-center w-[505px]">
          <div>
            <h2 className="text-[56px]/[110%] font-[600]  mt-5 mb-[24px]">
              Vi lindrer smertene dine på en profesjonell måte
            </h2>
            <button className="flex justify-center items-center gap-[16px] bg-main-500 w-[320px] h-[56px] mb-[40px] rounded-[8px] text-white text-lg sm:w-[188px]">
              Bestill time <ArrowRight />
            </button>
          </div>
        </section>
        <section className="flex flex-col h-[853px]">
          <Image
            className="h-[800px] mt-[53px] min-w-[444]"
            src="/doctor-with-crossed-arms.png"
            width={444}
            height={800}
            alt="doctor with crossed arms"
          />
        </section>
        <section className="flex justify-center- items-center">
          <div>
            <p className="max-w-[360px] text-[32px]/[120%] font-[500] mx-6 mb-[36px]">
              Veien til helse starter her <br />- registrer deg nå.
            </p>
          </div>
        </section>
      </div>
      <div className="bg-white w-full h-[741px]" />
      <div className="bg-main-500 w-screen h-[112px]" />
    </div>
  );
}
