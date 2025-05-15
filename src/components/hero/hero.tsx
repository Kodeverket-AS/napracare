import { MobileHero } from "./mobileHero";
import { DesktopHero } from "./desktopHero";
import { Naprapati } from "../whatIsNaprapat/Naprapati";

export function Hero() {
  return (
    <>
      <div className="hidden xl:block">
        <DesktopHero />
      </div>
      <Naprapati />
      <div className="block xl:hidden">
        <MobileHero />
      </div>
    </>
  );
}
