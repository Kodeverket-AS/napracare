"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";


export function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        event.target instanceof Node &&
        !document.querySelector(".mobile-menu")?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="top-0 left-0 w-screen bg-white shadow-md z-50 md:hidden mt-4 overflow-x-hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-text-dark">
              NAPRACARE
            </span>
          </div>

         
          <div className="flex items-center gap-4 "> 
            <button 
              className="hidden  md:flex justify-center items-center gap-[16px] bg-main-500 hover:bg-main-400 w-auto max-w-[320px]
               sm:max-w-[188px] h-[40px] p-5 rounded-md text-white  cursor-pointer" 
             
            >
              Bestill time <ArrowRight size={16} /> 
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-dark-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div> 
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed w-screen mobile-menu bg-white shadow-md ">
          <div className="container  px-4 py-6 font-DMSans flex flex-col  items-end space-y-4">
            {[
              { id: "services", label: "Tjenester" },
              { id: "about", label: "Hva er Naprapati" },
              { id: "reviews", label: "Anmeldelser" },
              { id: "contact", label: "Kontakt" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium text-gray-600`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
