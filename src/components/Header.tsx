"use client";

import Link from "next/link";
import {useState} from "react";
import {RxHamburgerMenu} from "react-icons/rx";
import {AiOutlineClose} from "react-icons/ai";

type NavLink = {
  label: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    // not implemented yet
    label: "Projects",
    link: "#"
  }
];

const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [active, setActive] = useState<string>(navLinks[0].link);

  const navItems = navLinks.map((link) => (
      <Link
          href={link.link}
          key={link.link}
          onClick={() => setActive(link.link)}
          className={`${active === link.link ? "text-blue font-semibold" : "text-timber"} text-lg`}
      >
        {link.label}
      </Link>
  ));

  return (
      <header className="fixed w-screen top-0 z-50 h-20 px-6 bg-black flex flex-wrap justify-center">
        <div className="max-w-7xl grow h-20 flex justify-between md:justify-center items-center">
          <p className="text-timber md:hidden text-2xl font-bold">Landon Thull</p>
          <nav className="hidden md:flex items-center gap-x-4">
            {navItems}
          </nav>
          <button onClick={() => setOpenNav(!openNav)} className={`inline-block md:hidden ${openNav ? "text-blue" : null}`}>
            {openNav ? <AiOutlineClose className="w-6 h-6"/> :<RxHamburgerMenu className="w-6 h-6"/>}
          </button>
        </div>
        {
          openNav ?
              <nav className="flex grow-0 pb-4 gap-y-2 w-full flex-col md:hidden">
                {navItems}
              </nav> :
              null
        }
      </header>
  );
}

export default Header;