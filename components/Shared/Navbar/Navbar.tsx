import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export  function Navbar() {
  return (
    <nav>
        <div className="hidden mx-auto md:block">
            <NavDesktop />
        </div>
        <div className="md:hidden">
            <NavMobile />
        </div>
    </nav>
  )
}
