interface cardInfoProps {
  title: string;
  value: string;
}
const CardInfo = ({ title, value }: cardInfoProps) => {
  return (
    <div className="border dark:bg-dark-gray-dark border-light-primary-light rounded-md p-4 h-full w-full lg:w-1/4">
      <p className="mb-4 text-body dark:text-dark-gray-lighter/70">{title}</p>
      <p className="text-title">{value}</p>
    </div>
  );
};

export default CardInfo;
