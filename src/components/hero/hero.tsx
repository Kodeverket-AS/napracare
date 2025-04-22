import { MobileHero } from "./mobileHero";
import { DesktopHero } from "./desktopHero";

export function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHero />
      </div>
      <div className="block lg:hidden">
        <MobileHero />
      </div>
    </>
  );
}
