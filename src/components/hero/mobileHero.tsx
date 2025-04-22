import Image from "next/image";

export function MobileHero() {
  return (
    <div className="bg-white w-screen text-black">
      <section>
        <h2>Vi lindrer smertene dine på en profosjonell måte</h2>
        <p>Veien til helse starter her - registrer deg nå.</p>
      </section>
      <section className="h-[900px] ">
        <Image
          className="position fixed"
          src="/doctor-with-crossed-arms.png"
          width={500}
          height={500}
          alt="doctor with crossed arms"
        />
        <div className="bg-blue-500 w-screen h-[100px]"></div>
      </section>
    </div>
  );
}
