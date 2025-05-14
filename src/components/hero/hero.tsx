import { MobileHero } from "./mobileHero";
import { DesktopHero } from "./desktopHero";

export function Hero() {
  return (
    <>
      <div className="hidden xl:block">
        <DesktopHero />
      </div>
      <div className="block xl:hidden">
        <MobileHero />
      </div>
    </>
  );
}
