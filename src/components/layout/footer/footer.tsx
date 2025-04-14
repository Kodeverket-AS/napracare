import Image from "next/image";
export function Footer() {
  return (
    <footer className="container flex flex-col items-center bg-gray-800">
      <section>
        <h2>NAPCRACARE</h2>
      </section>
      <section>
        <p className="hover:text-blue-600">
          <a href="">Facebook</a>
        </p>
        <p>951 26 366</p>
        <p>
          <Image src="" width={25} height={25} alt="Mail Icon" />
          napraptklinikkvest@gmail.com
        </p>
        <p className="flex flex-row gap-1">
          <Image
            src="/footer/lucide_map-pin.png"
            width={25}
            height={20}
            alt="Location Pin"
          />
          Valkenfordsgaten 9, Bergen, Norway
        </p>
      </section>
      <section>
        <p>Utviklet i regnet av Kodeverket Bergen @ 2025</p>
      </section>
    </footer>
  );
}
