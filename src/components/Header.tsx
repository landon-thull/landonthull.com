"use client";

import Link from "next/link";
import {useState} from "react";

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
      <header className="fixed w-screen top-0 z-50 h-20 px-4 bg-black flex justify-center">
        <div className="max-w-7xl grow flex justify-between items-center">
          <p className="text-timber text-2xl font-bold">Landon Thull</p>
          <nav className="flex items-center gap-x-4">
            {navItems}
          </nav>
        </div>
      </header>
  );
}

export default Header;