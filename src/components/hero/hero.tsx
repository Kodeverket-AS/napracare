import { MobileHero } from "./mobileHero";
import { DesktopHero } from "./desktopHero";

export function Hero() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHero />
      </div>
      <div className="block md:hidden">
        <MobileHero />
      </div>
    </>
  );
}
