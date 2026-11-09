interface TickerComponentProps {
  title: string;
  value: number;
}
const TickerDataComponent = ({ title, value }: TickerComponentProps) => {
  return (
    <div className="flex justify-start items-center pl-2 pr-4">
      <p className="mr-2">{title.toUpperCase()}</p>
      <p>{value ? value : "-"}</p>
    </div>
  );
};

export default TickerDataComponent;
