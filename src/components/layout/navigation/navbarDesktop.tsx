"use client";
import { useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function NavbarDesktop() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="top-0 left-0 w-screen  z-50">
      <div className="container mx-auto  py-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <Image
                src="/logo.png"
                alt="NAPRACARE logo"
                width={500}
                height={500}
                className="h-32 w-auto"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center flex-grow mx-4">
            <div className="flex font-DMSans items-center space-x-8">
              {[
                { id: "about", label: "Hva er Naprapati" },
                { id: "services", label: "Tjenester" },
                { id: "reviews", label: "Anmeldelser" },
                { id: "contact", label: "Kontakt" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base lg:text-xl font-medium text-text-dark transition duration-150 hover:text-main-500 hover:border-b-2 hover:cursor-pointer`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <button className="bg-dark-primary hover:bg-dark-primary-hover text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              Bestill time
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
