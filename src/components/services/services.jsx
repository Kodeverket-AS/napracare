import ServicesDesktop from "./ServicesDesktop";
import ServicesMobile from "./ServicesMobile";

export function Services() {
  return (
    <section id="services">
      <div className="hidden lg:block">
        <ServicesDesktop />
      </div>
      <div className="block lg:hidden">
        <ServicesMobile />
      </div>
    </section>
  );
}
