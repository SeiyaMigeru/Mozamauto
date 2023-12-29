import { headerLogo, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Lang from "./Lang";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10  w-full">
      <nav className="flex bg-white rounded-md px-2 justify-between gap-10 items-center max-container  bg-opacity-20">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <Lang/>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-950"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/appointment"
          className="font-montserrat leading-normal text-lg ml-2 rounded-full flex justify-center items-center px-4 py-2 border bg-stone-500 hover:bg-stone-700 text-white border-stone-500"
        >
          {" "}
          Appointment{" "}
        </a>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
