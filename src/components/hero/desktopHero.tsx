import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function DesktopHero() {
  return (
    <div>
      <section>
        <h2>Vi lindrer smertene dine på en profosjonell måte.</h2>
      </section>
      <section>
        <Image
          src="/doctor-with-crossed-arms.png"
          width={500}
          height={500}
          alt="doctor with crossed arms"
        />
      </section>
      <section>
        <p>Veien til helse starter her - registrer deg nå.</p>
      </section>
    </div>
  );
}
