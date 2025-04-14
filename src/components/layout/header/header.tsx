import NavBarDesktop from "@/components/layout/navigation/desktop/navbar";
import NavBarMobile from "@/components/layout/navigation/mobile/navbar";

export function Header() {
  return (
    <header>
      <div className="hidden md:block">
        <NavBarDesktop />
      </div>

      <div className="block md:hidden">
        <NavBarMobile />
      </div>
    </header>
  );
}
