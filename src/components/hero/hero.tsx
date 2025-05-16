import { MobileHero } from "./mobileHero";
import { DesktopHero } from "./desktopHero";
import { Naprapati } from "../whatIsNaprapat/Naprapati";

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
