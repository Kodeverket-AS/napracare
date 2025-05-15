import { MobileHero } from "./mobileHero";
import { DesktopHero } from "./desktopHero";

export function Hero() {
  return (
    <>
      <div className="hidden xl:block font-DMSans">
        <DesktopHero />
      </div>
      <div className="block xl:hidden font-DMSans">
        <MobileHero />
      </div>
    </>
  );
}
