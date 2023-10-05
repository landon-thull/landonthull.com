interface IProps {
  label: string;
}
const HeroSectionChip = ({label}: IProps) => {
  return (
      <p className="inline whitespace-nowrap px-4 py-2 bg-black rounded-lg text-blue shadow-md transition-shadow hover:shadow-lg">
        {label}
      </p>
  );
}

export default HeroSectionChip;