import Image from "next/image";
export function Footer() {
  return (
    <footer className="w-full flex flex-col text-center items-center bg-[#333333] py-8 gap-6">
      <section className="text-xl">
        <h2>NAPCRACARE</h2>
      </section>
      <section className=" flex flex-col gap-6 items-center lg:flex-row">
        <div className=" flex flex-row gap-1">
          <Image
            src="/footer/lucide_facebook.png"
            width={25}
            height={25}
            alt="Facebook Icon"
          />
          <p className="hover:text-blue-600">
            <a
              href="https://www.facebook.com/naprapatorjanbask/"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <Image
            src="/footer/lucide_phone.png"
            width={25}
            height={25}
            alt="Phone Icon"
          />
          <p>951 26 366</p>
        </div>
        <div className=" flex flex-row gap-1">
          <Image
            src="/footer/lucide_mail.png"
            width={25}
            height={25}
            alt="Mail Icon"
          />
          <p>napraptklinikkvest@gmail.com</p>
        </div>
        <div className=" flex flex-row gap-1">
          <Image
            src="/footer/lucide_map-pin.png"
            width={25}
            height={20}
            alt="Location Icon"
          />
          <p className=" flex flex-row gap-1">
            Valkenfordsgaten 9, Bergen, Norway
          </p>
        </div>
      </section>
      <section className=" flex flex-col md:flex-row md:gap-1">
        <p>Utviklet i regnet av Kodeverket Bergen</p>
        <p>@ 2025</p>
      </section>
    </footer>
  );
}
