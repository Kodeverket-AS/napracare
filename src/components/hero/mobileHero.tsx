import Image from "next/image";

export function MobileHero() {
  return (
    <div className="bg-white w-screen text-black">
      <section>
        <h2>Vi lindrer smertene dine på en profosjonell måte</h2>
        <p>Veien til helse starter her - registrer deg nå.</p>
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
        <div className="bg-blue-950 w-screen h-[100px]"></div>
      </section>
    </div>
  );
}
