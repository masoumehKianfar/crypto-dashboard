interface cardInfoProps {
  title: string;
  value: string;
}
const CardInfo = ({ title, value }: cardInfoProps) => {
  return (
    <div className="border border-gray-500 rounded-md p-4 lg:mr-4 mb-4 lg:mb-0 w-full lg:w-1/4">
      <p className="mb-6">{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default CardInfo;
