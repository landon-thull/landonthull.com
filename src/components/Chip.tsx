interface IProps {
  title: string;
}

const Chip: React.FC<IProps> = ({ title }) => {
  return (
    <p className="inline whitespace-nowrap px-4 py-2 bg-black rounded-lg text-blue shadow-md transition-shadow hover:shadow-lg">
      {title}
    </p>
  );
};

export default Chip;
