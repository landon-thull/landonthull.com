import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {ReactElement} from "react";

type SocialLink = {
  href: string;
  icon: ReactElement;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.github.com/landon-thull",
    icon: <AiFillGithub className="h-full w-full"/>
  },
  {
    href: "https://www.linkedin.com/in/landon-thull-20a987234",
    icon: <AiFillLinkedin className="h-full w-full"/>
  }
];

const SocialLinks = () => {

  const links = socialLinks.map((link) => (
      <a
          href={link.href}
          key={link.href}
          target="_blank"
          className="h-10 w-10 text-timber opacity-50 ease-in-out hover:opacity-100 hover:ml-1 hover:rotate-2 transition-all duration-100"
      >
        {link.icon}
      </a>
  ))

  return (
      <div className="hidden md:flex fixed left-0 bottom-0 p-4 flex-col gap-4 z-10">
        {links}
      </div>
  )
}

export default SocialLinks;