import { Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className=" text-white w-full flex flex-col text-center items-center bg-[#333333] py-8 gap-6"
    >
      <section className="text-xl">
        <h2>NAPCRACARE</h2>
      </section>
      <section className=" flex flex-col gap-6 items-center lg:flex-row-reverse">
        <div className=" flex flex-row gap-1">
          <Facebook />
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
          <Phone />
          <p>951 26 366</p>
        </div>
        <div className=" flex flex-row gap-1">
          <Mail />
          <p>napraptklinikkvest@gmail.com</p>
        </div>
        <div className=" flex flex-row gap-1">
          <MapPin />
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
