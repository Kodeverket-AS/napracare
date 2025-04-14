"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
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
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto my-5 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <span className="text-4xl font-bold text-dark-primary">
              NAPRACARE
            </span>
          </div>

          <div className="hidden md:flex items-center justify-center flex-grow mx-4">
            <div className="flex items-center space-x-8">
              {[
                { id: "home", label: "Tjenester" },
                { id: "about", label: "Hva er Naprapati" },
                { id: "services", label: "Anmeldelser" },
                { id: "contact", label: "Kontakt" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-dark-primary border-b-2 border-dark-primary"
                      : "text-gray-600 hover:text-dark-primary-hover"
                  }`}
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
