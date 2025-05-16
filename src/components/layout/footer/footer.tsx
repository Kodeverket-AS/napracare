"use client";

import { Facebook, Phone, Mail, MapPin, ArrowUpCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer
      id="contact"
      className="relative text-white w-full flex flex-col text-center items-center bg-main-500 py-8 gap-8"
    >
      <section className="text-3xl font-DMSans font-semibold my-4 ">
        <h2>NAPRACARE</h2>
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

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-main-400 hover:bg-main-300 text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out focus:outline-none"
          aria-label="jump to top "
        >
          <ArrowUpCircle size={28} />
        </button>
      )}
    </footer>
  );
}
