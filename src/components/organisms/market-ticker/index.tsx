import TickerDataComponent from "./ticker-data";

const MarketTickerComponent = () => {
  return (
    <div className="flex items-center justify-start h-[60px] py-2 px-4 border-b  border-gray-200">
      <div className="text-[12px] dark:text-blue-200 text-blue-500 border dark:border-blue-200 border-blue-500 rounded-[32px] py-1 px-2 mr-4">
        connecting
      </div>

      <TickerDataComponent title={"btc"} value={0} />
    </div>
  );
};

export default MarketTickerComponent;
