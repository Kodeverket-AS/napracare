import { NavbarDesktop } from "./navbarDesktop";
import { NavbarMobile } from "./navbarMobile";

export function Navbar() {
  return (
    <>
      <div className="hidden lg:block w-[calc(100vw-15px)]">
        <NavbarDesktop />
      </div>
      <div className="block lg:hidden w-[calc(100vw-15px)]">
        <NavbarMobile />
      </div>
    </>
  );
}
