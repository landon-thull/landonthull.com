"use client";

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
    label: "Projects",
    link: "/projects"
  }
];

const navItems = navLinks.map((link) => (
    <a
        key={link.label}
        href={link.link}
        className="text-timber font-normal"
        onClick={(event) => {
          event.preventDefault();
        }}
    >
      {link.label}
    </a>
));

const Header = () => {
  return (
      <header className="sticky top-0 h-16 px-4 bg-black flex justify-center">
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