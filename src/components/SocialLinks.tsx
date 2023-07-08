import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const anchorStyle =
  'h-10 w-10 text-timber opacity-50 hover:shadow-lg ease-in-out hover:opacity-100 hover:ml-1 hover:rotate-2 transition-all duration-100';

const SocialLinks: React.FC = () => {
  return (
    <div className="absolute left-0 bottom-0 px-4 py-4 flex flex-col gap-4 z-10">
      <a
        href="https://www.github.com/landon-thull"
        target="_blank"
        className={anchorStyle}
      >
        <AiFillGithub className="h-full w-full" />
      </a>
      <a
        href="https://www.linkedin.com/in/landon-thull-20a987234"
        target="_blank"
        className={anchorStyle}
      >
        <AiFillLinkedin className="h-full w-full" />
      </a>
    </div>
  );
};

export default SocialLinks;
