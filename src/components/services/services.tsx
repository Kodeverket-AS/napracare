import { ServicesDesktop } from "./ServicesDesktop";
import { ServicesMobile } from "./ServicesMobile";

export function Services() {
  return (
    <>
      <div className="hidden lg:block">
        <ServicesDesktop />
      </div>
      <div className="block lg:hidden">
        <ServicesMobile />
      </div>
    </>
  );
}
