import { NavbarDesktop } from "./navbarDesktop";
import { NavbarMobile } from "./navbarMobile";

export function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>
    </>
  );
}
